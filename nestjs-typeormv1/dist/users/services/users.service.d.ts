import { ConfigService } from '@nestjs/config';
import { User } from '../entities/user.entity';
import { Order } from '../entities/order.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { ProductsService } from './../../products/services/products.service';
import { Client } from 'pg';
import { Repository } from 'typeorm';
export declare class UsersService {
    private productsService;
    private configService;
    private clientePG;
    private userRepo;
    constructor(productsService: ProductsService, configService: ConfigService, clientePG: Client, userRepo: Repository<User>);
    private counterId;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    create(data: CreateUserDto): Promise<User>;
    update(id: number, changes: UpdateUserDto): Promise<User>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    getOrderByUser(id: number): Promise<Order>;
    getTasks(): Promise<unknown>;
}
