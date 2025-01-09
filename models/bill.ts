import { Fridge } from "./fridge";
import { ProductCount } from "./productCount";
import { User } from "./user";

export interface Bill {
    Identifier: number;
    Products: ProductCount[];
    Date: Date;
    User: User;
    Fridge: Fridge;
    GetTotalPrice(): number;
} 