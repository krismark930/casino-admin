import request from '@/utils/request'

export const GetData = data => {
  return request({
    url: '/api/data-refresh/get_data',
    method: 'get',
    // data: data,
  })
}

export const SetData = data => {
  return request({
    url: '/api/data-refresh/set_data',
    method: 'post',
    data: data,
  })
}
