import { HttpService, Injectable } from '@nestjs/common';
import * as queryString from 'querystring';
import { weapi } from './crypto';
import { chooseUserAgent } from './request';

@Injectable()
export class RequestService {
  constructor(private readonly httpService: HttpService) {}

  async get(url: string, options) {
    console.log(url, options);
    const headers = { 'User-Agent': chooseUserAgent(options.ua) };
    if (url.includes('music.163.com')) {
      headers['Referer'] = 'https://music.163.com';
    }
    // headers['X-Real-IP'] = '118.88.88.88'
    if (typeof options.cookie === 'object') {
      headers['Cookie'] = Object.keys(options.cookie)
        .map(
          key =>
            encodeURIComponent(key) +
            '=' +
            encodeURIComponent(options.cookie[key])
        )
        .join('; ');
    } else if (options.cookie) {
      headers['Cookie'] = options.cookie;
    }
    if (options.crypto === 'weapi') {
      url = url.replace(/\w*api/, 'weapi');
    }

    const response = { status: 500, body: {}, cookie: [] };
    const settings = {
      // method: 'GET',
      // url: url,
      headers: headers
    };
    try {
      const res = await this.httpService.get(url, settings).toPromise();
      return res.data;
      // response.cookie = (res.headers['set-cookie'] || []).map((x: string) =>
      //   x.replace(/\s*Domain=[^(;|$)]+;*/, '')
      // );
      // response.body = JSON.parse(res);
      // response.status = response.body.code || res.statusCode;
      // if (response.body.code === 502) {
      //   response.status = 200;
      // }
    } catch (error) {
      response.status = 502;
      response.body = { code: 502, msg: error.stack };
      return response;
    }
  }

  async post(url: string, options) {
    console.log(url, options);
    const headers = { 'User-Agent': chooseUserAgent(options.ua) };
    headers['Content-Type'] = 'application/x-www-form-urlencoded';
    if (url.includes('music.163.com')) {
      headers['Referer'] = 'https://music.163.com';
    }
    let { data = {} } = options;
    if (options.crypto === 'weapi') {
      // let csrfToken = (headers['Cookie'] || '').match(/_csrf=([^(;|$)]+)/);
      // data.csrf_token = csrfToken ? csrfToken[1] : '';
      data = weapi(data);
      url = url.replace(/\w*api/, 'weapi');
    }
    const res = await this.httpService
      .post(url, queryString.stringify(data), {
        headers
      })
      .toPromise();
    return res.data;
  }
}
