import request from '@/utils/request'

export const AddItem = data => {
  return request({
    url: '/api/check-list/add_item',
    method: 'post',
    data: data,
  })
}
