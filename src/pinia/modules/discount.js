import request from '@/utils/request'
import { defineStore } from "pinia";
import { GET_DISCOUNTS } from "@/api";
import { ADD_DISCOUNT } from "@/api";
import { UPDATE_DISCOUNT } from "@/api";
import { DELETE_DISCOUNT } from "@/api";

export const discountStore = defineStore('discount', {
    state: () => ({
        success: false,
        errMsg: "",
        totalCount: 0,
        discountList: [],
    }),
    getters: {
        getSuccess: (state) => state.success,
        getErrMessage: (state) => state.errMsg,
        getTotalCount: (state) => state.totalCount,
        getDiscountList: (state) => state.discountList,
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
        setDiscountList(discountList) {
            this.discountList = discountList;
        },
        async dispatchDiscounts(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_DISCOUNTS, method: 'POST', data })
                console.log(response);
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setDiscountList(response.data);
                }
            } catch (e) {
                console.log(e.response);
                this.setErrorMsg(e.response.message);
            }
        },
        async dispatchAddDiscount(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: ADD_DISCOUNT, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
                this.setErrorMsg(e.response.message);
            }
        },
        async dispatchUpdateDiscount(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: UPDATE_DISCOUNT, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                this.setErrorMsg(e.response.message);
            }
        },
        async dispatchDeleteDiscount(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: DELETE_DISCOUNT, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                this.setErrorMsg(e.response.message);
            }
        },
    },
    persist: {
        enabled: true
    }
});
