import request from '@/utils/request'
import { defineStore } from "pinia";
import { GET_MACAO_PERIOD } from "@/api";
import { GET_MACAO_SPECIAL_CODE } from "@/api";
import { GET_MACAO_POSITIVE_CODE } from "@/api";
import { GET_MACAO_POSITIVE_CODE_1_6 } from "@/api";
import { GET_MACAO_REGULAR_CODE } from '@/api';
import { GET_MACAO_PASS } from '@/api';
import { GET_MACAO_EVEN_CODE } from '@/api';
import { GET_MACAO_ONE_XIAO } from '@/api';

export const instantBetStore = defineStore('macao_instant_bet', {
    state: () => ({
        success: false,
        periodList: [],
        mainData: [],
        assistantData: [],
        assistantAmount: 0,
        mainAmount: 0
    }),
    getters: {
        getSuccess: (state) => state.success,
        getPeriodList: (state) => state.periodList,
        getMainData: (state) => state.mainData,
        getAssistantData: (state) => state.assistantData,
        getMainAmount: (state) => state.mainAmount,
        getAssistantAmount: (state) => state.assistantAmount
    },
    actions: {
        setSuccess(success) {
            this.success = success;
        },
        setPeriodList(periodList) {
            this.periodList = periodList;
        },
        setMainData(mainData) {
            this.mainData = mainData;
        },
        setAssistantData(assistantData) {
            this.assistantData = assistantData;
        },
        setMainAmount(mainAmount) {
            this.mainAmount = mainAmount;
        },
        setAssistantAmount(assistantAmount) {
            this.assistantAmount = assistantAmount;
        },
        async dispatchGetPeriod(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_MACAO_PERIOD, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setPeriodList(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchGetSpecialCode(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_MACAO_SPECIAL_CODE, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setMainData(response.main_data);
                    this.setAssistantData(response.assistant_data);
                    this.setMainAmount(response.main_amount);
                    this.setAssistantAmount(response.assistant_amount);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchGetPositiveCode(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_MACAO_POSITIVE_CODE, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setMainData(response.main_data);
                    this.setAssistantData(response.assistant_data);
                    this.setMainAmount(response.main_amount);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchGetRegularCode(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_MACAO_REGULAR_CODE, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setMainData(response.main_data);
                    this.setAssistantData(response.assistant_data);
                    this.setMainAmount(response.main_amount);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchGetPositiveCode16(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_MACAO_POSITIVE_CODE_1_6, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setMainData(response.main_data);
                    this.setMainAmount(response.main_amount);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchGetPass(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_MACAO_PASS, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setMainData(response.main_data);
                    this.setMainAmount(response.main_amount);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchGetEvenCode(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_MACAO_EVEN_CODE, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setMainData(response.main_data);
                    this.setMainAmount(response.main_amount);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchGetOneXiao(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_MACAO_ONE_XIAO, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setMainData(response.main_data);
                    this.setMainAmount(response.main_amount);
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