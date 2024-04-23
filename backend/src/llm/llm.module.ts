import { Module } from '@nestjs/common';
import { ServicesService } from './services/services.service';
import { ResolversResolver } from './resolvers/resolvers.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { MongooseModule } from '@nestjs/mongoose';
import { userProfileFeature } from './db/user.feature';

@Module({
  imports: [
    MongooseModule.forFeature(userProfileFeature),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/graphql/schema.gql',
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      playground: false,
    }),
  ],
  providers: [ServicesService, ResolversResolver],
})
export class LlmModule {}
