import { Controller, Get, Post } from '@nestjs/common';

@Controller('search')
export class SearchController {
  @Get('wysearch')
  searchKey() {
    return 'wysearch';
  }

  @Post()
  create(): string {
    return 'post';
  }
}
