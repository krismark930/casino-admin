import request from '@/utils/request'
import { defineStore } from "pinia";
import { GET_KAMEM_ALL } from "@/api";
import { UPDATE_MEMBER_STATUS } from "@/api";
import { GET_KAGUAN_ALL } from "@/api";
import { KAGUAN_ALL } from "@/api";
import { UPDATE_KAGUAN_STATUS } from "@/api";
import { GET_KAMEM_SUPERIOR } from "@/api";
import { SAVE_KAMEM } from "@/api";
import { GET_KADAN_SUPERIOR } from "@/api";
import { SAVE_KADAN } from "@/api";
import { GET_KAZONG_SUPERIOR } from "@/api";
import { SAVE_KAZONG } from "@/api";
import { GET_KAGUAN_SUPERIOR } from "@/api";
import { SAVE_KAGUAN } from "@/api";

export const memberStore = defineStore('member', {
    state: () => ({
        success: false,
        memberList: [],
        kaguanMemberList: [],
        kazongMemberList: [],
        kadanMemberList: [],
        kamemSuperiorList: [],
        kadanSuperiorList: [],
        kadanOtherList: [],
        kazongSuperiorList: [],
        kazongOtherList: [],
        kaguanOtherList: [],
        totalCount: 0,
        errMessage: ""
    }),
    getters: {
        getSuccess: (state) => state.success,
        getMemberList: (state) => state.memberList,
        getTotalCount: (state) => state.totalCount,
        getKaguanMember: (state) => state.kaguanMemberList,
        getKazongMember: (state) => state.kazongMemberList,
        getKadanMember: (state) => state.kadanMemberList,
        getKamemSuperiorList: (state) => state.kamemSuperiorList,
        getKadanSuperiorList: (state) => state.kadanSuperiorList,
        getKadanOtherList: (state) => state.kadanOtherList,
        getKazongSuperiorList: (state) => state.kazongSuperiorList,
        getKazongOtherList: (state) => state.kazongOtherList,
        getKaguanOtherList: (state) => state.kaguanOtherList,
        getErrMessage: (state) => state.errMessage
    },
    actions: {
        setSuccess(success) {
            this.success = success;
        },
        setMemberList(memberList) {
            this.memberList = memberList;
        },
        setKaguanMemberList(kaguanMemberList) {
            this.kaguanMemberList = kaguanMemberList;
        },
        setKazongMemberList(kazongMemberList) {
            this.kazongMemberList = kazongMemberList;
        },
        setKadanMemberList(kadanMemberList) {
            this.kadanMemberList = kadanMemberList;
        },
        setKamemSuperiorList(kamemSuperiorList) {
            this.kamemSuperiorList = kamemSuperiorList;
        },
        setKadanSuperiorList(kadanSuperiorList) {
            this.kadanSuperiorList = kadanSuperiorList;
        },
        setKadanOtherList(kadanOtherList) {
            this.kadanOtherList = kadanOtherList;
        },
        setKazongSuperiorList(kazongSuperiorList) {
            this.kazongSuperiorList = kazongSuperiorList;
        },
        setKazongOtherList(kazongOtherList) {
            this.kazongOtherList = kazongOtherList;
        },
        setKaguanOtherList(kaguanOtherList) {
            this.kaguanOtherList = kaguanOtherList;
        },
        setTotalCount(totalCount) {
            this.totalCount = totalCount;
        },
        setErrMessage(errMessage) {
            this.errMessage = errMessage;
        },
        async dispatchGetKamemAll(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_KAMEM_ALL, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setMemberList(response.data);
                    this.setTotalCount(response.total_count);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchKamemSuperior(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_KAMEM_SUPERIOR, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setKamemSuperiorList(response.data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchGetKaguanAll(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_KAGUAN_ALL, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    console.log(response.data1);
                    this.setKaguanMemberList(response.data1);
                    this.setKazongMemberList(response.data2);
                    this.setKadanMemberList(response.data3);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchUpdateMemberStatus(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: UPDATE_MEMBER_STATUS, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchKaguanByGrade(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: KAGUAN_ALL, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setMemberList(response.data);
                    this.setTotalCount(response.total_count);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchUpdateKaguanStatus(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: UPDATE_KAGUAN_STATUS, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchAddKamem(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: SAVE_KAMEM, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response.data.message);
                this.setErrMessage(e.response.data.message);
            }
        },
        async dispatchKadanSuperior(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_KADAN_SUPERIOR, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setKadanSuperiorList(response.data);
                    this.setKadanOtherList(response.other_data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchAddKadan(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: SAVE_KADAN, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
                this.setErrMessage(e.response.data.message);
            }
        },
        async dispatchKazongSuperior(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_KAZONG_SUPERIOR, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setKazongSuperiorList(response.data);
                    this.setKazongOtherList(response.other_data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchAddKazong(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: SAVE_KAZONG, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
                this.setErrMessage(e.response.data.message);
            }
        },
        async dispatchKaguanSuperior(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_KAGUAN_SUPERIOR, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setKaguanOtherList(response.other_data);
                }
            } catch (e) {
                console.log(e.response);
            }
        },
        async dispatchAddKaguan(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: SAVE_KAGUAN, method: 'POST', data })
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
                this.setErrMessage(e.response.data.message);
            }
        },
    },
    persist: {
        enabled: true
    }
});