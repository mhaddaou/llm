import { ObjectType, Int, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail } from 'class-validator';

@Schema()
@ObjectType()
export class UsersModel {
  @Field(() => String)
  @Prop({
    type: String,
  })
  firstName: string;

  @Field(() => String)
  @Prop({
    type: String,
  })
  lastName: string;

  @Field(() => String)
  @Prop({
    type: IsEmail,
  })
  email: string;

  @Field(() => String)
  @Prop({
    type: String,
  })
  password: string;

}


export const usersSchema = SchemaFactory.createForClass(UsersModel);