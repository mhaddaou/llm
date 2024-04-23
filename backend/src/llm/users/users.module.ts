import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserFeature } from './db/users-feature';
import UserService from './services/user.service';


@Module({
    imports:[MongooseModule.forFeature(UserFeature)],
    providers: [UserService]
})
export class UsersModule {}
