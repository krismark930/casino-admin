import request from '@/utils/request'
import { defineStore } from "pinia";
import { ALWAYS_COLOR_ORDER_LIST } from "@/api";
import { ORDER_CANCEL_ALL } from "@/api";
import { TOTAL_ORDER_HISTORY } from "@/api";
import { USER_LOTTERY } from "@/api";
import { DETAIL_LOTTERY } from "@/api";

export const manageHomeStore = defineStore('manage_home', {
    state: () => ({
        success: false,
        orderList: [],
        totalItem: {},
        userTotalItem: {},
        lotteryHistoryAllList: [],
        userLotteryList: [],
        detailLotteryList: []
    }),
    getters: {
        getSuccess: (state) => state.success,
        getOrderList: (state) => state.orderList,
        getTotalItem: (state) => state.totalItem,
        getUserTotalItem: (state) => state.userTotalItem,
        getLotteryHistoryAllList: (state) => state.lotteryHistoryAllList,
        getUserLotteryList: (state) => state.userLotteryList,
        getDetailLotteryList: (state) => state.detailLotteryList
    },
    actions: {
        setSuccess(success) {
            this.success = success;
        },
        setOrderList(orderList) {
            this.orderList = orderList;
        },
        setUserLotteryList(userLotteryList) {
            this.userLotteryList = userLotteryList;
        },
        setDetailLotteryList(detailLotteryList) {
            this.detailLotteryList = detailLotteryList;
        },
        setTotalItem(totalItem) {
            this.totalItem = totalItem;
        },
        setUserTotalItem(userTotalItem) {
            this.userTotalItem = userTotalItem;
        },
        setAllChecked(checked) {
            this.orderList.map((item) => {
                if (Number(item.status) === 0) item.checked = checked;
            });
            console.log(this.orderList);
        },
        setLotteryHistoryAll(lotteryHistoryAllList) {
            this.lotteryHistoryAllList = lotteryHistoryAllList;
        },
        async dispatchOrderList(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: ALWAYS_COLOR_ORDER_LIST, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setOrderList(response.data);
                    this.setTotalItem(response.total_item);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchUserLottery(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: USER_LOTTERY, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setUserLotteryList(response.data);
                    this.setUserTotalItem(response.total_item);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchDetailLottery(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: DETAIL_LOTTERY, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setDetailLotteryList(response.data);
                    this.setUserTotalItem(response.total_item);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchLotteryHistoryAll(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: TOTAL_ORDER_HISTORY, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setLotteryHistoryAll(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchCancelOrderAll(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: ORDER_CANCEL_ALL, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        dispatchAllChecked(checked) {
            this.setAllChecked(checked);
        }
    },
    persist: {
        enabled: true
    }
});