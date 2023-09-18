import request from '@/utils/request'
import { defineStore } from "pinia";
import { NEW_MACAO_MEMBER_QUERY } from "@/api";
import { NEW_MACAO_MAIN_QUERY } from "@/api";
import { NEW_MACAO_KATAN_DELETE } from "@/api";
import { NEW_MACAO_KATAN_UPDATE } from "@/api";

export const queryStore = defineStore('new_macao_query', {
    state: () => ({
        success: false,
        memberList: [],
        mainList: [],
        mainSumItem: {}
    }),
    getters: {
        getSuccess: (state) => state.success,
        getMemberList: (state) => state.memberList,
        getMainList: (state) => state.mainList,
        getMainSumItem: (state) => state.mainSumItem
    },
    actions: {
        setSuccess(success) {
            this.success = success;
        },
        setMemberList(memberList) {
            this.memberList = memberList;
        },
        setMainList(mainList) {
            this.mainList = mainList;
        },
        setMainSumItem(mainSumItem) {
            this.mainSumItem = mainSumItem;
        },
        async dispatchMemberQuery(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: NEW_MACAO_MEMBER_QUERY, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setMemberList(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchMainQuery(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: NEW_MACAO_MAIN_QUERY, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setMainList(response.data);
                    this.setMainSumItem(response.sum_data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchDeleteKatan(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: NEW_MACAO_KATAN_DELETE, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchUpdateKatan(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: NEW_MACAO_KATAN_UPDATE, method: 'POST', data })
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