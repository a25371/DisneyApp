"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const customers_controller_1 = require("./controllers/customers.controller");
const customers_service_1 = require("./services/customers.service");
const users_controller_1 = require("./controllers/users.controller");
const users_service_1 = require("./services/users.service");
const products_module_1 = require("../products/products.module");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const customer_entity_1 = require("./entities/customer.entity");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    common_1.Module({
        imports: [products_module_1.ProductsModule, typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, customer_entity_1.Customer])],
        controllers: [customers_controller_1.CustomerController, users_controller_1.UsersController],
        providers: [customers_service_1.CustomersService, users_service_1.UsersService],
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map