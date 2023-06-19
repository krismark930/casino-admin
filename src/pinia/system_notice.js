import request from '@/utils/request'
import { defineStore } from "pinia";
import { GET_SYSTEM_NOTICE } from "@/api";
import { ADD_SYSTEM_NOTICE } from "@/api";
import { UPDATE_SYSTEM_NOTICE } from "@/api";
import { DELETE_SYSTEM_NOTICE } from "@/api";

export const systemNoticeStore = defineStore('system_notice', {
    state: () => ({
        success: false,
        errMsg: "",
        systemNoticeItem: {},
        webMarqueeDataList: [],
    }),
    getters: {
        getSuccess: (state) => state.success,
        getErrMessage: (state) => state.errMsg,
        getSystemNoticeItem: (state) => state.systemNoticeItem,
        getWebMarqueeDataList: (state) => state.webMarqueeDataList,
    },
    actions: {
        setSuccess(success) {
            this.success = success;
        },
        setErrorMsg(errMsg) {
            this.errMsg = errMsg;
        },
        setSystemNoticeItem(systemNoticeItem) {
            this.systemNoticeItem = systemNoticeItem;
        },
        setWebMarqueeDataList(webMarqueeDataList) {
            this.webMarqueeDataList = webMarqueeDataList;
        },
        async dispatchSystemNotice(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_SYSTEM_NOTICE, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setSystemNoticeItem(response.system_notice);
                    this.setWebMarqueeDataList(response.web_marquee_data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchAddSystemNotice(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: ADD_SYSTEM_NOTICE, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchUpdateSystemNotice(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: UPDATE_SYSTEM_NOTICE, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchDeleteSystemNotice(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: DELETE_SYSTEM_NOTICE, method: 'POST', data })
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
