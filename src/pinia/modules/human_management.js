import request from '@/utils/request'
import { defineStore } from "pinia";
import { GET_QUERY } from "@/api";
import { GET_QUERY_KY } from "@/api";
import { GET_QUERY_HTR } from "@/api";
import { GET_REPORT } from "@/api";
import { GET_REPORT_KY } from "@/api";
import { GET_REPORT_HTR } from "@/api";
import { DISCOUNT_ZR } from "@/api";
import { DISCOUNT_DZ } from "@/api";
import { DISCOUNT_KY } from "@/api";
import { DISCOUNT_HTR } from "@/api";
import { GAME_SYSTEM } from "@/api";
import { GAME_OPEN } from "@/api";
import { GAME_DELETE } from "@/api";
import { GAME_EDIT } from "@/api";
import { GAME_UPDATE } from "@/api";
import { GAME_ADD } from "@/api";

export const humanManagementStore = defineStore('human_management', {
    state: () => ({
        success: false,
        gameItem: null,
        reportList: [],
        reportKyList: [],
        reportHtrList: [],
        gameList: [],
        queryList: [],
        queryKyList: [],
        kyTypeOptions: [],
        queryHtrList: [],
        totalCount: 0,
    }),
    getters: {
        getSuccess: (state) => state.success,
        getGameItem: (state) => state.gameItem,
        getReportList: (state) => state.reportList,
        getGameList: (state) => state.gameList,
        getReportKyList: (state) => state.reportKyList,
        getReportHtrList: (state) => state.reportHtrList,
        getQueryList: (state) => state.queryList,
        getQueryKyList: (state) => state.queryKyList,
        getQueryHtrList: (state) => state.queryHtrList,
        getKyTypeOptions: (state) => state.kyTypeOptions,
        getTotalCount: (state) => state.totalCount
    },
    actions: {
        setSuccess(success) {
            this.success = success;
        },
        setGameItem(gameItem) {
            this.gameItem = gameItem;
        },
        setGameList(gameList) {
            this.gameList = gameList;
        },
        setReportList(reportList) {
            this.reportList = reportList;
        },
        setReportKyList(reportKyList) {
            this.reportKyList = reportKyList;
        },
        setReportHtrList(reportHtrList) {
            this.reportHtrList = reportHtrList;
        },
        setQueryList(queryList) {
            this.queryList = queryList;
        },
        setQueryKyList(queryKyList) {
            this.queryKyList = queryKyList;
        },
        setQueryHtrList(queryHtrList) {
            this.queryHtrList = queryHtrList;
        },
        setTotalCount(totalCount) {
            this.totalCount = totalCount;
        },
        setKyTypeOptions(kyTypeOptions) {
            this.kyTypeOptions = kyTypeOptions;
        },
        async dispatchQuery(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_QUERY, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setQueryList(response.data);
                    this.setTotalCount(response.total_count);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchQueryKy(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_QUERY_KY, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setQueryKyList(response.data);
                    this.setTotalCount(response.total_count);
                    this.setKyTypeOptions(response.ky_type);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchQueryHtr(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_QUERY_HTR, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setQueryHtrList(response.data);
                    this.setTotalCount(response.total_count);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchReport(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_REPORT, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setReportList(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchReportKy(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_REPORT_KY, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setReportKyList(response.data);
                    this.setKyTypeOptions(response.ky_type);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchReportHtr(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_REPORT_HTR, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setReportHtrList(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchDiscountZr(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: DISCOUNT_ZR, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchDiscountDz(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: DISCOUNT_DZ, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchDiscountKy(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: DISCOUNT_KY, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchDiscountHtr(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: DISCOUNT_HTR, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchGameSystem(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GAME_SYSTEM, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setTotalCount(response.total_count);
                    this.setGameList(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchGameOpen(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GAME_OPEN, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchDeleteGame(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GAME_DELETE, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchEditGame(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GAME_EDIT, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setGameItem(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchUpdateGame(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GAME_UPDATE, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchAddGame(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GAME_ADD, method: 'POST', data })
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
