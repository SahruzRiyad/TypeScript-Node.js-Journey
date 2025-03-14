import { model, Schema } from 'mongoose';
import { TItem, TVariant, TInventory } from './product.interface';

const variantSchema = new Schema<TVariant>(
    {
        type: {
            type: String,
            required: true,
        },

        value: {
            type: String,
            required: true,
        },
    },
    { _id: false },
);

const inventorySchema = new Schema<TInventory>(
    {
        quantity: {
            type: Number,
            required: true,
        },

        inStock: {
            type: Boolean,
            required: true,
        },
    },
    { _id: false },
);

const productSchema = new Schema<TItem>({
    productId: {
        type: Number,
        require: true,
        unique: true,
    },
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        required: false,
    },
    price: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        required: false,
    },
    variants: {
        type: [variantSchema],
        required: true,
    },
    inventory: {
        type: inventorySchema,
        required: true,
    },
});

export const Product = model<TItem>('Product', productSchema);
