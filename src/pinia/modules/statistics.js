import request from '@/utils/request'
import { defineStore } from "pinia";
import { DIVIDEND_DETAILS } from "@/api";
import { DAILY_ACCOUNTS } from "@/api";
import { SYSTEM_LOGS } from "@/api";
import { GET_ONLINE } from "@/api";

export const statisticsStore = defineStore('statistics', {
    state: () => ({
        success: false,
        errMsg: "",
        agentsList: [],
        totalStatistics: {},
        statisticsList: [],
        totalCount: 0,
    }),
    getters: {
        getSuccess: (state) => state.success,
        getErrMessage: (state) => state.errMsg,
        getAgentsList: (state) => state.agentsList,
        getTotalStatistics: (state) => state.totalStatistics,
        getStatisticsList: (state) => state.statisticsList,
        getTotalCount: (state) => state.totalCount,
    },
    actions: {
        setSuccess(success) {
            this.success = success;
        },
        setErrorMsg(errMsg) {
            this.errMsg = errMsg;
        },
        setAgentsList(agentsList) {
            this.agentsList = agentsList;
        },
        setTotalStatistics(totalStatistics) {
            this.totalStatistics = totalStatistics;
        },
        setStatisticsList(statisticsList) {
            this.statisticsList = statisticsList;
        },
        setTotalCount(totalCount) {
            this.totalCount = totalCount;
        },
        async dispatchDividendDetails(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: DIVIDEND_DETAILS, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setTotalStatistics(response.total_value);
                    this.setStatisticsList(response.data);
                    this.setAgentsList(response.agents);
                }
            } catch (e) {
                console.log(e.response);
                this.setErrorMsg(e.response.message);
            }
        },
        async dispatchDailyAccounts(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: DAILY_ACCOUNTS, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setTotalStatistics(response.total_value);
                    this.setStatisticsList(response.data);
                    this.setAgentsList(response.agents);
                }
            } catch (e) {
                console.log(e.response);
                this.setErrorMsg(e.response.message);
            }
        },
        async dispatchSystemLogs(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: SYSTEM_LOGS, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setTotalCount(response.total_count);
                    this.setStatisticsList(response.data);
                    this.setAgentsList(response.agents);
                }
            } catch (e) {
                console.log(e.response);
                this.setErrorMsg(e.response.message);
            }
        },
        async dispatchOnlineData(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_ONLINE, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setTotalCount(response.total_count);
                    this.setStatisticsList(response.data);
                    this.setAgentsList(response.agents);
                }
            } catch (e) {
                console.log(e.response);
                this.setErrorMsg(e.response.message);
            }
        },
    },
    persist: {
        enabled: true
    }
});
