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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeliculasController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const peliculas_service_1 = require("../services/peliculas.service");
let PeliculasController = class PeliculasController {
    constructor(peliculasService) {
        this.peliculasService = peliculasService;
    }
    findAll() {
        return this.peliculasService.findAll();
    }
    findByCategoria(categoriaId) {
        return this.peliculasService.findByCategoria(categoriaId);
    }
};
__decorate([
    common_1.Get(),
    openapi.ApiResponse({ status: 200, type: [require("../entities/pelicula.entity").Pelicula] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PeliculasController.prototype, "findAll", null);
__decorate([
    common_1.Get('categoria/:categoriaId'),
    openapi.ApiResponse({ status: 200, type: [require("../entities/pelicula.entity").Pelicula] }),
    __param(0, common_1.Param('categoriaId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PeliculasController.prototype, "findByCategoria", null);
PeliculasController = __decorate([
    common_1.Controller('peliculas'),
    __metadata("design:paramtypes", [peliculas_service_1.PeliculasService])
], PeliculasController);
exports.PeliculasController = PeliculasController;
//# sourceMappingURL=peliculas.controller.js.map