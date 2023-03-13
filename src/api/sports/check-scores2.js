import request from '@/utils/request'

// 登录接口
export const GetItems = data => {
  return request({
    url: '/api/sport/get_items',
    method: 'post',
    data,
  })
}

export const GetItemById = data => {
  return request({
    url: '/api/sport/get_item',
    method: 'post',
    data,
  })
}

export const UpdateItem = data => {
  return request({
    url: '/api/sport/update_item',
    method: 'put',
    data,
  })
}
