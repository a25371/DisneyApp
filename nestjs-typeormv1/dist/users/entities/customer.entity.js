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
exports.Customer = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
let Customer = class Customer {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, lastName: { required: true, type: () => String }, phone: { required: true, type: () => String }, createAt: { required: true, type: () => Date }, updateAt: { required: true, type: () => Date }, user: { required: true, type: () => require("./user.entity").User } };
    }
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", Number)
], Customer.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Customer.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Customer.prototype, "lastName", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Customer.prototype, "phone", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], Customer.prototype, "createAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], Customer.prototype, "updateAt", void 0);
__decorate([
    typeorm_1.OneToOne(() => user_entity_1.User, (user) => user.customer, { nullable: true }),
    __metadata("design:type", user_entity_1.User)
], Customer.prototype, "user", void 0);
Customer = __decorate([
    typeorm_1.Entity()
], Customer);
exports.Customer = Customer;
//# sourceMappingURL=customer.entity.js.map