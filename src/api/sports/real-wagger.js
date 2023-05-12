import request from '@/utils/request'

export const GetLeagueList = data => {
  return request({
    url: '/api/real_wagger/get_league_list',
    method: 'get',
    params: data,
  })
}

export const GetResultData = data => {
  return request({
    url: '/api/real_wagger/get_result_data',
    method: 'get',
    params: data,
  })
}

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

export const GetRBData = data => {
  return request({
    url: '/api/real_wagger/get_rbdata',
    method: 'get',
    params: data,
  })
}

export const GetPDData = data => {
  return request({
    url: '/api/real_wagger/get_pddata',
    method: 'get',
    params: data,
  })
}

export const GetHPDData = data => {
  return request({
    url: '/api/real_wagger/get_hpddata',
    method: 'get',
    params: data,
  })
}

export const GetTData = data => {
  return request({
    url: '/api/real_wagger/get_tdata',
    method: 'get',
    params: data,
  })
}

export const GetFData = data => {
  return request({
    url: '/api/real_wagger/get_fdata',
    method: 'get',
    params: data,
  })
}

export const GetPData = data => {
  return request({
    url: '/api/real_wagger/get_pdata',
    method: 'get',
    params: data,
  })
}

export const GetPLData = data => {
  return request({
    url: '/api/real_wagger/get_pldata',
    method: 'get',
    params: data,
  })
}
