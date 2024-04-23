import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SignupDto } from 'src/llm/users/dto/signup.dto';
import { UsersModel } from 'src/llm/users/models/users.model';
import UserService from 'src/llm/users/services/user.service';

@Resolver()
export class UserResolverResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [UsersModel])
  async getUsers(): Promise<UsersModel[]> {
    return await this.userService.getUsers();
  }

  @Query(() => UsersModel)
  async getUserById(@Args('id') id: string): Promise<UsersModel> {
    return await this.userService.getUserById(id);
  }

  @Query(() => UsersModel)
  async getUserByEmail(@Args('email') email: string): Promise<UsersModel> {
    return await this.userService.getUserByEmail(email);
  }

  @Mutation(() => UsersModel)
  async signUp(
    @Args('signUpInput') signUpInput: SignupDto,
  ): Promise<UsersModel> {
    return await this.userService.signUp(signUpInput);
  }
}
