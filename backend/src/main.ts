import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    methods: ['GET', 'HEAD', 'OPTIONS', 'POST', 'DELETE', 'PUT'],
    credentials: true,
  });
  await app.listen(4000);
}
bootstrap();
