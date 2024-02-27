"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const Joi = require("joi");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const products_module_1 = require("./products/products.module");
const database_module_1 = require("./database/database.module");
const enviroments_1 = require("./enviroments");
const config_2 = require("./config");
const pg_1 = require("pg");
const peliculas_module_1 = require("./peliculas/peliculas.module");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const client = new pg_1.Client({
    user: 'postgres',
    host: 'postgres.crim4oo88wqd.us-east-1.rds.amazonaws.com',
    database: 'postgres',
    password: 'FranFran',
    port: 5432,
    ssl: true,
});
client.connect();
client.query('SELECT * FROM task ORDER BY id ASC', (err, res) => {
    console.error(err);
});
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: enviroments_1.enviroments[process.env.NODE_ENV] || '.env',
                load: [config_2.default],
                isGlobal: true,
                validationSchema: Joi.object({
                    API_KEY: Joi.number().required(),
                    DATABASE_NAME: Joi.string().required(),
                    DATABASE_PORT: Joi.number().required(),
                }),
            }),
            common_1.HttpModule,
            users_module_1.UsersModule,
            products_module_1.ProductsModule,
            database_module_1.DatabaseModule,
            peliculas_module_1.PeliculasModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: 'TASKS',
                useFactory: async (http) => {
                    const tasks = await http
                        .get('https://jsonplaceholder.typicode.com/todos')
                        .toPromise();
                    return tasks.data;
                },
                inject: [common_1.HttpService],
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map