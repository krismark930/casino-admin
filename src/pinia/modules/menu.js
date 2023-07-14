/*
 * @Descripttion:
 * @version:
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2022-09-27 16:41:46
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */
import { defineStore } from 'pinia'
import {
  systemSettingRoutes,
  userSettingRoutes,
  sportsBettingRoutes,
  lotteryRoutes,
  humanManagementRoutes,
  paymentsRoutes,
  statisticsRoutes,
  analyticsRoutes,
  postRoutes,
  discountRoutes,
} from '@/router'
import router from '@/router'
import { authStore } from "./auth";
import { ref } from 'vue'

export const useMenus = defineStore('menu', () => {
  const generateUrl = (path, parentPath) => {
    return path.startsWith('/')
      ? path
      : path
      ? `${parentPath}/${path}`
      : parentPath
  }

  const getFilterRoutes = (targetRoutes, ajaxRoutes) => {

    const filterRoutes = []

    ajaxRoutes.forEach(item => {
      const target = targetRoutes.find(target => target.name === item.name)

      if (target) {
        const { children: targetChildren, ...rest } = target
        const route = {
          ...rest,
        }

        if (item.children) {
          route.children = getFilterRoutes(targetChildren, item.children)
        }

        filterRoutes.push(route)
      }
    })

    return filterRoutes
  }

  const getFilterMenus = (arr, parentPath = '') => {

    // const { getAdmin } = authStore();

    // console.log(localStorage.getItem("permission"));

    let permission;

    if (localStorage.getItem("permission") != null) {

      permission = localStorage.getItem("permission").split(",").filter(item => item != "");

      // console.log(permission);

    }

    const menus = []

    arr.forEach(item => {

      let hidden = item.hidden != null ? item.hidden : false;

      if (localStorage.getItem("permission") != null) {

        if (item.name == "numberofUser") {
          hidden = permission[0] == 0 ? true : false;
        }
        if (item.name == "systemParameters") {
          hidden = permission[1] == 0 ? true : false;
        }
        if (item.name == "systemNotifications") {
          hidden = permission[2] == 0 ? true : false;
        }
        if (item.name == "dataRefresh") {
          hidden = permission[5] == 0 ? true : false;
        }
        if (item.name == "allianceRestrictions") {
          hidden = permission[7] == 0 ? true : false;
        }
        if (item.name == "DataManipulation") {
          hidden = permission[8] == 0 ? true : false;
        }
        if (item.name == "check-scores2") {
          hidden = permission[9] == 0 ? true : false;
        }
        if (item.name == "liveBetting") {
          hidden = permission[10] == 0 ? true : false;
        }
        if (item.name == "searchBettings") {
          hidden = permission[11] == 0 ? true : false;
        }
        if (item.name == "mark-sixs") {
          hidden = permission[12] == 0 ? true : false;
        }
        if (item.name == "macaoSixMark") {
          hidden = permission[12] == 0 ? true : false;
        }
        if (item.name == "alwaysColors") {
          hidden = permission[13] == 0 ? true : false;
        }
        if (item.name == "systemLog") {
          hidden = permission[14] == 0 ? true : false;
        }
        if (item.name == "basicDataSettings") {
          hidden = permission[15] == 0 ? true : false;
        }
        if (item.name == "subAccount") {
          hidden = permission[16] == 0 ? true : false;
        }      
        if (item.name == "systemSMS") {
          hidden = permission[17] == 0 ? true : false;
        }
        if (item.name == "Share") {
          hidden = permission[18] == 0 ? true : false;
        }
        if (item.name == "GeneralAgent") {
          hidden = permission[19] == 0 ? true : false;
        }
        if (item.name == "Agency") {
          hidden = permission[20] == 0 ? true : false;
        }
        if (item.name == "userMember") {
          hidden = permission[21] == 0 ? true : false;
        }
        if (item.name == "Company") {
          hidden = permission[4] == 0 ? true : false;
        }
        if (item.name == "SportsReport") {
          hidden = permission[22] == 0 ? true : false;
        }
        if (item.name == "cash-systems") {
          hidden = permission[23] == 0 ? true : false;
        }
        if (item.name == "payment-methods") {
          hidden = permission[24] == 0 ? true : false;
        }
      }
      
      if (!hidden) {
        const menu = {
          url: generateUrl(item.path, parentPath),
          title: item.meta.title,
          icon: item.icon,
        }
        if (!item.noChildren && item.children) {
          if (item.children.filter(child => !child.hidden).length <= 1) {
            menu.url = generateUrl(item.children[0].path, menu.url)
          } else {
            menu.children = getFilterMenus(item.children, menu.url)
          }
        }
        menus.push(menu)
      }
    })

    return menus
  }

  const menus = ref([])
  const setMenus = data => {
    menus.value = data
  }
  const generateMenus = async () => {
    // 生成菜单
    const menus = getFilterMenus([
      ...systemSettingRoutes,
      ...userSettingRoutes,
      ...sportsBettingRoutes,
      ...lotteryRoutes,
      ...humanManagementRoutes,
      ...paymentsRoutes,
      ...statisticsRoutes,
      ...postRoutes,
      ...discountRoutes,
    ])
    setMenus(menus)
  }
  return {
    menus,
    setMenus,
    generateMenus,
  }
})
