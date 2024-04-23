import { Injectable } from '@nestjs/common';
import { UserProfileModel } from '../models/use-profile.model';
import { signUpInput } from '../inputs/signup.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ServicesService {
  constructor(
    @InjectModel(UserProfileModel.name)
    private objectModel: Model<UserProfileModel>,
  ) {}

  async createUser(user: signUpInput): Promise<UserProfileModel> {
    const newUser = new this.objectModel(user);
    return await newUser.save();
  }

  async getAllUsers(): Promise<UserProfileModel[]> {
    return await this.objectModel.find().exec();
  }
}
