import request from '@/utils/request'

export const GetItems = data => {
  return request({
    url: '/api/alliancerestriction/get_items',
    method: 'get',
    params: data,
  })
}

export const DeleteEvent = data => {
  return request({
    url: '/api/alliancerestriction/delete_event',
    method: 'get',
    params: data,
  })
}

export const GetItem = data => {
  return request({
    url: '/api/alliancerestriction/get_item',
    method: 'get',
    params: data,
  })
}

export const SetItem = data => {
  return request({
    url: '/api/alliancerestriction/set_item',
    method: 'post',
    data: { data },
  })
}
