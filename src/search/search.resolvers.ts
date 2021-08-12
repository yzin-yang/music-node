import { Args, Query, Resolver } from '@nestjs/graphql';
import { Search } from './models/search';
import { SearchService } from './search.service';

@Resolver((of) => Search)
export class SearchResolver {
  constructor(private readonly searchService: SearchService) {}

  @Query((returns) => Search)
  async search(@Args('id') id: string): Promise<Search> {
    const result = await { id: '1', title: 'HMR' };
    return result;
  }
}
