import { Product } from './../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from './../dtos/products.dtos';
import { Repository } from 'typeorm';
import { Category } from '../entities/category.entity';
export declare class ProductsService {
    private productRepo;
    private categoryRepo;
    constructor(productRepo: Repository<Product>, categoryRepo: Repository<Category>);
    findAll(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    create(data: CreateProductDto): Promise<Product>;
    update(id: number, changes: UpdateProductDto): Promise<Product>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
