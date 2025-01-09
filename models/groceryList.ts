import { Fridge } from "./fridge";
import { ProductCount } from "./productCount";
import { User } from "./user";

export interface GroceryList {
    Identifier: number;
    Groceries: ProductCount[];
    Date: Date;
    ApplicableUser: User;
    Fridge: Fridge;
    GetTotalPrice(): number;
} 