/*
 *                        _oo0oo_
 *                       o8888888o
 *                       88" . "88
 *                       (| -_- |)
 *                       0\  =  /0
 *                     ___/`---'\___
 *                   .' \\|     |// '.
 *                  / \\|||  :  |||// \
 *                 / _||||| -:- |||||- \
 *                |   | \\\  - /// |   |
 *                | \_|  ''\---/''  |_/ |
 *                \  .-\__  '-'  ___/-. /
 *              ___'. .'  /--.--\  `. .'___
 *           ."" '<  `.___\_<|>_/___.' >' "".
 *          | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *          \  \ `_.   \_ __\ /__ _/   .-` /  /
 *      =====`-.____`.___ \_____/___.-`___.-'=====
 *                        `=---='
 *
 *
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 *            佛祖保佑       永不宕机     永无BUG
 *
 * @Descripttion:
 * @version:
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2022-09-27 19:04:15
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */

import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// 引入element-plus
import ElementPlus from 'element-plus'
import './assets/style/element-variables.scss'
import VueSocketIO from 'vue-3-socket.io';

// 国际化
import i18n from '@/i18n'

// 全局注册element-plus/icons-vue
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 引入路由
import router from './router'

// 引入pinia
import pinia from './pinia'

// 权限控制
import './permission'

// 引入svg图标注册脚本
// import 'vite-plugin-svg-icons/register'
import 'virtual:svg-icons-register'

// 注册全局组件
import * as Components from './global-components'
Object.entries(Components).forEach(([key, component]) => {
  app.component(key, component)
})

// 注册自定义指令
import * as Directives from '@/directive'
Object.values(Directives).forEach(fn => fn(app))

// 错误日志
import useErrorHandler from './error-log'
useErrorHandler(app)

import { addBackToTop } from 'vanilla-back-to-top'
addBackToTop({
  diameter: 40,
  backgroundColor: 'white',
  textColor: '#409eff',
})

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL;

app
  .use(i18n)
  .use(addBackToTop)
  .use(ElementPlus)
  .use(pinia)
  .use(
    new VueSocketIO({
      debug: true,
      connection: SOCKET_URL,
    })
  )
  .use(router)
  .mount('#app')