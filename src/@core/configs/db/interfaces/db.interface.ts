export interface IEnvConfig {
  db: IDbConfig;
}

export interface IDbConfig {
  dialect: any;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}
