import request from '@/utils/request'
import { defineStore } from "pinia";
import { GET_ACCESS_DATA } from "@/api";
import { DELETE_ACCESS_DATA } from "@/api";
import { CANCEL_ACCESS_DATA } from "@/api";

export const accessStore = defineStore('access', {
    state: () => ({
        success: false,
        errMsg: "",
        totalCount: 0,
        accessList: [],
        CK: 0,
        TK: 0
    }),
    getters: {
        getSuccess: (state) => state.success,
        getErrMessage: (state) => state.errMsg,
        getTotalCount: (state) => state.totalCount,
        getAccessList: (state) => state.accessList,
        getCK: (state) => state.CK,
        getTK: (state) => state.TK,
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
        setAccessList(accessList) {
            this.accessList = accessList;
        },
        setCK(CK) {
            this.CK = CK;
        },
        setTK(TK) {
            this.TK = TK;
        },
        async dispatchAccessData(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_ACCESS_DATA, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setTotalCount(response.total_count);
                    this.setAccessList(response.data);
                    this.setCK(response.CK);
                    this.setTK(response.TK);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchDeleteAccessData(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: DELETE_ACCESS_DATA, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchCancelAccessData(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: CANCEL_ACCESS_DATA, method: 'POST', data })
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
