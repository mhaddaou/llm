import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, Length, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class SignupDto {
  @Field(() => String)
  @Length(3, 40)
  firstName: string;

  @Field(() => String)
  @Length(3, 40)
  lastName: string;

  @Field(() => String)
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  password: string;
}
