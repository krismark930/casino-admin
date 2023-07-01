import request from '@/utils/request'
import { defineStore } from "pinia";
import { AG_MONEY } from "@/api";
import { BBIN_MONEY } from "@/api";
import { MG_MONEY } from "@/api";
import { PT_MONEY } from "@/api";
import { OG_MONEY } from "@/api";
import { KY_MONEY } from "@/api";

export const realGameStore = defineStore('real_game', {
    state: () => ({
        success: false,
        errMsg: "",
    }),
    getters: {
        getSuccess: (state) => state.success,
        getErrMessage: (state) => state.errMsg
    },
    actions: {
        setSuccess(success) {
            this.success = success;
        },
        setErrorMsg(errMsg) {
            this.errMsg = errMsg;
        },
        async dispatchAGMoney(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: AG_MONEY, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchBBINMoney(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: BBIN_MONEY, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchMGMoney(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: MG_MONEY, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchPTMoney(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: PT_MONEY, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchOGMoney(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: OG_MONEY, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchKYMoney(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: KY_MONEY, method: 'POST', data })
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
