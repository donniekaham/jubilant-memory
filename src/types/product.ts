
export interface InventoryChange {
    date: string;
    quantityChanged: number;
    newQuantity: number;
    changedBy: string;
    location: string;
    description: string;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    productType: string;
    retailPrice: number;
    wholesalePrice: number;
    status: string;
    sku: string;
    category: string;
    location: string;
    inventoryChanges?: InventoryChange[];  // New field to track inventory history
}
