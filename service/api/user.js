import Request from '../request.js'
const request = new Request().http

/**
 * @param {String} phone 用户手机号
 * @param {String} password 用户密码
 * @description 登录
 */
const login = data => {
  return request('/user/lgn', data, 'POST')
}

/**
 * @param {String} phone 用户手机号
 * @param {String} password 用户密码
 * @description 退出登录
 */
const loginOut = data => {
  return request('/user/lgnout', data, 'POST')
}

/**
 * @param {String} _id 用户id
 * @param {String} oldPwd 旧密码
 * @param {String} newPwd 新密码
 * @description 修改密码
 */
const upsertPwd = data => {
  return request('/user/upsertPwd', data, 'POST')
}

/**
  * @param {String} phone 用户手机号
  * @param {String} code 验证码
  * @param {String} password 新密码
  * @description 忘记密码
  */
const forgetPwd = data => {
  return request('/user/forgetPwd', data, 'POST')
}

/**
 * @param {String} _id 用户id
 * @description 用户详情
 */
const userDetail = data => {
  return request('/user/detail', data, 'POST')
}

export default {
  login,
  loginOut,
  upsertPwd,
  forgetPwd,
  userDetail
}
