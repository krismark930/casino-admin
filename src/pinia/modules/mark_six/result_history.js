import request from '@/utils/request'
import { defineStore } from "pinia";
import { KA_KITHE_ALL } from "@/api";
import { KAKITHE_STATUS_UPDATE } from "@/api";
import { KAKITHE_DELETE } from "@/api";
import { KAKITHE_RESTORE } from "@/api";
import { KAKITHE_EDIT } from "@/api";
import { KAKITHE_WIN } from "@/api";

export const resultHistoryStore = defineStore('result_history', {
    state: () => ({
        success: false,
        kakitheList: [],
        totalCount: 0,
        winItem: {}
    }),
    getters: {
        getSuccess: (state) => state.success,
        getKakitheList: (state) => state.kakitheList,
        getTotalCount: (state) => state.totalCount,
        getWinItem: (state) => state.winItem
    },
    actions: {
        setSuccess(success) {
            this.success = success;
        },
        setKakitheList(kakitheList) {
            this.kakitheList = kakitheList;
        },
        setTotalCount(totalCount) {
            this.totalCount = totalCount;
        },
        setWinItem(winItem) {
            this.winItem = winItem;
        },
        async dispatchKakitheAll(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: KA_KITHE_ALL, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setKakitheList(response.data);
                    this.setTotalCount(response.total_count);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchUpateKakitheStatus(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: KAKITHE_STATUS_UPDATE, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchDeleteKakithe(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: KAKITHE_DELETE, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchRestoreKakithe(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: KAKITHE_RESTORE, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchEditKakithe(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: KAKITHE_EDIT, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchWinKakithe(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: KAKITHE_WIN, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setWinItem(response.data);
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