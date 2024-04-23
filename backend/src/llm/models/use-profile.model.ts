import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@ObjectType()
@Schema()
export class UserProfileModel {
  @Field(() => ID)
  @Prop({ virtual: true })
  id: string;

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

  @Field(() => Int)
  @Prop({
    type: Number,
  })
  age: number;

  @Field(() => String)
  @Prop({
    type: String,
    unique: true,
    required: true,
  })
  email: string;

  @Field(() => String)
  @Prop({
    type: String,
    required: true,
  })
  password: string;
}

export type UserProfileDocument = UserProfileModel & Document;
export const UserProfileSchema = SchemaFactory.createForClass(UserProfileModel);
