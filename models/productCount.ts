import { Product } from './product';

export interface ProductCount {
    Identifier: number;
    product: Product;
    Count: number;
    GetTotalPrice(): number;
} 