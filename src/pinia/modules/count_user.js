import request from '@/utils/request'
import { defineStore } from "pinia";
import { USER_INFO } from "@/api";
import { RECORD_IP } from "@/api";
import { RECORD } from "@/api";

export const useCountUserStore = defineStore('count_user', {
    state: () => ({
        success: false,
        userInfo: {},
        loginIP: "",
        users: [],
        web_member_logs: [],
        money_logs: [],
        totalCount: 0,
    }),
    getters: {
        getSuccess: (state) => state.success,
        getUserInfo: (state) => state.userInfo,
        getLoginIP: (state) => state.loginIP,
        getUsers: (state) => state.users,
        getWebMemberLogs: (state) => state.web_member_logs,
        getMoneyLogs: (state) => state.money_logs,
        getTotalCount: (state) => state.totalCount
    },
    actions: {
        setSuccess(success) {
            this.success = success;
        },
        setUserInfo(userInfo) {
            this.userInfo = userInfo;
        },
        setLoginIP(loginIP) {
            this.loginIP = loginIP;
        },
        setUsers(users) {
            this.users = users;
        },
        setWebMemberLogs(web_member_logs) {
            this.web_member_logs = web_member_logs;
        },
        setMoneyLogs(money_logs) {
            this.money_logs = money_logs;
        },
        setTotalCount(totalCount) {
            this.totalCount = totalCount;
        },
        async dispatchUserInfo(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: USER_INFO, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setUserInfo(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchRecordIP(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: RECORD_IP, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setWebMemberLogs(response.data);
                    this.setLoginIP(response.LoginIP);
                    this.setUsers(response.users);
                    this.setTotalCount(response.total_count);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchRecord(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: RECORD, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setMoneyLogs(response.data);
                    this.setTotalCount(response.total_count);
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