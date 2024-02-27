import { Customer } from '../entities/customer.entity';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';
import { Repository } from 'typeorm';
export declare class CustomersService {
    private customerRepo;
    constructor(customerRepo: Repository<Customer>);
    private counterId;
    findAll(): Promise<Customer[]>;
    findOne(id: number): Promise<Customer>;
    create(data: CreateCustomerDto): Promise<Customer>;
    update(id: number, changes: UpdateCustomerDto): Promise<Customer>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
