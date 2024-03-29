"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeliculasModule = void 0;
const common_1 = require("@nestjs/common");
const peliculas_controller_1 = require("./controllers/peliculas.controller");
const peliculas_service_1 = require("./services/peliculas.service");
const typeorm_1 = require("@nestjs/typeorm");
const pelicula_entity_1 = require("./entities/pelicula.entity");
const categoria_entity_1 = require("./entities/categoria.entity");
const favorito_entity_1 = require("./entities/favorito.entity");
let PeliculasModule = class PeliculasModule {
};
PeliculasModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([pelicula_entity_1.Pelicula, categoria_entity_1.Categoria, favorito_entity_1.Favorito])],
        controllers: [peliculas_controller_1.PeliculasController],
        providers: [peliculas_service_1.PeliculasService],
    })
], PeliculasModule);
exports.PeliculasModule = PeliculasModule;
//# sourceMappingURL=peliculas.module.js.map