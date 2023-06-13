import express from "express";
import { 
    getProducts,
    getProductById,
    createProduct,
    updateProdcut,
    deleteProduct
 } from "../controller/ProductController.js"

const router = express.Router();

router.get('/products', getProducts )
router.get('/products/:id', getProductById)
router.post('/products', createProduct)
router.patch('/products/:id', updateProdcut)
router.delete('/products/:id', deleteProduct )

export default router;