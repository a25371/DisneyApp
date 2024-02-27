import { Customer } from './customer.entity';
import { Favorito } from 'src/peliculas/entities/favorito.entity';
export declare class User {
    id: number;
    email: string;
    password: string;
    role: string;
    createAt: Date;
    updateAt: Date;
    customer: Customer;
    favoritos: Favorito[];
}
