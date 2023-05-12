import request from '@/utils/request'
import { defineStore } from "pinia";
import { GAME_STATUS } from "@/api";
import { SAVE_GAME_RESULT } from "@/api";
import { HANDICAP_UPDATE } from "@/api";
import { BEST_UPDATE } from "@/api";
import { KAKITHE_UPDATE } from "@/api";
import { YA_KITHE_ALL } from "@/api";
import { YAKITHE_UPDATE } from "@/api";
import { YAKITHE_ITEM } from "@/api";

export const handicapStore = defineStore('handicap', {
    state: () => ({
        success: false,
        gameStatus: {},
        yakitheList: [],
        yakitheItem: {}
    }),
    getters: {
        getSuccess: (state) => state.success,
        getGameStatus: (state) => state.gameStatus,
        getYakitheList: (state) => state.yakitheList,
        getYakitheItem: (state) => state.yakitheItem,
    },
    actions: {
        setSuccess(success) {
            this.success = success;
        },
        setGameStatus(gameStatus) {
            this.gameStatus = gameStatus;
        },
        setYakitheList(yakitheList) {
            this.yakitheList = yakitheList;
        },
        setYakitheItem(yakitheItem) {
            this.yakitheItem = yakitheItem;
        },
        async dispatchGameStatus(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GAME_STATUS, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setGameStatus(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchYakitheItem(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: YAKITHE_ITEM, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setYakitheItem(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchYakitheAll(data) {
            try {
                // this.setSuccess(false);
                let response = await request({ url: YA_KITHE_ALL, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setYakitheList(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchGameResult(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: SAVE_GAME_RESULT, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchHandicap(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: HANDICAP_UPDATE, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchKitheBest(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: BEST_UPDATE, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    // this.setGameStatus(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchKakitheUpdate(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: KAKITHE_UPDATE, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setGameStatus(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchYakitheUpdate(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: YAKITHE_UPDATE, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setYakitheItem(response.data);
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