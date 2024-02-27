import { UsersService } from '../services/users.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<unknown>;
    get(id: number): Promise<import("../entities/user.entity").User>;
    getOrders(id: number): Promise<import("../entities/order.entity").Order>;
    create(payload: CreateUserDto): Promise<import("../entities/user.entity").User>;
    update(id: number, payload: UpdateUserDto): Promise<import("../entities/user.entity").User>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
