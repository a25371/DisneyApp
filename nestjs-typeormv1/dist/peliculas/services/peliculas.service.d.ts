import { Pelicula } from '../entities/pelicula.entity';
import { Repository } from 'typeorm';
export declare class PeliculasService {
    private peliculasRepository;
    constructor(peliculasRepository: Repository<Pelicula>);
    findAll(): Promise<Pelicula[]>;
    findByCategoria(categoriaId: number): Promise<Pelicula[]>;
}
