import { VersioningType } from '@nestjs/common/enums';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI,
    prefix: 'api/',
  });
  app.enableCors();
  await app.listen(`${+process.env.APP_PORT}` || 8080, '0.0.0.0');
}
bootstrap();
