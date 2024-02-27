import { Product } from "./product.entity";
export declare class Category {
    id: number;
    name: string;
    createAt: Date;
    updateAt: Date;
    products: Product[];
}
