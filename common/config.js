// 开发环境为true 生产环境为false
const DEBUG = true 
// 请求接口地址
const SERVER_PATH = DEBUG ? 'https://' : 'https://' 

export default {
  /**
   * @description 开发环境为true 生产环境为false
   */
  DEBUG,
  /**
   * @description app名称
   */
  APPNAME: '',
  /**
   * @description app描述
   */
  APPDESC: '',
  /**
   * @description app图标
   */
  APPICON: SERVER_PATH + '/wechat/img/app-icon.png',
  /**
   * @description 图片路径
   */
  IMG_PATH: SERVER_PATH + '/upload/',
  /**
   * @description 加载失败默认图片
   */
  IMG_ERROR: '/images/error/error',
  /**
   * @description 请求接口地址
   */
  SERVER_PATH,
  /**
   * @description 分页 每次加载的数据量
   */
  PAGESIZE: 10,
  /**
   * @description 接口超时时间 毫秒
   */
  TIMEOUT: 120000, // 接口超时时间 毫秒
  /**
   * @description 微信开发者Id
   */
  WCHAT_ID: DEBUG ? '' : '', // 微信开发者Id
  /**
   * @description 微信小程序Id
   */
  MINI_APPID: DEBUG ? '' : '' // 微信小程序Id
}