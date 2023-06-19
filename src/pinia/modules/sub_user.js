import request from '@/utils/request'
import { defineStore } from "pinia";
import { GET_SUB_USER } from "@/api";
import { ADD_SUB_USER } from "@/api";
import { UPDATE_SUB_USER } from "@/api";
import { DELETE_SUB_USER } from "@/api";
import { SUSPEND_SUB_USER } from "@/api";
import { PERMISSION_SUB_USER } from "@/api";

export const subUserStore = defineStore('sub_user', {
    state: () => ({
        success: false,
        errMsg: "",
        totalCount: 0,
        subUserList: [],
    }),
    getters: {
        getSuccess: (state) => state.success,
        getErrMessage: (state) => state.errMsg,
        getTotalCount: (state) => state.totalCount,
        getSubUserList: (state) => state.subUserList,
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
        setSubUserList(subUserList) {
            this.subUserList = subUserList;
        },
        async dispatchSubUserData(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_SUB_USER, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setTotalCount(response.total_count);
                    this.setSubUserList(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchAddSubUserData(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: ADD_SUB_USER, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchUpdateSubUserData(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: UPDATE_SUB_USER, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchDeleteSubUserData(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: DELETE_SUB_USER, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchSuspendSubUserData(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: SUSPEND_SUB_USER, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchPermissionSubUser(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: PERMISSION_SUB_USER, method: 'POST', data })
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
