import { ConfigService } from '@nestjs/config';
import { Sequelize } from 'sequelize-typescript';
import { Todo } from 'src/app.entity';
import { IEnvConfig, IDbConfig } from './interfaces/db.interface';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async (configService: ConfigService<IEnvConfig>) => {
      const db = configService.get<IDbConfig>('db');

      const sequelize = new Sequelize({
        dialect: db.dialect,
        host: db.host,
        port: db.port,
        username: db.username,
        password: db.password,
        database: db.database,
      });
      sequelize.addModels([Todo]);
      await sequelize.sync();
      return sequelize;
    },
    inject: [ConfigService],
  },
];
