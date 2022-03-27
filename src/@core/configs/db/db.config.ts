import { IEnvConfig } from './interfaces/db.interface';

export const config = (): IEnvConfig => ({
  db: {
    database: process.env.DB_NAME,
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
  },
});
