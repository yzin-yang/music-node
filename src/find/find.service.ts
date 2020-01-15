import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class FindService {
  constructor(private readonly httpService: HttpService) {}

  get() {
    return this.httpService.get(
      'https://juejin.im/post/5e153e096fb9a048297390c1#heading-37'
    );
  }
}
