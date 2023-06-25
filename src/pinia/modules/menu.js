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
  systemlogsRoutes,
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

    console.log(localStorage.getItem("permission"));

    let permission;

    if (localStorage.getItem("permission") != null) {

      permission = localStorage.getItem("permission").split(",").filter(item => item != "");

      console.log(permission);

    }

    const menus = []

    arr.forEach(item => {

      console.log(item);

      if (localStorage.getItem("permission") != null) {

        if (item.name == "numberofUser" && permission[0] == 0) {
          item.hidden = true;
        }
        if (item.name == "systemParameters" && permission[1] == 0) {
          item.hidden = true;
        }
        if (item.name == "systemNotifications" && permission[2] == 0) {
          item.hidden = true;
        }
        if (item.name == "dataRefresh" && permission[5] == 0) {
          item.hidden = true;
        }
        if (item.name == "allianceRestrictions" && permission[7] == 0) {
          item.hidden = true;
        }
        if (item.name == "DataManipulation" && permission[8] == 0) {
          item.hidden = true;
        }
        if (item.name == "check-scores2" && permission[9] == 0) {
          item.hidden = true;
        }
        if (item.name == "liveBetting" && permission[10] == 0) {
          item.hidden = true;
        }
        if (item.name == "searchBettings" && permission[11] == 0) {
          item.hidden = true;
        }
        if (item.name == "mark-sixs" && permission[12] == 0) {
          item.hidden = true;
        }
        if (item.name == "macaoSixMark" && permission[12] == 0) {
          item.hidden = true;
        }
        if (item.name == "alwaysColors" && permission[13] == 0) {
          item.hidden = true;
        }
        if (item.name == "systemLog" && permission[14] == 0) {
          item.hidden = true;
        }
        if (item.name == "basicDataSettings" && permission[15] == 0) {
          item.hidden = true;
        }
        if (item.name == "subAccount" && permission[16] == 0) {
          item.hidden = true;
        }      
        if (item.name == "systemSMS" && permission[17] == 0) {
          item.hidden = true;
        }
        if (item.name == "Share" && permission[18] == 0) {
          item.hidden = true;
        }
        if (item.name == "GeneralAgent" && permission[19] == 0) {
          item.hidden = true;
        }
        if (item.name == "Agency" && permission[20] == 0) {
          item.hidden = true;
        }
        if (item.name == "userMember" && permission[21] == 0) {
          item.hidden = true;
        }
        if (item.name == "Company" && permission[4] == 0) {
          item.hidden = true;
        }
        if (item.name == "SportsReport" && permission[22] == 0) {
          item.hidden = true;
        }
        if (item.name == "cash-systems" && permission[23] == 0) {
          item.hidden = true;
        }
        if (item.name == "payment-methods" && permission[24] == 0) {
          item.hidden = true;
        }
      }
      if (!item.hidden) {
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
      // ...analyticsRoutes,
      // ...systemlogsRoutes,
    ])
    setMenus(menus)
  }
  return {
    menus,
    setMenus,
    generateMenus,
  }
})
