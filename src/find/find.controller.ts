import { Controller, Get, HttpService } from '@nestjs/common';

@Controller('find')
export class FindController {
  constructor(private readonly httpService: HttpService) {}
  @Get('banner')
  async getBanner() {
    const { data } = await this.httpService
      .get('https://music.163.com/api/v2/banner/get?clientType=android')
      .toPromise();
    return data;
  }
}
