import { PeliculasService } from '../services/peliculas.service';
import { Pelicula } from '../entities/pelicula.entity';
export declare class PeliculasController {
    private readonly peliculasService;
    constructor(peliculasService: PeliculasService);
    findAll(): Promise<Pelicula[]>;
    findByCategoria(categoriaId: number): Promise<Pelicula[]>;
}
