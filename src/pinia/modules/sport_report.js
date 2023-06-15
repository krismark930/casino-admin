import request from '@/utils/request'
import { defineStore } from "pinia";
import { SPORT_REPORT_ALL } from "@/api";

export const sportReportStore = defineStore('user_info', {
    state: () => ({
        success: false,
        errMsg: "",
        totalCount: 0,
        sportReportItem: {},
    }),
    getters: {
        getSuccess: (state) => state.success,
        getErrMessage: (state) => state.errMsg,
        getTotalCount: (state) => state.totalCount,
        getSportReportItem: (state) => state.sportReportItem,
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
        setSportReportItem(sportReportItem) {
            this.sportReportItem = sportReportItem;
        },
        async dispatchSportReport() {
            try {
                this.setSuccess(false);
                let response = await request({ url: SPORT_REPORT_ALL, method: 'GET' })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setSportReportItem(response.data);
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
