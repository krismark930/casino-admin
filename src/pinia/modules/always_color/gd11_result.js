import request from '@/utils/request'
import moment from "moment-timezone";
import { defineStore } from "pinia";
import { GET_GD11_RESULT } from "@/api";
import { CHECKOUT_GD11_RESULT } from "@/api";
import { GET_GD11_RESULT_BY_ID } from "@/api";
import { SAVE_GD11_RESULT } from "@/api";

export const gd11ResultStore = defineStore('gd11_result', {
    state: () => ({
        success: false,
        errMessage: "",
        gd11ResultList: [],
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
        getGD11ResultList: (state) => state.gd11ResultList,
        getLotteryResultData: (state) => state.lotteryResultData,
        getErrMessage: (state) => state.errMessage
    },
    actions: {
        setSuccess(success) {
            this.success = success;
        },
        setGD11ResultList(gd11ResultList) {
            this.gd11ResultList = gd11ResultList;
        },
        setLotteryResultData(lotteryResultData) {
            this.lotteryResultData = lotteryResultData;
        },
        setErrMessage(errMessage) {
            this.errMessage = errMessage;
        },
        async dispatchGD11ResultList(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_GD11_RESULT, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setGD11ResultList(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchCheckoutGD11Result(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: CHECKOUT_GD11_RESULT, method: 'POST', data })
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
                let response = await request({ url: GET_GD11_RESULT_BY_ID, method: 'POST', data })
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
                let response = await request({ url: SAVE_GD11_RESULT, method: 'POST', data })
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