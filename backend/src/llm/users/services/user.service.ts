import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UsersModel } from '../models/users.model';
import { Model } from 'mongoose';
import { SignupDto } from '../dto/signup.dto';

@Injectable()
export default class UserService {
  constructor(
    @InjectModel(UsersModel.name) private usersModel: Model<UsersModel>,
  ) {}

  async getUsers(): Promise<UsersModel[]> {
    try {
      return await this.usersModel.find().exec();
    } catch (e: any) {
      console.log(e.message);
    }
  }

  async getUserById(id: string): Promise<UsersModel> {
    try {
      const user = await this.usersModel.findById(id);
      if (!user) throw new Error('User not found');
      return user;
    } catch (e) {
      console.log(e.message);
    }
  }

  async getUserByEmail(email: string): Promise<UsersModel> {
    const user = await this.usersModel.findOne({ email: email });
    if (!user) throw new Error(`not found User with this ${email}`);
    return user;
  }

  async signUp(user: SignupDto): Promise<UsersModel> {
    try {
      const oldUser = await this.usersModel.findOne({ email: user.email });
      if (oldUser) {
        throw new Error(`user with email : ${user.email} already exist`);
      }
      const newUser = await this.usersModel.create(user);
      await newUser.save();
      return newUser;
    } catch (e) {
      console.log(e.message);
    }
  }
}
