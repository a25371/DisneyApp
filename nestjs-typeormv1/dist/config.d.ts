declare const _default: (() => {
    database: {
        name: string;
        port: string;
    };
    postgres: {
        dbName: string;
        host: string;
        port: number;
        user: string;
        password: string;
    };
    apiKey: string;
}) & import("@nestjs/config").ConfigFactoryKeyHost;
export default _default;
