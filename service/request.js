// uni-app请求封装
import $config from '@/common/config'

export default class Request {
  http(router, data = {}, method) {
    // 返回promise
    return new Promise((resolve, reject) => {
      // 请求
      uni.request({
        url: `${$config.SERVER_PATH}${router}`,
        data: data,
        method: method,
        success: (res) => {
          if ([404, 500].includes(res.statusCode)) {
            uni.showToast({
              title: '服务异常，请稍后再试',
              icon: 'none',
              duration: 15e2
            })
            reject()
          }
          if (res.data.code === '0000') {
            // 将结果抛出
            resolve(res.data)
          } else {
            uni.showToast({
              title: res.data.msg,
              duration: 2000,
              icon: 'none'
            })
            reject(res.data)
          }
        },
        fail: reject
      })
    })
  }
}
