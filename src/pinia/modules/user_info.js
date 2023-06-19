import request from '@/utils/request'
import { defineStore } from "pinia";
import { GET_USER_INFO } from "@/api";
import { UPDATE_USER_INFO } from "@/api";
import { DELETE_USER_INFO } from "@/api";
import { GET_CONTACT_INFO } from "@/api";
import { DELETE_CONTACT_INFO } from "@/api";

export const userInfoStore = defineStore('user_info', {
    state: () => ({
        success: false,
        errMsg: "",
        totalCount: 0,
        userInfoList: [],
        contactInfoList: [],
    }),
    getters: {
        getSuccess: (state) => state.success,
        getErrMessage: (state) => state.errMsg,
        getTotalCount: (state) => state.totalCount,
        getUserInfoList: (state) => state.userInfoList,
        getContactInfoList: (state) => state.contactInfoList
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
        setUserInfoList(userInfoList) {
            this.userInfoList = userInfoList;
        },
        setContactInfoList(contactInfoList) {
            this.contactInfoList = contactInfoList;
        },
        async dispatchUserInfoData(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_USER_INFO, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setTotalCount(response.total_count);
                    this.setUserInfoList(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchUpdateUserInfoData(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: UPDATE_USER_INFO, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchDeleteUserInfoData(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: DELETE_USER_INFO, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchContactInfoData(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_CONTACT_INFO, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setTotalCount(response.total_count);
                    this.setContactInfoList(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchDeleteContactInfoData(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: DELETE_CONTACT_INFO, method: 'POST', data })
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
