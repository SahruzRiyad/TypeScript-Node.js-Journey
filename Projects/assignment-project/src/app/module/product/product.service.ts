import { TItem } from './product.interface';
import { Product } from './product.model';

const createProductIntoDB = async (item: TItem) => {
    const result = await Product.create(item);
    return result;
};

const getAllProductsFromDB = async () => {
    const result = await Product.find();
    return result;
};

const getSingleProductsFromDB = async (productId: string) => {
    const result = await Product.findOne({ productId: parseInt(productId) });
    return result;
};

const updateProductFromDB = async (id: number, product: Partial<TItem>) => {
    const findProduct = await Product.findOne({ productId: { $eq: id } });

    if (!findProduct) return null;

    const result = await Product.updateOne(
        { productId: id },
        { $set: product },
    );

    return result;
};

const deleteProductFromDB = async (productId: string) => {
    const result = await Product.deleteOne({ productId: parseInt(productId) });
    return result;
};

const searchProductInDB = async (searchTerm: string) => {
    const regex = new RegExp(searchTerm, 'i');
    const result = await Product.find({
        $or: [
            { name: { $regex: regex } },
            { description: { $regex: regex } },
            { category: { $regex: regex } },
            { tags: { $in: [regex] } },
            { price: { $eq: parseFloat(searchTerm) || -1 } },
            { 'variants.type': { $regex: regex } },
            { 'variants.value': { $regex: regex } },
            { 'inventory.quantity': { $eq: parseFloat(searchTerm) || -1 } },
        ],
    });

    return result;
};

export const ProductService = {
    createProductIntoDB,
    getAllProductsFromDB,
    getSingleProductsFromDB,
    updateProductFromDB,
    deleteProductFromDB,
    searchProductInDB,
};
