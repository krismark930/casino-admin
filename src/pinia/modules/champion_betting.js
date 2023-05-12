import request from '@/utils/request'
import { defineStore } from "pinia";
import { CHAMPION_DELETE_EVENT } from "@/api";

export const useChampionBettingStore = defineStore('champion_betting', {
    state: () => ({
        success: false,
    }),
    getters: {
        getSuccess: (state) => state.success,
    },
    actions: {
        setSuccess(success) {
            this.success = success;
        },
        async dispatchChampionDeleteEvent(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: CHAMPION_DELETE_EVENT, method: 'POST', data })
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