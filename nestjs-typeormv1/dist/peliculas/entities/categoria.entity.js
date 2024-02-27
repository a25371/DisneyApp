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
exports.Categoria = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const pelicula_entity_1 = require("./pelicula.entity");
let Categoria = class Categoria {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, nombre: { required: true, type: () => String }, descripcion: { required: true, type: () => String }, creado_en: { required: true, type: () => Date }, peliculas: { required: true, type: () => [require("./pelicula.entity").Pelicula] } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Categoria.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 255, unique: true }),
    __metadata("design:type", String)
], Categoria.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column('text', { nullable: true }),
    __metadata("design:type", String)
], Categoria.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Categoria.prototype, "creado_en", void 0);
__decorate([
    typeorm_1.ManyToMany(() => pelicula_entity_1.Pelicula, (pelicula) => pelicula.categorias),
    __metadata("design:type", Array)
], Categoria.prototype, "peliculas", void 0);
Categoria = __decorate([
    typeorm_1.Entity('categorias')
], Categoria);
exports.Categoria = Categoria;
//# sourceMappingURL=categoria.entity.js.map