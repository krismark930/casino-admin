import request from '@/utils/request'
import moment from "moment-timezone";
import { defineStore } from "pinia";
import { GET_CQSF_RESULT } from "@/api";
import { CHECKOUT_CQSF_RESULT } from "@/api";
import { GET_CQSF_RESULT_BY_ID } from "@/api";
import { SAVE_CQSF_RESULT } from "@/api";

export const cqsfResultStore = defineStore('cqsf_result', {
    state: () => ({
        success: false,
        errMessage: "",
        cqsfResultList: [],
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
        }
    }),
    getters: {
        getSuccess: (state) => state.success,
        getCQSFResultList: (state) => state.cqsfResultList,
        getLotteryResultData: (state) => state.lotteryResultData,
        getErrMessage: (state) => state.errMessage
    },
    actions: {
        setSuccess(success) {
            this.success = success;
        },
        setCQSFResultList(cqsfResultList) {
            this.cqsfResultList = cqsfResultList;
        },
        setLotteryResultData(lotteryResultData) {
            this.lotteryResultData = lotteryResultData;
        },
        setErrMessage(errMessage) {
            this.errMessage = errMessage;
        },
        async dispatchCQSFResultList(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_CQSF_RESULT, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setCQSFResultList(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchCheckoutCQSFResult(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: CHECKOUT_CQSF_RESULT, method: 'POST', data })
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
                let response = await request({ url: GET_CQSF_RESULT_BY_ID, method: 'POST', data })
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
                let response = await request({ url: SAVE_CQSF_RESULT, method: 'POST', data })
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
            }
        }
    },
    persist: {
        enabled: true
    }
});