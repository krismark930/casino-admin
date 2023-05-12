import request from '@/utils/request'

export const GetItems = data => {
  return request({
    url: '/api/check-list/get_items',
    method: 'get',
    params: data,
  })
}

export const CancelEvent = data => {
  return request({
    url: '/api/check-list/cancel_event',
    method: 'get',
    params: data,
  })
}

export const ResumeEvent = data => {
  return request({
    url: '/api/check-list/resume_event',
    method: 'get',
    params: data,
  })
}

export const ModifyEvent = data => {
  return request({
    url: '/api/check-list/modify_event',
    method: 'get',
    params: data,
  })
}

export const GetFunctionTypes = data => {
  return request({
    url: '/api/check-list/get_functions',
    method: 'get',
    // params: data,
  })
}
