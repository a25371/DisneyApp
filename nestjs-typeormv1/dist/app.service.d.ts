import { ConfigType } from '@nestjs/config';
import config from './config';
import { Client } from 'pg';
export declare class AppService {
    private clientePG;
    private tasks;
    private configService;
    constructor(clientePG: Client, tasks: any[], configService: ConfigType<typeof config>);
    getHello(): string;
    getTasks(): Promise<unknown>;
}
