import request from '@/utils/request'
import moment from "moment-timezone";
import { defineStore } from "pinia";
import { GET_BJKN_RESULT } from "@/api";
import { CHECKOUT_BJKN_RESULT } from "@/api";
import { GET_BJKN_RESULT_BY_ID } from "@/api";
import { SAVE_BJKN_RESULT } from "@/api";

export const bjknResultStore = defineStore('bjkn_result', {
    state: () => ({
        success: false,
        errMessage: "",
        bjknResultList: [],
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
            ball_11: "",
            ball_12: "",
            ball_13: "",
            ball_14: "",
            ball_15: "",
            ball_16: "",
            ball_17: "",
            ball_18: "",
            ball_19: "",
            ball_20: "",
        }
    }),
    getters: {
        getSuccess: (state) => state.success,
        getBJKNResultList: (state) => state.bjknResultList,
        getLotteryResultData: (state) => state.lotteryResultData,
        getErrMessage: (state) => state.errMessage
    },
    actions: {
        setSuccess(success) {
            this.success = success;
        },
        setBJKNResultList(bjknResultList) {
            this.bjknResultList = bjknResultList;
        },
        setLotteryResultData(lotteryResultData) {
            this.lotteryResultData = lotteryResultData;
        },
        setErrMessage(errMessage) {
            this.errMessage = errMessage;
        },
        async dispatchBJKNResultList(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_BJKN_RESULT, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setBJKNResultList(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchCheckoutBJKNResult(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: CHECKOUT_BJKN_RESULT, method: 'POST', data })
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
                let response = await request({ url: GET_BJKN_RESULT_BY_ID, method: 'POST', data })
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
                let response = await request({ url: SAVE_BJKN_RESULT, method: 'POST', data })
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
                ball_11: "",
                ball_12: "",
                ball_13: "",
                ball_14: "",
                ball_15: "",
                ball_16: "",
                ball_17: "",
                ball_18: "",
                ball_19: "",
                ball_20: "",
            }
        }
    },
    persist: {
        enabled: true
    }
});