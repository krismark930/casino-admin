import request from '@/utils/request'
import { defineStore } from "pinia";
import { GET_MACAO_SPECIAL_CODE_RATE } from "@/api";
import { UPDATE_MACAO_PLUS_RATE } from "@/api";
import { UPDATE_MACAO_OTHER_RATE } from "@/api";
import { UPDATE_MACAO_MAIN_RATE } from "@/api";
import { GET_MACAO_POSITIVE1_6_RATE } from "@/api";
import { GET_MACAO_CONSECUTIVE_CODE_RATE } from "@/api";
import { GET_MACAO_HALF_WAVE_RATE } from "@/api";
import { GET_MACAO_ONE_XIAO_RATE } from "@/api";
import { GET_MACAO_SPECIAL_RATE } from "@/api";
import { RESTORE_MACAO_ODDS } from "@/api";

export const oddsSettingStore = defineStore('macao_odds_setting', {
    state: () => ({
        success: false,
        mainData: [],
        specialMainData: [],
        assistantData: [],
    }),
    getters: {
        getSuccess: (state) => state.success,
        getMainData: (state) => state.mainData,
        getSpecialMainData: (state) => state.mainData,
        getAssistantData: (state) => state.assistantData,
    },
    actions: {
        setSuccess(success) {
            this.success = success;
        },
        setMainData(mainData) {
            this.mainData = mainData;
        },
        setSpecialMainData(mainData) {
            this.mainData = mainData;
        },
        setAssistantData(assistantData) {
            this.assistantData = assistantData;
        },
        async dispatchSpecialCodeRate(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_MACAO_SPECIAL_CODE_RATE, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setMainData(response.main_data);
                    this.setAssistantData(response.assistant_data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchPositive1_6Rate(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_MACAO_POSITIVE1_6_RATE, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setMainData(response.main_data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchConsecutiveCodeRate(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_MACAO_CONSECUTIVE_CODE_RATE, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setMainData(response.main_data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchHalfWaveRate(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_MACAO_HALF_WAVE_RATE, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setMainData(response.main_data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchSpecialRate(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_MACAO_SPECIAL_RATE, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setMainData(response.main_data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchOneXiaoRate(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_MACAO_ONE_XIAO_RATE, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setMainData(response.main_data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchPlusRate(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: UPDATE_MACAO_PLUS_RATE, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchOtherRate(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: UPDATE_MACAO_OTHER_RATE, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchMainRate(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: UPDATE_MACAO_MAIN_RATE, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchRestoreOdds(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: RESTORE_MACAO_ODDS, method: 'POST', data })
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