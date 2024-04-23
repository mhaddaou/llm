import { Module } from '@nestjs/common';
import { LlmModule } from './llm/llm.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './llm/users/users.module';

@Module({
  imports: [
    LlmModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
