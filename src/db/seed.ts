import Product from "./model/product"


const product1 = {
    name: "Cotton Shirt",
    category: "cloths",
    unit_price: 5.5,
    quantity: 4
}
const product2 = {
    name: "Bananas",
    category: "food",
    unit_price: 120,
    quantity: 3
}


const products = [product1, product2]


const seed = async(): Promise<void> => {
    await Product.sync();
    await Product.bulkCreate(products);
    console.log("Seeding finished successfully.")
    process.exit(0)
}


seed();