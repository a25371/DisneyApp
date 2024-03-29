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
exports.CustomersService = void 0;
const common_1 = require("@nestjs/common");
const customer_entity_1 = require("../entities/customer.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let CustomersService = class CustomersService {
    constructor(customerRepo) {
        this.customerRepo = customerRepo;
        this.counterId = 1;
    }
    findAll() {
        return this.customerRepo.find();
    }
    async findOne(id) {
        const customer = await this.customerRepo.findOne(id);
        if (!customer) {
            throw new common_1.NotFoundException(`Customer #${id} not found`);
        }
        return customer;
    }
    create(data) {
        const newCustomer = this.customerRepo.create(data);
        return this.customerRepo.save(newCustomer);
    }
    async update(id, changes) {
        const customer = await this.findOne(id);
        this.customerRepo.merge(customer, changes);
        return this.customerRepo.save(customer);
    }
    remove(id) {
        return this.customerRepo.delete(id);
    }
};
CustomersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(customer_entity_1.Customer)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CustomersService);
exports.CustomersService = CustomersService;
//# sourceMappingURL=customers.service.js.map