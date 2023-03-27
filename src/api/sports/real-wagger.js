import request from '@/utils/request'

export const GetSData = data => {
  return request({
    url: '/api/real_wagger/get_sdata',
    method: 'get',
    params: data,
  })
}

export const GetHData = data => {
  return request({
    url: '/api/real_wagger/get_hdata',
    method: 'get',
    params: data,
  })
}

export const GetLeagueList = data => {
  return request({
    url: '/api/real_wagger/get_league_list',
    method: 'get',
    params: data,
  })
}
