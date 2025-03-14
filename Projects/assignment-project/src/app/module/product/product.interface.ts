export type TVariant = {
    type: string;
    value: string;
};

export type TInventory = {
    quantity: number;
    inStock: boolean;
};

export type TItem = {
    productId: number;
    name: string;
    description?: string;
    price: number;
    category: string;
    tags?: string[];
    variants: TVariant[];
    inventory: TInventory;
};
