import { Pelicula } from './pelicula.entity';
export declare class Categoria {
    id: number;
    nombre: string;
    descripcion: string;
    creado_en: Date;
    peliculas: Pelicula[];
}
