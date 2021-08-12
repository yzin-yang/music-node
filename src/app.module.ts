import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { FindModule } from './find/find.module';
// import { RequestModule } from './request/request.module';
import { SearchModule } from './search/search.module';

@Module({
  imports: [
    SearchModule,
    // FindModule,
    // RequestModule,
    GraphQLModule.forRoot({
      include: [SearchModule],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
