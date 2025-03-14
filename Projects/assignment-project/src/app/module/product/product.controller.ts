import { Request, Response } from "express"
import { ProductService } from "./product.service"
import productValidationSchema from "./product.validation"


const createProduct = async (req: Request, res: Response) =>{
    try{
        const product = req.body.product
        const zodProductData = productValidationSchema.parse(product)

        const result = await ProductService.createProductIntoDB(zodProductData)
        
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result
        })

    }catch(err: unknown){
        if(err instanceof Error){
            res.status(500).json({
                success: false,
                error: err || "Something went wrong!!",
            })
        }else{
            res.status(500).json({
                success: false,
                message: "Product creation unsuccessfull!!",
                error: err
            })
        }
    }
}

const getAllProduct = async (req: Request, res: Response) =>{
    try{
        const result = await ProductService.getAllProductsFromDB()

        res.status(200).json({
            success: true,
            message: "Products fetched successfull !",
            data: result
        })

    }catch(err: unknown){
        if(err instanceof Error){
            res.status(500).json({
                success: false,
                error: err || "Something went wrong!!",
            })
        }else{
            res.status(500).json({
                success: false,
                message: "Products fetching unsuccessfull!!",
                error: err
            })
        }
    }
}

const getSingleProduct = async (req: Request, res: Response) =>{
    try{
        const productId = req.params.productId 
        const result = await ProductService.getSingleProductsFromDB(productId)

        if(result == null){
            res.status(400).json({
                success: false,
                message: "Product not found !",
                data: result
            })

        } else{
            res.status(200).json({
                success: true,
                message: "Product fetched successfull !",
                data: result
            })
        }

    }catch(err: unknown){
        if(err instanceof Error){
            res.status(500).json({
                success: false,
                error: err || "Something went wrong!!",
            })
        }else{
            res.status(500).json({
                success: false,
                message: "Product fetching unsuccessfull!!",
                error: err
            })
        }
    }
}

const updateProduct = async (req: Request, res: Response) =>{
    try{
        const product = req.body.product
        const id = parseInt(req.params.productId)
    
        const result = await ProductService.updateProductFromDB(id,product)

        console.log("In here",result)

        if(!result){
            res.status(400).json({
                success: false,
                message: "Product does not exist!",
                data: result
            })
        }

        res.status(200).json({
            success: true,
            message: "Product successfully update !",
            data: result
        })
        

    }catch(err: unknown){
        if(err instanceof Error){
            res.status(500).json({
                success: false,
                error: err || "Something went wrong!!",
            })
        }else{
            res.status(500).json({
                success: false,
                message: "Product fetching unsuccessfull!!",
                error: err
            })
        }
    }
}

const deleteProduct = async (req: Request, res: Response) =>{
    try{
        const productId = req.params.productId 
        const result = await ProductService.deleteProductFromDB(productId)
        
        if(result.deletedCount === 0){
            res.status(400).json({
                success: false,
                message: "Product not found!",
                data: result
            })
        }
        else{
            res.status(200).json({
                success: true,
                message: "Product successfull deleted!",
                data: result
            })
        }

    }catch(err: unknown){
        if(err instanceof Error){
            res.status(500).json({
                success: false,
                error: err || "Something went wrong!!",
            })
        }else{
            res.status(500).json({
                success: false,
                message: "Product fetching unsuccessfull!!",
                error: err
            })
        }
    }
}

export const ProductController = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct,
}