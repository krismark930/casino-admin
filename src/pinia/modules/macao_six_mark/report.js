import request from '@/utils/request'
import { defineStore } from "pinia";
import { MACAO_KAGUAN_REPORT } from "@/api";
import { MACAO_ALL_REPORT } from "@/api";
import { MACAO_KAZONG_REPORT } from "@/api";
import { MACAO_KADAI_REPORT } from "@/api";
import { MACAO_KAUSER_REPORT } from "@/api";
import { MACAO_TOTAL_BILL } from "@/api";
import { MACAO_SUB_BILL } from "@/api";

export const reportStore = defineStore('macao_report', {
    state: () => ({
        success: false,
        kaguanReportList: [],
        sumKaguanReport: [],
        kazongReportList: [],
        sumKazongReport: [],
        kadaiReportList: [],
        sumKadaiReport: [],
        kauserReportList: [],
        sumKauserReport: [],
        allReportList: [],
        sumAllReport: [],
        totalBillList: [],
        totalBillItem: [],
        subBillList: [],
        subBillItem: [],
    }),
    getters: {
        getSuccess: (state) => state.success,
        getKaguanReportList: (state) => state.kaguanReportList,
        getSumKaguanReport: (state) => state.sumKaguanReport,
        getKazongReportList: (state) => state.kazongReportList,
        getSumKazongReport: (state) => state.sumKazongReport,
        getKadaiReportList: (state) => state.kadaiReportList,
        getSumKadaiReport: (state) => state.sumKadaiReport,
        getKauserReportList: (state) => state.kauserReportList,
        getSumKauserReport: (state) => state.sumKauserReport,
        getAllReportList: (state) => state.allReportList,
        getSumAllReport: (state) => state.sumAllReport,
        getTotalBillList: (state) => state.totalBillList,
        getTotalBillItem: (state) => state.totalBillItem,
        getSubBillList: (state) => state.subBillList,
        getSubBillItem: (state) => state.subBillItem
    },
    actions: {
        setSuccess(success) {
            this.success = success;
        },
        setAllReportList(allReportList) {
            this.allReportList = allReportList;
        },
        setSumAllReport(sumAllReport) {
            this.sumAllReport = sumAllReport;
        },
        setKaguanReportList(kaguanReportList) {
            this.kaguanReportList = kaguanReportList;
        },
        setSumKaguanReport(sumKaguanReport) {
            this.sumKaguanReport = sumKaguanReport;
        },
        setSumKazongReport(sumKazongReport) {
            this.sumKazongReport = sumKazongReport;
        },
        setKazongReportList(kazongReportList) {
            this.kazongReportList = kazongReportList;
        },
        setSumKadaiReport(sumKadaiReport) {
            this.sumKadaiReport = sumKadaiReport;
        },
        setKadaiReportList(kadaiReportList) {
            this.kadaiReportList = kadaiReportList;
        },
        setSumKauserReport(sumKauserReport) {
            this.sumKauserReport = sumKauserReport;
        },
        setKauserReportList(kauserReportList) {
            this.kauserReportList = kauserReportList;
        },
        setTotalBillList(totalBillList) {
            this.totalBillList = totalBillList;
        },
        setTotalBillItem(totalBillItem) {
            this.totalBillItem = totalBillItem;
        },
        setSubBillList(subBillList) {
            this.subBillList = subBillList;
        },
        setSubBillItem(subBillItem) {
            this.subBillItem = subBillItem;
        },
        async dispatchAllReport(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: MACAO_ALL_REPORT, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setAllReportList(response.data);
                    this.setSumAllReport(response.sum_data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchKaguanReport(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: MACAO_KAGUAN_REPORT, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setKaguanReportList(response.data);
                    this.setSumKaguanReport(response.sum_data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchKazongReport(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: MACAO_KAZONG_REPORT, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setKazongReportList(response.data);
                    this.setSumKazongReport(response.sum_data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchKadaiReport(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: MACAO_KADAI_REPORT, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setKadaiReportList(response.data);
                    this.setSumKadaiReport(response.sum_data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchKauserReport(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: MACAO_KAUSER_REPORT, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setKauserReportList(response.data);
                    this.setSumKauserReport(response.sum_data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchTotalBill(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: MACAO_TOTAL_BILL, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setTotalBillList(response.data);
                    this.setTotalBillItem(response.sum_data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchSubBill(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: MACAO_SUB_BILL, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setSubBillList(response.data);
                    this.setSubBillItem(response.sum_data);
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