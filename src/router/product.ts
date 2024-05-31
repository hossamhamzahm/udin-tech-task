import express from "express";
import ProductHandler from "../handler/product"

const router = express.Router()

router.get('/', ProductHandler.index);
router.get('/:id', ProductHandler.show);
router.put('/:id', ProductHandler.update);
router.delete('/:id', ProductHandler.remove);
router.post('/', ProductHandler.create);


export default router