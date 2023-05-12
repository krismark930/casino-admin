import request from '@/utils/request'
import moment from "moment-timezone";
import { defineStore } from "pinia";
import { GET_GDSF_RESULT } from "@/api";
import { CHECKOUT_GDSF_RESULT } from "@/api";
import { GET_GDSF_RESULT_BY_ID } from "@/api";
import { SAVE_GDSF_RESULT } from "@/api";

export const gdsfResultStore = defineStore('gdsf_result', {
    state: () => ({
        success: false,
        errMessage: "",
        gdsfResultList: [],
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
        getGDSFResultList: (state) => state.gdsfResultList,
        getLotteryResultData: (state) => state.lotteryResultData,
        getErrMessage: (state) => state.errMessage
    },
    actions: {
        setSuccess(success) {
            this.success = success;
        },
        setGDSFResultList(gdsfResultList) {
            this.gdsfResultList = gdsfResultList;
        },
        setLotteryResultData(lotteryResultData) {
            this.lotteryResultData = lotteryResultData;
        },
        setErrMessage(errMessage) {
            this.errMessage = errMessage;
        },
        async dispatchGDSFResultList(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_GDSF_RESULT, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setGDSFResultList(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchCheckoutGDSFResult(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: CHECKOUT_GDSF_RESULT, method: 'POST', data })
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
                let response = await request({ url: GET_GDSF_RESULT_BY_ID, method: 'POST', data })
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
                let response = await request({ url: SAVE_GDSF_RESULT, method: 'POST', data })
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