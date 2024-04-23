import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    methods: ['GET', 'HEAD', 'OPTIONS', 'POST', 'DELETE', 'PUT'],
    credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(4000);
}
bootstrap();
