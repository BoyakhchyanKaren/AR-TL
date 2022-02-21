import { ConnectionOptions } from 'typeorm';
import dotenv from 'dotenv';
import {Articles} from "./src/entities/Articles";
dotenv.config();

const config: ConnectionOptions = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST || 'localhost',
    port: Number(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'postgres',
    database: process.env.POSTGRES_DB || 'forReact',
    entities: [Articles],
    logging: 'all',
    synchronize: true,
};
export default config;