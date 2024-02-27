"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pelicula = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const categoria_entity_1 = require("./categoria.entity");
const favorito_entity_1 = require("./favorito.entity");
let Pelicula = class Pelicula {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, titulo: { required: true, type: () => String }, descripcion: { required: true, type: () => String }, fecha_lanzamiento: { required: true, type: () => Date }, imagen: { required: true, type: () => String }, creado_en: { required: true, type: () => Date }, categorias: { required: true, type: () => [require("./categoria.entity").Categoria] }, favoritos: { required: true, type: () => [require("./favorito.entity").Favorito] } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Pelicula.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 255 }),
    __metadata("design:type", String)
], Pelicula.prototype, "titulo", void 0);
__decorate([
    typeorm_1.Column('text', { nullable: true }),
    __metadata("design:type", String)
], Pelicula.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Pelicula.prototype, "fecha_lanzamiento", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Pelicula.prototype, "imagen", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Pelicula.prototype, "creado_en", void 0);
__decorate([
    typeorm_1.ManyToMany(() => categoria_entity_1.Categoria),
    typeorm_1.JoinTable({
        name: 'peliculas_categorias',
        joinColumn: { name: 'pelicula_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'categoria_id', referencedColumnName: 'id' },
    }),
    __metadata("design:type", Array)
], Pelicula.prototype, "categorias", void 0);
__decorate([
    typeorm_1.OneToMany(() => favorito_entity_1.Favorito, (favorito) => favorito.pelicula),
    __metadata("design:type", Array)
], Pelicula.prototype, "favoritos", void 0);
Pelicula = __decorate([
    typeorm_1.Entity('peliculas')
], Pelicula);
exports.Pelicula = Pelicula;
//# sourceMappingURL=pelicula.entity.js.map