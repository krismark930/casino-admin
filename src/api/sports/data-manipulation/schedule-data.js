import request from '@/utils/request'

export const GetAllianceTypes = data => {
  return request({
    url: '/api/datamanipulation/scheduledata/get_alliance_items',
    method: 'get',
    params: data,
  })
}

export const GetItems = data => {
  return request({
    url: '/api/datamanipulation/scheduledata/get_items',
    method: 'get',
    params: data,
  })
}

export const CloseBet = data => {
  return request({
    url: 'api/datamanipulation/scheduledata/close_bet',
    method: 'post',
    data: data,
  })
}

export const DeleteEvent = data => {
  return request({
    url: 'api/datamanipulation/scheduledata/delete_event',
    method: 'post',
    data: data,
  })
}

//-----------------------
export const GetItem = data => {
  return request({
    url: 'api/datamanipulation/scheduledata/get_item',
    method: 'get',
    params: data,
  })
}

export const SetItem = data => {
  return request({
    url: 'api/datamanipulation/scheduledata/set_item',
    method: 'post',
    data: data,
  })
}

// Bet Check
export const BetCheckGetItems = data => {
  return request({
    url: '/api/betcheck/get_items',
    method: 'get',
    params: data,
  })
}

export const GetFunctionTypes = data => {
  return request({
    url: '/api/betcheck/get_functions',
    method: 'get',
    // params: data,
  })
}

export const CancelEvent = data => {
  return request({
    url: '/api/betcheck/cancel_event',
    method: 'get',
    params: data,
  })
}

export const ResumeEvent = data => {
  return request({
    url: '/api/betcheck/resume_event',
    method: 'get',
    params: data,
  })
}
