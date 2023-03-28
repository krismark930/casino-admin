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

export const ShowData = data => {
  return request({
    url: '/api/sport/bet_slip',
    method: 'post',
    data,
  })
}

export const CheckScore = data => {
  return request({
    url: '/api/sport/ft_check_score',
    method: 'post',
    data,
  })
}

export const SaveScore = data => {
  return request({
    url: '/api/sport/save_score',
    method: 'post',
    data,
  })
}
