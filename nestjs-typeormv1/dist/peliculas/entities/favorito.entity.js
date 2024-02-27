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
exports.Favorito = void 0;
const openapi = require("@nestjs/swagger");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
const pelicula_entity_1 = require("./pelicula.entity");
let Favorito = class Favorito {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, usuario_id: { required: true, type: () => Number }, pelicula_id: { required: true, type: () => Number }, creado_en: { required: true, type: () => Date }, user: { required: true, type: () => require("../../users/entities/user.entity").User }, pelicula: { required: true, type: () => require("./pelicula.entity").Pelicula } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Favorito.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Favorito.prototype, "usuario_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Favorito.prototype, "pelicula_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Favorito.prototype, "creado_en", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.User, (user) => user.favoritos),
    typeorm_1.JoinColumn({ name: 'usuario_id' }),
    __metadata("design:type", user_entity_1.User)
], Favorito.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(() => pelicula_entity_1.Pelicula, (pelicula) => pelicula.favoritos),
    typeorm_1.JoinColumn({ name: 'pelicula_id' }),
    __metadata("design:type", pelicula_entity_1.Pelicula)
], Favorito.prototype, "pelicula", void 0);
Favorito = __decorate([
    typeorm_1.Entity('favoritos')
], Favorito);
exports.Favorito = Favorito;
//# sourceMappingURL=favorito.entity.js.map