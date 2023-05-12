import request from '@/utils/request'
import { defineStore } from "pinia";
import { GET_USER_CONFIG } from "@/api";
import { GET_USER_CONFIG_ITEM } from "@/api";
import { UPDATE_CONFIG_ITEM } from "@/api";

export const userConfigStore = defineStore('user_config', {
    state: () => ({
        success: false,
        userConfigList: [],
        userConfigItem: null,
        totalCount: 0
    }),
    getters: {
        getSuccess: (state) => state.success,
        getUserConfigList: (state) => state.userConfigList,
        getUserConfigItem: (state) => state.userConfigItem,
        getTotalCount: (state) => state.totalCount
    },
    actions: {
        setSuccess(success) {
            this.success = success;
        },
        setTotalCount(totalCount) {
            this.totalCount = totalCount;
        },
        setUserConfigList(userConfigList) {
            this.userConfigList = userConfigList;
        },
        setUserConfigItem(userConfigItem) {
            this.userConfigItem = userConfigItem;
        },
        async dispatchUserConfigList(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_USER_CONFIG, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setUserConfigList(response.data);
                    this.setTotalCount(response.total_count);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchUserConfigItem(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_USER_CONFIG_ITEM, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setUserConfigItem(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchUpdateConfigItem(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: UPDATE_CONFIG_ITEM, method: 'POST', data })
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