import { User } from './user.entity';
export declare class Customer {
    id: number;
    name: string;
    lastName: string;
    phone: string;
    createAt: Date;
    updateAt: Date;
    user: User;
}
