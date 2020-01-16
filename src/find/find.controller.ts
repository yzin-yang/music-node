import { Controller, Get } from '@nestjs/common';
import { RequestService } from '../request/request.service';

@Controller('find')
export class FindController {
  constructor(private readonly requestService: RequestService) {}
  @Get('banner')
  async getBanner() {
    // const { data } = await this.httpService
    //   .get('https://music.163.com/api/v2/banner/get?clientType=android')
    //   .toPromise();
    // return data;
  }
  @Get('rec-song-lists')
  async getRecSongLists() {
    // const { data } = await this.httpService
    //   .get('https://music.163.com/weapi/playlist/list')
    //   .toPromise();
    // return data;
  }
  @Get('testapi')
  async testapi() {
    return this.requestService.post(
      'https://music.163.com/weapi/playlist/highquality/list',
      { crypto: 'weapi' }
    );
  }
}
