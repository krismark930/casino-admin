import request from '@/utils/request'
import { defineStore } from "pinia";
import { GET_WEBSITE_SETTING } from "@/api";
import { GET_ODD_DIFF_SETTING } from "@/api";
import { UPDATE_WEBSITE_SETTING } from "@/api";
import { UPDATE_ODD_DIFF_SETTING } from "@/api";
import { GET_AUTO_PRECIPITATION } from "@/api";
import { UPDATE_AUTO_PRECIPITATION } from "@/api";
import { GET_SINGLE_QUOTA } from "@/api";
import { UPDATE_SINGLE_QUOTA } from "@/api";
import { GET_WATER_SETTING } from "@/api";
import { UPDATE_WATER_SETTING } from "@/api";

export const systemMaintanceStore = defineStore('system_maintance', {
    state: () => ({
        success: false,
        websiteSettingItem: null,
        oddDiffSettingItem: null,
        autoPrecipitationList: [],
        singleQuotaList: [],
        waterSettingList: []
    }),
    getters: {
        getSuccess: (state) => state.success,
        getWebsiteSettingItem: (state) => state.websiteSettingItem,
        getOddDiffSettingItem: (state) => state.oddDiffSettingItem,
        getAutoPrecipitationList: (state) => state.autoPrecipitationList,
        getSingleQuotaList: (state) => state.singleQuotaList,
        getWaterSettingList: (state) => state.waterSettingList,
    },
    actions: {
        setSuccess(success) {
            this.success = success;
        },
        setWebsiteSettingItem(websiteSettingItem) {
            this.websiteSettingItem = websiteSettingItem;
        },
        setOddDiffSettingItem(oddDiffSettingItem) {
            this.oddDiffSettingItem = oddDiffSettingItem;
        },
        setAutoPrecipitationList(autoPrecipitationList) {
            this.autoPrecipitationList = autoPrecipitationList;
        },
        setSingleQuotaList(singleQuotaList) {
            this.singleQuotaList = singleQuotaList;
        },
        setWaterSettingList(waterSettingList) {
            this.waterSettingList = waterSettingList
        },
        async dispatchWebsiteSettingItem(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_WEBSITE_SETTING, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setWebsiteSettingItem(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchUpdateWebsiteSetting(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: UPDATE_WEBSITE_SETTING, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchOddDiffSetting(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_ODD_DIFF_SETTING, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setOddDiffSettingItem(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchUpdateOddDiffSetting(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: UPDATE_ODD_DIFF_SETTING, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchAutoPrecipitation(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_AUTO_PRECIPITATION, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setAutoPrecipitationList(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchUpdateAutoPrecipitation(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: UPDATE_AUTO_PRECIPITATION, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchSingleQuota(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_SINGLE_QUOTA, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setSingleQuotaList(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchUpdateSingleQuota(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: UPDATE_SINGLE_QUOTA, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchWaterSetting(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_WATER_SETTING, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setWaterSettingList(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchUpdateWaterSetting(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: UPDATE_WATER_SETTING, method: 'POST', data })
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