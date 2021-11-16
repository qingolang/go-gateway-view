import request from '@/utils/request'
export function captcha(query) {
    return request({
      url: '/captcha/get',
      method: 'get',
      params: query
    })
}