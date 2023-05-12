import request from '@/utils/request'
import { defineStore } from "pinia";
import { GET_LOTTERY_CONFIG } from "@/api";
import { UPDATE_LOTTERY_CONFIG } from "@/api";
import { START_DISCOUNT } from "@/api";

export const lotteryConfigStore = defineStore('lottery_config', {
    state: () => ({
        success: false,
        lotteryConfig: null,
    }),
    getters: {
        getSuccess: (state) => state.success,
        getLotteryConfig: (state) => state.lotteryConfig
    },
    actions: {
        setSuccess(success) {
            this.success = success;
        },
        setLotteryConfig(lotteryConfig) {
            this.lotteryConfig = lotteryConfig;
        },
        async dispatchGetLotteryConfig(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_LOTTERY_CONFIG, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setLotteryConfig(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchUpdateLotteryConfig(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: UPDATE_LOTTERY_CONFIG, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchStartDiscount(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: START_DISCOUNT, method: 'POST', data })
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