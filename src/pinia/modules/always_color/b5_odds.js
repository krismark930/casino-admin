import request from '@/utils/request'
import moment from "moment-timezone";
import { defineStore } from "pinia";
import { GET_B5_ODDS } from "@/api";
import { SAVE_B5_ODDS } from "@/api";

export const b5OddsStore = defineStore('b5_odds', {
    state: () => ({
        success: false,
        errMessage: "",
        b5OddsItem1: [],
        b5OddsItem2: [],
    }),
    getters: {
        getSuccess: (state) => state.success,
        getB5OddsItem1: (state) => state.b5OddsItem1,
        getB5OddsItem2: (state) => state.b5OddsItem2,
        getErrMessage: (state) => state.errMessage
    },
    actions: {
        setSuccess(success) {
            this.success = success;
        },
        setB5OddsItem1(b5OddsItem1) {
            this.b5OddsItem1 = b5OddsItem1;
        },
        setB5OddsItem2(b5OddsItem2) {
            this.b5OddsItem2 = b5OddsItem2;
        },
        setErrMessage(errMessage) {
            this.errMessage = errMessage;
        },
        async dispatchGetOdds1(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_B5_ODDS, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setB5OddsItem1(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchGetOdds2(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_B5_ODDS, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setB5OddsItem2(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchSaveOdds(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: SAVE_B5_ODDS, method: 'POST', data })
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