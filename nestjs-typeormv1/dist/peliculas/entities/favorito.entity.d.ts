import { User } from 'src/users/entities/user.entity';
import { Pelicula } from './pelicula.entity';
export declare class Favorito {
    id: number;
    usuario_id: number;
    pelicula_id: number;
    creado_en: Date;
    user: User;
    pelicula: Pelicula;
}
