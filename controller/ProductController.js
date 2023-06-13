import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient();

export const getProducts = async (req, res) => {
    try {
        const response = await prisma.product.findMany();

        if(response === null){
            return res.status(200).json({
                message: "There is no product",
                data: {}
            })
        }

        res.status(200).json({
            message: "Success get all product",
            data: response
        })
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const getProductById = async (req, res) => {
    try {
        const response = await prisma.product.findUnique({
            where:{
                id: Number(req.params.id)
            }
        });

        if(response === null){
            return res.status(200).json({
                message: "There is no product",
                data: {}
            })
        };

        res.status(200).json({
            message: "Success get product",
            data: response
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

export const createProduct = async (req, res) => {
    const {name, price}  = req.body; 
    try {
        const product = await prisma.product.create({
            data: {
                name: name,
                price: price
            }
        })
        res.status(201).json({
            message: "Success create product",
            data: product
        })
     } catch (error) {
        res.status(400).json({
            message: error.message
        })
     }
}

export const updateProdcut = async (req, res) => {
    const {name, price}  = req.body; 
    try {
        const product = await prisma.product.update({
            where: {
                id: Number(req.params.id)
            },
            data: {
                name: name,
                price: price
            }
        })
        res.status(200).json({
            message: "Success update product",
            data: product
        })
     } catch (error) {
        res.status(400).json({
            message: error.message
        })
     }
}

export const deleteProduct = async (req, res) => {
    try {
        const product = await prisma.product.delete({
            where: {
                id: Number(req.params.id)
            }
        })
        res.status(200).json({
            message: "Success delete product",
            data: product
        })
     } catch (error) {
        res.status(400).json({
            message: error.message
        })
     }
}
