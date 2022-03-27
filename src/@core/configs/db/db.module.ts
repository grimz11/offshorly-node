import { Module } from '@nestjs/common';
import { databaseProviders } from './db-init.config';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
