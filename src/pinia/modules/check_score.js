import request from '@/utils/request'
import { defineStore } from "pinia";
import { GET_BET_SLIP } from "@/api";
import { GET_TODAY_SPORT_BY_ORDER } from "@/api";
import { UPDATE_SPORT_OPEN } from "@/api";
import { GET_LEAGUE_BY_DATE } from "@/api";
import { BET_RESUMPTION } from "@/api";
import { BET_EVENT } from "@/api";

export const useCheckScore = defineStore('check_score', {
    state: () => ({
        success: false,
        betSlipList: [],
        todaySportListByOrder: [],
        leagueList: []
    }),
    getters: {
        getSuccess: (state) => state.success,
        getBetSlipList: (state) => state.betSlipList,
        getTodaySportListByOrder: (state) => state.todaySportListByOrder,
        getLeagueList: (state) => state.leagueList
    },
    actions: {
        setSuccess(success) {
            this.success = success;
        },
        setBetSlipList(betSlipList) {
            this.betSlipList = betSlipList;
        },
        setTodaySportListByOrder(todaySportListByOrder) {
            this.todaySportListByOrder = todaySportListByOrder;
        },
        setLeagueList(leagueList) {
            this.leagueList = leagueList;
        },
        async dispatchBetSlipList(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_BET_SLIP, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setBetSlipList(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchTodaySportListByOrder(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_TODAY_SPORT_BY_ORDER, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setTodaySportListByOrder(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchSportOpen(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: UPDATE_SPORT_OPEN, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchLeagueByDate(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_LEAGUE_BY_DATE, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    let tempLeagueList = [];
                    let data = { label: "全部", value: "" };
                    tempLeagueList.push(data);
                    response.data.map(item => {
                        let data = {
                            label: item["M_League"],
                            value: item["M_League"]
                        }
                        tempLeagueList.push(data);
                    })
                    this.setLeagueList(tempLeagueList);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchBetResumption(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: BET_RESUMPTION, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchBetEvent(data) {
            try {
                console.log(data);
                this.setSuccess(false);
                let response = await request({ url: BET_EVENT, method: 'POST', data })
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