import { Module } from '@nestjs/common';
import { SearchController } from './search.controller';
import { SearchResolver } from './search.resolvers';
import { SearchService } from './search.service';

@Module({
  controllers: [SearchController],
  providers: [SearchService, SearchResolver],
})
export class SearchModule {}
