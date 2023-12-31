import request from '@/utils/request'
import { defineStore } from "pinia";
import { CASH_SYSTEM } from "@/api";
import { CASH_REVIEW } from "@/api";
import { CASH_CANCEL } from "@/api";
import { CASH_DELETE } from "@/api";
import { CASH_SAVE } from "@/api";
import { CASH_BULK_SAVE } from "@/api";
import { PAYMENT_METHOD } from "@/api";
import { ADD_PAYMENT_METHOD } from "@/api";
import { USE_PAYMENT_METHOD } from "@/api";
import { DELETE_PAYMENT_METHOD } from "@/api";
import { WEB_BANK_DATA } from "@/api";
import { ADD_WEB_BANK_DATA } from "@/api";
import { USE_WEB_BANK_DATA } from "@/api";
import { DELETE_WEB_BANK_DATA } from "@/api";
import { UPDATE_USDT_RATE } from "@/api";
import { GET_USER } from "@/api";

export const paymentStore = defineStore('payment', {
    state: () => ({
        success: false,
        errMsg: "",
        cashList: [],
        totalCount: 0,
        paymentList: [],
        webBankList: [],
        usdtList: {
            tjck: false,
            ckfanli: "",
            USDT: ""
        },
        user: {
        },
        currentAmount: 0,
        reviewType: "",
    }),
    getters: {
        getSuccess: (state) => state.success,
        getErrMessage: (state) => state.errMsg,
        getCashList: (state) => state.cashList,
        getTotalCount: (state) => state.totalCount,
        getPaymentList: (state) => state.paymentList,
        getWebBankList: (state) => state.webBankList,
        getUSDTList: (state) => state.usdtList,
        getUser: (state) => state.user,
        getCurrentAmount: (state) => state.currentAmount,
        getReviewType: (state) => state.reviewType,
    },
    actions: {
        setSuccess(success) {
            this.success = success;
        },
        setErrorMsg(errMsg) {
            this.errMsg = errMsg;
        },
        setCashList(cashList) {
            this.cashList = cashList;
        },
        setTotalCount(totalCount) {
            this.totalCount = totalCount;
        },
        setPaymentList(paymentList) {
            this.paymentList = paymentList;
        },
        setWebBankList(webBankList) {
            this.webBankList = webBankList;
        },
        setUSDTList(usdtList) {
            this.usdtList = usdtList
        },
        setUser(user) {
            this.user = user;
        },
        setCurrentAmount(currentAmount) {
            this.currentAmount = currentAmount;
        },
        setReviewType(reviewType) {
            this.reviewType = reviewType;
        },
        async dispatchCashSystem(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: CASH_SYSTEM, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setCashList(response.data);
                    this.setTotalCount(response.total_count);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchReviewCash(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: CASH_REVIEW, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setCurrentAmount(response.data);
                    this.setReviewType(response.type);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchCancelCash(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: CASH_CANCEL, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setCurrentAmount(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchDeleteCash(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: CASH_DELETE, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchSaveCash(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: CASH_SAVE, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setCurrentAmount(response.data);
                }
            } catch (e) {
                console.log(e.response.data.message);
                this.setErrorMsg(e.response.data.message);
            }
        },
        async dispatchSaveBulkCash(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: CASH_BULK_SAVE, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response.data.message);
                this.setErrorMsg(e.response.data.message);
            }
        },
        // payment method
        async dispatchPaymentMethod(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: PAYMENT_METHOD, method: 'POST', data })
                if (response.status === 200) {
                    console.log(response.data);
                    this.setSuccess(true);
                    this.setPaymentList(response.data);
                }
            } catch (e) {
                console.log(e.response.data.message);
                this.setErrorMsg(e.response.data.message);
            }
        },
        async dispatchAddPaymentMethod(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: ADD_PAYMENT_METHOD, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response.data.message);
                this.setErrorMsg(e.response.data.message);
            }
        },
        async dispatchUsePaymentMethod(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: USE_PAYMENT_METHOD, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response.data.message);
                this.setErrorMsg(e.response.data.message);
            }
        },
        async dispatchDeletePaymentMethod(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: DELETE_PAYMENT_METHOD, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response.data.message);
                this.setErrorMsg(e.response.data.message);
            }
        },
        // web bank data
        async dispatchWebBankData(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: WEB_BANK_DATA, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setWebBankList(response.data);
                    this.setUSDTList(response.usdt_rate);
                }
            } catch (e) {
                console.log(e.response.data.message);
                this.setErrorMsg(e.response.data.message);
            }
        },
        async dispatchAddWebBankData(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: ADD_WEB_BANK_DATA, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response.data.message);
                this.setErrorMsg(e.response.data.message);
            }
        },
        async dispatchUseWebBankData(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: USE_WEB_BANK_DATA, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response.data.message);
                this.setErrorMsg(e.response.data.message);
            }
        },
        async dispatchDeleteWebBankData(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: DELETE_WEB_BANK_DATA, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response.data.message);
                this.setErrorMsg(e.response.data.message);
            }
        },
        async dispatchUpdateUSDTRate(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: UPDATE_USDT_RATE, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response.data.message);
                this.setErrorMsg(e.response.data.message);
            }
        },
        async dispatchGetUser(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_USER, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setUser(response.data);
                }
            } catch (e) {
                console.log(e.response.data.message);
                this.setErrorMsg(e.response.data.message);
            }
        },
    },
    persist: {
        enabled: true
    }
});
