import request from '@/utils/request'
import { defineStore } from "pinia";
import { GET_MESSAGE_DATA } from "@/api";
import { ADD_MESSAGE_DATA } from "@/api";
import { DELETE_MESSAGE_DATA } from "@/api";

export const systemNewsStore = defineStore('system_news', {
    state: () => ({
        success: false,
        errMsg: "",
        totalCount: 0,
        webMessageDataList: [],
    }),
    getters: {
        getSuccess: (state) => state.success,
        getErrMessage: (state) => state.errMsg,
        getTotalCount: (state) => state.totalCount,
        getWebMessageDataList: (state) => state.webMessageDataList,
    },
    actions: {
        setSuccess(success) {
            this.success = success;
        },
        setErrorMsg(errMsg) {
            this.errMsg = errMsg;
        },
        setTotalCount(totalCount) {
            this.totalCount = totalCount;
        },
        setWebMessageDataList(webMessageDataList) {
            this.webMessageDataList = webMessageDataList;
        },
        async dispatchWebMessageData(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_MESSAGE_DATA, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setTotalCount(response.total_count);
                    this.setWebMessageDataList(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchAddWebMessageData(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: ADD_MESSAGE_DATA, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchDeleteWebMessageData(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: DELETE_MESSAGE_DATA, method: 'POST', data })
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
