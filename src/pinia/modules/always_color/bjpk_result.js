import request from '@/utils/request'
import moment from "moment-timezone";
import { defineStore } from "pinia";
import { GET_BJPK_RESULT } from "@/api";
import { CHECKOUT_BJPK_RESULT } from "@/api";
import { GET_BJPK_RESULT_BY_ID } from "@/api";
import { SAVE_BJPK_RESULT } from "@/api";

export const bjpkResultStore = defineStore('bjpk_result', {
    state: () => ({
        success: false,
        errMessage: "",
        bjpkResultList: [],
        lotteryResultData: {
            qishu: "",
            datetime: moment().tz("Asia/Hong_Kong").format("YYYY-MM-DD HH:mm:ss"),
            ball_1: "",
            ball_2: "",
            ball_3: "",
            ball_4: "",
            ball_5: "",
            ball_6: "",
            ball_7: "",
            ball_8: "",
            ball_9: "",
            ball_10: "",
        }
    }),
    getters: {
        getSuccess: (state) => state.success,
        getBJPKResultList: (state) => state.bjpkResultList,
        getLotteryResultData: (state) => state.lotteryResultData,
        getErrMessage: (state) => state.errMessage
    },
    actions: {
        setSuccess(success) {
            this.success = success;
        },
        setBJPKResultList(bjpkResultList) {
            this.bjpkResultList = bjpkResultList;
        },
        setLotteryResultData(lotteryResultData) {
            this.lotteryResultData = lotteryResultData;
        },
        setErrMessage(errMessage) {
            this.errMessage = errMessage;
        },
        async dispatchBJPKResultList(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_BJPK_RESULT, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setBJPKResultList(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchCheckoutBJPKResult(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: CHECKOUT_BJPK_RESULT, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchGetResultById(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_BJPK_RESULT_BY_ID, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setLotteryResultData(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchSaveLotteryResult(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: SAVE_BJPK_RESULT, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
                this.setErrMessage(e.response.data.message);
            }
        },
        dispatchResultItemInitial() {
            this.lotteryResultData = {
                qishu: "",
                datetime: moment().tz("Asia/Hong_Kong").format("YYYY-MM-DD HH:mm:ss"),
                ball_1: "",
                ball_2: "",
                ball_3: "",
                ball_4: "",
                ball_5: "",
                ball_6: "",
                ball_7: "",
                ball_8: "",
                ball_9: "",
                ball_10: "",
            }
        }
    },
    persist: {
        enabled: true
    }
});