import request from '@/utils/request'
import { defineStore } from "pinia";
import { GET_COMPANY } from "@/api";
import { GET_COMPANY_INFO } from "@/api";
import { ADD_COMPANY } from "@/api";
import { UPDATE_COMPANY } from "@/api";
import { DETAIL_COMPANY } from "@/api";
import { UPDATE_MONEY_AGENCY } from "@/api";
import { UPDATE_MEMBER } from "@/api";
import { UPDATE_AGENCY } from "@/api";

export const companyStore = defineStore('company', {
    state: () => ({
        success: false,
        errMsg: "",
        totalCount: 0,
        companyList: [],
        parentsList: [],
        addParentsList: [],
        credit1: 0,
        credit2: 0,
        credit3: 0,
        web: ""
    }),
    getters: {
        getSuccess: (state) => state.success,
        getErrMessage: (state) => state.errMsg,
        getTotalCount: (state) => state.totalCount,
        getCompanyList: (state) => state.companyList,
        getParentsList: (state) => state.parentsList,
        getAddParentsList: (state) => state.addParentsList,
        getCredit1: (state) => state.credit1,
        getCredit2: (state) => state.credit2,
        getCredit3: (state) => state.credit3,
        getWeb: (state) => state.web
    },
    actions: {
        setSuccess(success) {
            this.success = success;
        },
        setErrorMsg(errMsg) {
            this.errMsg = errMsg;
        },
        setTotalCount(totalCount) {
            this.totalCount = totalCount;
        },
        setCompanyList(companyList) {
            this.companyList = companyList;
        },
        setParentsList(parentsList) {
            this.parentsList = parentsList
        },
        setAddParentsList(addParentsList) {
            this.addParentsList = addParentsList;
        },
        setCredit1(credit1) {
            this.credit1 = credit1;
        },
        setCredit2(credit2) {
            this.credit2 = credit2;
        },
        setCredit3(credit3) {
            this.credit3 = credit3
        },
        setWeb(web) {
            this.web = web
        },
        async dispatchCompanyData(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_COMPANY, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setTotalCount(response.total_count);
                    this.setCompanyList(response.data);
                    this.setParentsList(response.parents)
                    this.setWeb(response.web);
                }
            } catch (e) {
                console.log(e.response);
                this.setErrorMsg(e.response.data.message);
            }
        },
        async dispatchCompanyInfoData(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_COMPANY_INFO, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setAddParentsList(response.parents);
                    this.setCredit1(response.crow);
                    this.setCredit2(response.srow);
                    this.setCredit3(response.erow);
                }
            } catch (e) {
                console.log(e.response);
                this.setErrorMsg(e.response.data.message);
            }
        },        
        async dispatchAddCompanyData(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: ADD_COMPANY, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
                this.setErrorMsg(e.response.data.message);
            }
        },
        async dispatchUpdateCompanyData(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: UPDATE_COMPANY, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
                this.setErrorMsg(e.response.data.message);
            }
        },
        async dispatchUpdateDetailCompany(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: DETAIL_COMPANY, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
                this.setErrorMsg(e.response.data.message);
            }
        },
        async dispatchUpdateMoneyAgency(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: UPDATE_MONEY_AGENCY, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
                this.setErrorMsg(e.response.data.message);
            }
        },
        async dispatchUpdateMember(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: UPDATE_MEMBER, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
                this.setErrorMsg(e.response.data.message);
            }
        },
        async dispatchUpdateAgency(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: UPDATE_AGENCY, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
                this.setErrorMsg(e.response.data.message);
            }
        },
    },
    persist: {
        enabled: true
    }
});
