import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchModule } from './search/search.module';
import { FindModule } from './find/find.module';
import { RequestModule } from './request/request.module';

@Module({
  imports: [
    SearchModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    }),
    FindModule,
    RequestModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
