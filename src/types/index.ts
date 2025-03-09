export interface Product {
    name: string;
    price: number;
    image: string;
}

export interface CartItem extends Product {
    quantity: number;
}