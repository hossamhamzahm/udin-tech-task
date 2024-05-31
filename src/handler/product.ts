import { Request, Response } from "express"
import Product from "../db/model/product"
import ProductSchema from "../validator/product"


const index = async(req: Request, res: Response) => {
    const { category=undefined } = req.query

    try{
        const where: {[key: string]: any} = {}
        if (category) where.category = category
        const products = await Product.findAll({ where })
        res.send({ products });
    }
    catch(e: unknown) {
        const message = (e as Error).message
        res.status(400).send({ message })
    }
}


const update = async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        const validated_product = await ProductSchema.validateAsync(req.body)
        const product = await Product.update(validated_product.product, {where: {id}})
        
        if(product[0] == 0) throw new Error(`404, no user with id ${id}`)
        else res.status(201).send({ message: "Product updated successfully." });
    }
    catch (e: unknown) {
        const message = (e as Error).message 
        res.status(400).send({ message })
    }
}


const remove = async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        const product = await Product.destroy({ where: { id } })
        if (product == 0) throw new Error(`404, no user with id ${id}`)
        else res.status(200).send({ message: "Product deleted successfully." });
    }
    catch (e: unknown) {
        const message = (e as Error).message
        res.status(400).send({ message })
    }
}


const create = async (req: Request, res: Response) => {
    try {
        const validated_product = await ProductSchema.validateAsync(req.body)
        const product = await Product.create(validated_product.product)
        res.status(201).send({ product });
    }
    catch (e: unknown) {
        const message = (e as Error).message
        res.status(400).send({ message })
    }
}


const show = async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        const product = await Product.findOne({ where: { id } })
        if (!product) throw new Error(`404, no user with id ${id}`)
        else res.send({ product });
    }
    catch (e: unknown) {
        const message = (e as Error).message
        res.send({ message })
    }
}


export default{
    index,
    show,
    update,
    create,
    remove
}