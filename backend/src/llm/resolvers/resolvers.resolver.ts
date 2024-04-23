import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ServicesService } from '../services/services.service';
import { UserProfileModel } from '../models/use-profile.model';
import { signUpInput } from '../inputs/signup.input';

@Resolver()
export class ResolversResolver {
  constructor(private readonly serviceService: ServicesService) {}

  @Query(() => [UserProfileModel])
  async getAllUsers(): Promise<UserProfileModel[]> {
    return await this.serviceService.getAllUsers();
  }

  @Mutation(() => UserProfileModel)
  async createUser(
    @Args('userInput') userInput: signUpInput,
  ): Promise<UserProfileModel> {
    return await this.serviceService.createUser(userInput);
  }
}
