import request from '@/utils/request'
import { defineStore } from "pinia";
import { GET_AG_LOGS } from "@/api";
import { GET_BBIN_LOGS } from "@/api";
import { GET_MG_LOGS } from "@/api";
import { GET_PT_LOGS } from "@/api";
import { GET_OG_LOGS } from "@/api";
import { GET_KY_LOGS } from "@/api";

export const gameLogStore = defineStore('game_log', {
    state: () => ({
        success: false,
        errMsg: "",
        totalCount: 0,
        agLogList: [],
        bbinLogList: [],
        mgLogList: [],
        ptLogList: [],
        ogLogList: [],
        kyLogList: []
    }),
    getters: {
        getSuccess: (state) => state.success,
        getErrMessage: (state) => state.errMsg,
        getTotalCount: (state) => state.totalCount,
        getAGLogList: (state) => state.agLogList,
        getBBINLogList: (state) => state.bbinLogList,
        getMGLogList: (state) => state.mgLogList,
        getPTLogList: (state) => state.ptLogList,
        getOGLogList: (state) => state.ogLogList,
        getKYLogList: (state) => state.kyLogList,
    },
    actions: {
        setSuccess(success) {
            this.success = success;
        },
        setErrorMsg(errMsg) {
            this.errMsg = errMsg;
        },
        setTotalCount(totalCount) {
            this.totalCount = totalCount;
        },
        setAGLogList(agLogList) {
            this.agLogList = agLogList;
        },
        setBBINLogList(bbinLogList) {
            this.bbinLogList = bbinLogList;
        },
        setMGLogList(mgLogList) {
            this.mgLogList = mgLogList;
        },
        setPTLogList(ptLogList) {
            this.ptLogList = ptLogList;
        },
        setOGLogList(ogLogList) {
            this.ogLogList = ogLogList;
        },
        setKYLogList(kyLogList) {
            this.kyLogList = kyLogList;
        },
        async dispatchAGLogsData(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_AG_LOGS, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setTotalCount(response.total_count);
                    this.setAGLogList(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchBBINLogsData(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_BBIN_LOGS, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setTotalCount(response.total_count);
                    this.setBBINLogList(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchMGLogsData(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_MG_LOGS, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setTotalCount(response.total_count);
                    this.setMGLogList(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchPTLogsData(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_PT_LOGS, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setTotalCount(response.total_count);
                    this.setPTLogList(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchOGLogsData(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_OG_LOGS, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setTotalCount(response.total_count);
                    this.setOGLogList(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchKYLogsData(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_KY_LOGS, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setTotalCount(response.total_count);
                    this.setKYLogList(response.data);
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
