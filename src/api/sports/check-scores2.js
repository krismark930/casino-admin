import request from '@/utils/request'

// 登录接口
export const GetItemDate = data => {
  return request({
    url: '/api/sport/get_item_date',
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
