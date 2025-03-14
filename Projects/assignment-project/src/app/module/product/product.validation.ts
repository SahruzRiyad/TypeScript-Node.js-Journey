import { z } from 'zod';

const variantValidationSchema = z.object({
    type: z
        .string({
            required_error: 'Variant type is required',
            invalid_type_error: 'Variant type must be a string',
        })
        .nonempty('Variant type cannot be empty'),
    value: z
        .string({
            required_error: 'Variant value is required',
            invalid_type_error: 'Variant value must be a string',
        })
        .nonempty('Variant value cannot be empty'),
});

const inventoryValidationSchema = z.object({
    quantity: z
        .number({
            required_error: 'Quantity is required',
            invalid_type_error: 'Quantity must be a number',
        })
        .min(0, 'Quantity cannot be negative'),
    inStock: z.boolean({
        required_error: 'InStock is required',
        invalid_type_error: 'InStock must be a boolean',
    }),
});

const productValidationSchema = z.object({
    productId: z.number(),
    name: z
        .string({
            required_error: 'Name is required',
            invalid_type_error: 'Name must be a string',
        })
        .max(20, 'Name cannot be greater than 20 characters'),
    description: z.string().optional(),
    price: z
        .number({
            required_error: 'Price is required',
            invalid_type_error: 'Price must be a number',
        })
        .default(0),
    category: z
        .string({
            required_error: 'Category is required',
            invalid_type_error: 'Category must be a string',
        })
        .max(15, 'Category cannot be greater than 15 characters'),
    tags: z.array(z.string()).optional(),
    variants: z.array(variantValidationSchema, {
        required_error: 'Variants are required',
        invalid_type_error: 'Variants must be an array of variant objects',
    }),
    inventory: inventoryValidationSchema,
});

export default productValidationSchema;
