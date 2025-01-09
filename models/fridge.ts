import { GroceryList } from "./groceryList";
import { Product } from "./product";
import { User } from "./user";

export interface Fridge {
    Identifier: number;
    Name: string;
    Users: User[];
    Products: Product[];
    GroceryLists: GroceryList[];
} 