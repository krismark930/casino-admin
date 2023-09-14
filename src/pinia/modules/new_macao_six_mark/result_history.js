import request from '@/utils/request'
import { defineStore } from "pinia";
import { NEW_MACAO_KA_KITHE_ALL } from "@/api";
import { NEW_MACAO_KAKITHE_STATUS_UPDATE } from "@/api";
import { NEW_MACAO_KAKITHE_DELETE } from "@/api";
import { NEW_MACAO_KAKITHE_RESTORE } from "@/api";
import { NEW_MACAO_KAKITHE_EDIT } from "@/api";
import { NEW_MACAO_KAKITHE_WIN } from "@/api";

export const resultHistoryStore = defineStore('new_macao_result_history', {
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
                let response = await request({ url: NEW_MACAO_KA_KITHE_ALL, method: 'POST', data })
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
                let response = await request({ url: NEW_MACAO_KAKITHE_STATUS_UPDATE, method: 'POST', data })
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
                let response = await request({ url: NEW_MACAO_KAKITHE_DELETE, method: 'POST', data })
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
                let response = await request({ url: NEW_MACAO_KAKITHE_RESTORE, method: 'POST', data })
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
                let response = await request({ url: NEW_MACAO_KAKITHE_EDIT, method: 'POST', data })
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
                let response = await request({ url: NEW_MACAO_KAKITHE_WIN, method: 'POST', data })
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