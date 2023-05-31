/*
 * @Descripttion:
 * @version:
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2021-04-21 09:36:55
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */
import request from '@/utils/request'

// 登录接口
export const Login = data => {
  return request({
    url: '/api/admin/login',
    method: 'post',
    data,
  })
}

// 获取登录用户信息
export const GetUserinfo = () => {
  // return request({
  //   url: '/api/admin/user',
  //   method: 'get',
  // })
  return {
    code: 200,
    message: '获取用户信息成功',
    data: {
      id: 1,
      name: 'zhangsan',
      'role|1': ['admin', 'visitor'], // 随机返回一个角色admin或visitor
      avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80",
    },
  }
}
