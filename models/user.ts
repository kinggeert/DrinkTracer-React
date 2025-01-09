import { Bill } from "./bill";
import { Fridge } from "./fridge";

export interface User {
    Identifier: number;
    UserName: string;
    PasswordHash: string;
    EMail: string;
    Bills: Bill[];
    Fridges: Fridge[];
} 