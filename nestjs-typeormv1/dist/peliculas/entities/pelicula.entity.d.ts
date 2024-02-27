import { Categoria } from './categoria.entity';
import { Favorito } from './favorito.entity';
export declare class Pelicula {
    id: number;
    titulo: string;
    descripcion: string;
    fecha_lanzamiento: Date;
    imagen: string;
    creado_en: Date;
    categorias: Categoria[];
    favoritos: Favorito[];
}
