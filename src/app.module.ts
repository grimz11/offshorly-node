import { DatabaseModule, DbConfig } from '@core/configs';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { Todo } from './app.entity';
import { AppService } from './app.service';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({ cache: true, isGlobal: true, load: [DbConfig] }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'TODO_REPOSITORY',
      useValue: Todo,
    },
  ],
})
export class AppModule {}
