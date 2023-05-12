import request from '@/utils/request'
import { defineStore } from "pinia";
import { GET_GDSF_ODDS } from "@/api";
import { SAVE_GDSF_ODDS } from "@/api";

export const gdsfOddsStore = defineStore('gdsf_odds', {
    state: () => ({
        success: false,
        errMessage: "",
        oddsItem: null,
    }),
    getters: {
        getSuccess: (state) => state.success,
        getOddsItem: (state) => state.oddsItem,
        getErrMessage: (state) => state.errMessage
    },
    actions: {
        setSuccess(success) {
            this.success = success;
        },
        setOddsItem(oddsItem) {
            this.oddsItem = oddsItem;
        },
        setErrMessage(errMessage) {
            this.errMessage = errMessage;
        },
        async dispatchGetOdds(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_GDSF_ODDS, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setOddsItem(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchSaveOdds(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: SAVE_GDSF_ODDS, method: 'POST', data })
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