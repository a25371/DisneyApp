"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const pg_1 = require("pg");
const config_1 = require("../config");
const typeorm_1 = require("@nestjs/typeorm");
const API_KEY = '12345634';
const API_KEY_PROD = 'PROD1212121SA';
const client = new pg_1.Client({
    user: 'postgres',
    host: 'rds-dam-postgresql.cdc8o82kagmd.us-east-1.rds.amazonaws.com',
    database: 'dam',
    password: 'LUCASLUCAS',
    port: 5432,
    ssl: true,
});
client.connect();
client.query('SELECT * FROM task ORDER BY id ASC', (err, res) => {
    console.error(err);
    console.log(res.rows);
});
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    common_1.Global(),
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.default.KEY],
                useFactory: (configService) => {
                    const { dbName, host, port, user, password } = configService.postgres;
                    return {
                        type: 'postgres',
                        host,
                        port,
                        username: user,
                        password,
                        database: dbName,
                        ssl: true,
                        synchronize: true,
                        autoLoadEntities: true,
                    };
                },
            }),
        ],
        providers: [
            {
                provide: 'API_KEY',
                useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
            },
            {
                provide: 'PG',
                useFactory: (configService) => {
                    const { dbName, host, port, user, password } = configService.postgres;
                    const client = new pg_1.Client({
                        user,
                        host,
                        database: dbName,
                        password,
                        port,
                        ssl: true,
                    });
                    client.connect();
                    return client;
                },
                inject: [config_1.default.KEY],
            }
        ],
        exports: ['API_KEY', 'PG', typeorm_1.TypeOrmModule],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=database.module.js.map