import axios from 'axios';

/* ----------------------------- 发现页面 ----------------------------- */
const bannerSwiper = '/api/banner?type=1'; // 请求发现页面轮播图
const recSongLists = '/api/top/playlist'; // 推荐歌单，歌单广场
const highquality = '/api/top/playlist/highquality'; // 精品歌单 !!!
const catlist = '/api/playlist/catlist'; // 获取歌单分类 !!!
const hot = '/api/playlist/hot'; // 获取热门歌单分类 !!!
const topList = '/api/toplist/detail'; // 获取所有榜单内容摘要   !!!
const idxList = '/api/top/list'; // 获取排行榜 !!!
const recSongs = '/api/recommend/songs'; // 每日推荐歌曲
const dailyRecSongLists = '/api/recommend/resource'; // 每日推荐歌单，发现页展示的那六个
const newDishes = '/api/top/album'; // 发现页新碟
const songListDetail = '/api/playlist/detail'; // 获取歌单详情

/* ------------------------------ 登陆 ------------------------------ */
const phoneLogin = '/api/login/cellphone'; // 手机号登陆
const phoneRegistered = '/api/cellphone/existence/check'; // 手机号是否被注册
const loginStatus = '/api/login/status'; // 登录状态

/* ----------------------------- 我的页面 ----------------------------- */
const userRecord = '/api/user/record'; // 用户播放记录
const userInfo = '/api/user/subcount'; // 用户信息
const playlist = '/api/user/playlist'; // 用户歌单
const userDj = '/api/user/dj'; // 用户电台

/* ---------------------------- 搜索页面相关 ---------------------------- */
const wySearch = '/api/search'; // 搜索关键词
const qqSearch = '/qqapi/search';
const defaultSearch = '/api/search/default'; // 默认搜索关键词
const suggestSearch = '/api/search/suggest'; // 搜索建议
const hotSearchList = '/api/search/hot/detail'; // 热搜列表

/* ------------------------------ 播放 ------------------------------ */
const songUrl = 'api/song/url'; // 获取歌曲url
const checkSong = 'api/check/music';

export default {
  /* --------------------------- 发现 start --------------------------- */
  /**
   * 请求发现页面首页轮播图
   */
  getSwiper() {
    return axios.get(bannerSwiper);
  },
  /**
   * 调用此接口 , 可获得每日推荐歌曲 ( 需要登录 )
   */
  getRecSongs() {
    return axios.get(recSongs);
  },
  /**
   * 请求 可获取推荐歌单
   * ?limit=10&order=hot
   * @param {*} limit 取出数量，默认是30
   * @param {*} order 分别对应最新和最热,可选值为 'new' 和 'hot'
   * @param {*} cat tag, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",
   *  :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认 为 0
   */
  getRecSongLists(limit = 30, order = 'hot', cat) {
    return axios.get(recSongLists, {
      params: {
        limit,
        order,
        cat,
      },
    });
  },
  /**
   * 可获得每日推荐歌单 ( 需要登录 )
   */
  getDailyRecSongLists() {
    return axios.get(dailyRecSongLists);
  },
  /**
   * 调用此接口 , 可获取新碟上架列表
   * @param {*} limit 取出数量 , 默认为 50
   * @param {*} offset 偏移数量 , 用于分页
   *  如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0
   */
  getNewDishes(limit = 20, offset) {
    return axios.get(newDishes, {
      params: {
        limit,
        offset,
      },
    });
  },
  /**
   * 调用此接口 , 传入歌单 id, 可 以获取对应歌单内的所有的音乐
   * @param {*} id 歌单 id
   * @param {*} s 歌单最近的 s 个收藏者,默认5个
   */
  getSongListDetail(id, s = 5) {
    return axios.get(songListDetail, {
      params: {
        id,
        s,
      },
    });
  },
  /* ---------------------------- 发现 end ---------------------------- */

  // ===================登陆
  /**
   * 检测手机号码是否已注册
   * @param {*} phone 手机号
   */
  isPhoneRegistered(phone) {
    return axios.get(phoneRegistered, {
      params: {
        phone,
      },
    });
  },
  /**
   * 用户通过手机登录
   * @param {number} phone 手机号
   * @param {String} password 密码
   */
  doPhoneLogin(phone, password) {
    return axios.get(phoneLogin, {
      params: {
        phone: phone || '',
        password: password || '',
      },
    });
  },
  /**
   * 获取当前登录状态
   */
  getLoginStatus() {
    return axios.get(loginStatus);
  },

  // ===================我的页面
  /**
   * 获取用户播放记录
   * 登陆后调用此接口 , 传入用户 id, 可获取用户播放记录
   * @param {*} uid 用户id
   * @param {*} type type=1 时只返回 weekData, type=0 时返回 allData
   */
  getUserRecord(uid, type = 0) {
    return axios.get(userRecord, {
      params: {
        uid,
        type,
      },
    });
  },
  /**
   * 获取用户信息 , 歌单，收藏，mv, dj 数量
   * 登陆后调用此接口 , 可以获取用户信息
   * artistCount: 2 我的收藏中的歌手
   * code: 200
   * createDjRadioCount: 0
   * createdPlaylistCount: 2 创建的歌单数
   * djRadioCount: 1 我的电台
   * mvCount: 0
   * newProgramCount: 0
   * programCount: 0
   * subPlaylistCount: 3 收藏的歌单数
   */
  getUserInfo() {
    return axios.get(userInfo);
  },
  /**
   * 登陆后调用此接口 , 传入用户 id, 可以获取用户歌单
   * @param {*} uid 用户id
   */
  getPlaylist(uid) {
    return axios.get(playlist, {
      params: {
        uid,
      },
    });
  },
  /**
   * 登陆后调用此接口 , 传入用户 id, 可以获取用户电台
   * @param {*} uid 用户 id
   */
  getUserDj(uid) {
    return axios.get(userDj, {
      params: {
        uid,
      },
    });
  },

  /* --------------------------- 搜索 start --------------------------- */
  /**
   * 调用此接口,可获取热门搜索列表
   */
  getHotSearchList() {
    return axios.get(hotSearchList);
  },
  /**
   * 调用此接口 , 传入搜索关键词可以搜索
   * 该音乐 / 专辑 / 歌手 / 歌单 / 用户 , 关键词可以多个 , 以空格隔开
   * @param {*} keywords 关键词
   * @param {*} limit 返回数量 , 默认为 30
   * @param {*} offset 偏移数量，用于分页 默认为 0
   * @param {*} type 搜索类型 默认为 1 即单曲 这里设置默认返回综合
   * 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单
   * 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合
   */
  getWySearchResult(keywords, limit = 30, offset = 0, type = 1018) {
    return axios.get(wySearch, {
      params: {
        keywords,
        limit,
        offset,
        type,
      },
    });
  },
  /**
   * 调用此接口 , 传入搜索关键词可以搜索
   * 该音乐 / 专辑 / 歌手 / 歌单 / 用户 , 关键词可以多个 , 以空格隔开
   * @param {*} key: 关键词 必填
   * @param {*} pageNo: 页码，默认 1
   * @param {*} pageSize: 一页返回数量，默认 20
   * @param {*} t: 搜索类型 默认为 0
   * 0：单曲，2：歌单，7：歌词，8：专辑，9：歌手，12：mv
   */
  // https://api.qq.jsososo.com/search?key=周杰伦&pageNo=1&pageSize=3
  getQqSearchResult(key, pageNo = 1, pageSize = 20) {
    return axios.get(qqSearch, {
      params: {
        key,
        pageNo,
        pageSize,
      },
    });
  },
  /**
   * 调用此接口 , 可获取默认搜索关键词
   */
  getDefaultSearch() {
    return axios.get(defaultSearch);
  },
  /**
   * 调用此接口
   * 传入搜索关键词可获得搜索建议 ,
   * 搜索结果同时包含单曲 , 歌手 , 歌单 ,mv 信息
   * @param {*} keywords 关键词
   * @param {*} type 默认返回移动端数据
   */
  getSuggestSearch(keywords, type = 'mobile') {
    return axios.get(suggestSearch, {
      params: {
        keywords,
        type,
      },
    });
  },
  /* ---------------------------- 搜索 end ---------------------------- */

  /* --------------------------- 播放器 start -------------------------- */
  /**
   *  使用歌单详情接口后 , 能得到的音乐的 id, 但不能得到的音乐 url
   * 调用此接口 , 传入的音乐 id( 可多个 , 用逗号隔开 )
   * 可以获取对应的音乐的 url( 不需要登录 )
   * @param {*} id 音乐 id
   * @param {*} br 码率,默认设置了 999000 即最大码率,如果要 320k 则可设置为 320000,其他类推
   */
  getWySongUrl(id, br = 999000) {
    return axios.get(songUrl, {
      params: {
        id,
        br,
      },
    });
  },

  /**
   *  获取音乐url
   * @param {*} id songmid
   * @param {*} type 默认 128
   * @param {*} mediaId: 这个字段为其他接口中返回的 strMediaId 字段，可不传，不传默认同 songmid，
   * 但是部分歌曲不传可能会出现能获取到链接，但实际404， 所以有条件的大家都传吧
   * 这个接口跟上个接口一样，也是依赖服务器的 Cookie 信息的，不支持批量获取，不一定是全部的歌曲都有无损、高品的，
   * 要注意结合 size320，sizeape，sizeflac 等参数先判断下是否有播放链接
   */
  // https://api.qq.jsososo.com/song/url?id=0039MnYb0qxYhV&type=320
  getQqSongUrl(id, type = 128) {
    return axios.get('/qqapi/song/url', {
      params: {
        id,
        type,
      },
    });
  },

  /**
   * 传入歌曲 id, 可获取音乐是否可用
   * @param {*} id 歌曲 id
   * @param {*} br 码率,默认设置了 999000 即最大码率,如果要 320k 则可设置为 320000,其他类推
   */
  checkWySong(id, br) {
    return axios.get(checkSong, {
      params: {
        id,
        br,
      },
    });
  },
  /* ---------------------------- 播放器 end --------------------------- */
};
