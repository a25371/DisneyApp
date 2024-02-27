import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';
import { ProductsService } from './../services/products.service';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getProducts(limit: number, offset: number, brand: string): Promise<import("../entities/product.entity").Product[]>;
    getProductFilter(): string;
    getOne(productId: number): Promise<import("../entities/product.entity").Product>;
    create(payload: CreateProductDto): Promise<import("../entities/product.entity").Product>;
    update(id: number, payload: UpdateProductDto): Promise<import("../entities/product.entity").Product>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
