import request from '@/utils/request'

// 登录接口
export const GetItems = data => {
  return request({
    url: '/api/searchbetting/get_items',
    method: 'get',
    // data,
  })
}

export const GetFunctionItems = data => {
  return request({
    url: '/api/searchbetting/get_function_items',
    method: 'get',
    // data,
  })
}
