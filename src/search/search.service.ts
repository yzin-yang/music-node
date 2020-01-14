import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchService {
  getWy(): string {
    return 'Hello Wy!';
  }
}
