import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';


@Resolver()
export class ResolversResolver {
  @Query(() => String)
  getNice() : string{
    return "nice";
  }
}
