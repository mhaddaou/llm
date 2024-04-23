import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class createUserInput {
  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => Int)
  age: number;

  @Field(() => [String])
  hobbies: string[];
}
