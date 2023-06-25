import request from '@/utils/request'
import { defineStore } from "pinia";

export const authStore = defineStore('auth', {
    state: () => ({
        success: false,
        errMsg: "",
        admin: {}
    }),
    getters: {
        getSuccess: (state) => state.success,
        getErrMessage: (state) => state.errMsg,
        getAdmin: (state) => state.admin
    },
    actions: {
        setSuccess(success) {
            this.success = success;
        },
        setErrorMsg(errMsg) {
            this.errMsg = errMsg;
        },
        setAdmin(admin) {
            this.admin = admin
        },
    },
    persist: {
        enabled: true
    }
});
