import request from '@/utils/request'
import { defineStore } from "pinia";
import { GET_SYSTEM_DATA } from "@/api";
import {UPDATE_URL} from "@/api";
import {UPDATE_TURN_SERVICE} from "@/api";
import {UPDATE_NOTIFICATION} from "@/api";
import {GET_ADMIN_INFO} from "@/api";;
import {UPDATE_ADMIN_INFO} from "@/api";;

export const systemStore = defineStore('system', {
    state: () => ({
        success: false,
        errMsg: "",
        sysConfigItem: {},
        configItem: {},
        webSystemItem: {}
    }),
    getters: {
        getSuccess: (state) => state.success,
        getErrMessage: (state) => state.errMsg,
        getSysConfigItem: (state) => state.sysConfigItem,
        getConfigItem: (state) => state.configItem,
        getWebSystemItem: (state) => state.webSystemItem
    },
    actions: {
        setSuccess(success) {
            this.success = success;
        },
        setErrorMsg(errMsg) {
            this.errMsg = errMsg;
        },
        setSysConfigItem(sysConfigItem) {
            this.sysConfigItem = sysConfigItem;
        },
        setConfigItem(configItem) {
            this.configItem = configItem;
        },
        setWebSystemItem(webSystemItem) {
            this.webSystemItem = webSystemItem;
        },
        async dispatchSystemData(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_SYSTEM_DATA, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setSysConfigItem(response.sys_config);
                    this.setConfigItem(response.config);
                    this.setWebSystemItem(response.web_system_data)
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchUpdateUrl(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: UPDATE_URL, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchUpdateTurnService(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: UPDATE_TURN_SERVICE, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchUpdateNotification(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: UPDATE_NOTIFICATION, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchAdminInfoData(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_ADMIN_INFO, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setWebSystemItem(response.data)
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchUpdateAdminInfoData(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: UPDATE_ADMIN_INFO, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
    },
    persist: {
        enabled: true
    }
});
