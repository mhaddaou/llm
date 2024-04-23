import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsStrongPassword, MinLength } from 'class-validator';

@InputType()
export class signUpInput {
  @Field(() => String)
  @MinLength(3)
  firstName: string;

  @Field(() => String)
  @MinLength(3)
  lastName: string;

  @Field(() => String)
  @IsEmail()
  email: string;

  @Field(() => String)
  @IsStrongPassword()
  password: string;
}
