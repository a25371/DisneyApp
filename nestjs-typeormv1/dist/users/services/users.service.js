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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const user_entity_1 = require("../entities/user.entity");
const products_service_1 = require("./../../products/services/products.service");
const pg_1 = require("pg");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let UsersService = class UsersService {
    constructor(productsService, configService, clientePG, userRepo) {
        this.productsService = productsService;
        this.configService = configService;
        this.clientePG = clientePG;
        this.userRepo = userRepo;
        this.counterId = 1;
    }
    findAll() {
        const apiKey = this.configService.get('API_KEY');
        const dbName = this.configService.get('DATABASE_NAME');
        console.log(apiKey, dbName);
        return this.userRepo.find();
    }
    async findOne(id) {
        const user = this.userRepo.findOne(id);
        if (!user) {
            throw new common_1.NotFoundException(`User #${id} not found`);
        }
        return user;
    }
    create(data) {
        const newUser = this.userRepo.create(data);
        return this.userRepo.save(newUser);
    }
    async update(id, changes) {
        const user = await this.findOne(id);
        this.userRepo.merge(user, changes);
        return this.userRepo.save(user);
    }
    remove(id) {
        return this.userRepo.delete(id);
    }
    async getOrderByUser(id) {
        const user = await this.findOne(id);
        return {
            date: new Date(),
            user,
            products: await this.productsService.findAll(),
        };
    }
    getTasks() {
        return new Promise((resolve, reject) => {
            this.clientePG.query('SELECT * FROM task ORDER BY id ASC', (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res.rows);
            });
        });
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(2, common_1.Inject('PG')),
    __param(3, typeorm_1.InjectRepository(user_entity_1.User)),
    __metadata("design:paramtypes", [products_service_1.ProductsService,
        config_1.ConfigService,
        pg_1.Client,
        typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map