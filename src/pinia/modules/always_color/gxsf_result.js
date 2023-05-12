import request from '@/utils/request'
import moment from "moment-timezone";
import { defineStore } from "pinia";
import { GET_GXSF_RESULT } from "@/api";
import { CHECKOUT_GXSF_RESULT } from "@/api";
import { GET_GXSF_RESULT_BY_ID } from "@/api";
import { SAVE_GXSF_RESULT } from "@/api";

export const gxsfResultStore = defineStore('gxsf_result', {
    state: () => ({
        success: false,
        errMessage: "",
        gxsfResultList: [],
        lotteryResultData: {
            qishu: "",
            datetime: moment().tz("Asia/Hong_Kong").format("YYYY-MM-DD HH:mm:ss"),
            ball_1: "",
            ball_2: "",
            ball_3: "",
            ball_4: "",
            ball_5: "",
        }
    }),
    getters: {
        getSuccess: (state) => state.success,
        getGXSFResultList: (state) => state.gxsfResultList,
        getLotteryResultData: (state) => state.lotteryResultData,
        getErrMessage: (state) => state.errMessage
    },
    actions: {
        setSuccess(success) {
            this.success = success;
        },
        setGXSFResultList(gxsfResultList) {
            this.gxsfResultList = gxsfResultList;
        },
        setLotteryResultData(lotteryResultData) {
            this.lotteryResultData = lotteryResultData;
        },
        setErrMessage(errMessage) {
            this.errMessage = errMessage;
        },
        async dispatchGXSFResultList(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_GXSF_RESULT, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setGXSFResultList(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchCheckoutGXSFResult(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: CHECKOUT_GXSF_RESULT, method: 'POST', data })
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
                let response = await request({ url: GET_GXSF_RESULT_BY_ID, method: 'POST', data })
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
                let response = await request({ url: SAVE_GXSF_RESULT, method: 'POST', data })
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
            }
        }
    },
    persist: {
        enabled: true
    }
});