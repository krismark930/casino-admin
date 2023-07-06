import request from '@/utils/request'
import { defineStore } from "pinia";
import { GET_POSTS } from "@/api";
import { UPDATE_POST } from "@/api";
import { DELETE_POST } from "@/api";

export const postStore = defineStore('post', {
    state: () => ({
        success: false,
        errMsg: "",
        totalCount: 0,
        postList: [],
    }),
    getters: {
        getSuccess: (state) => state.success,
        getErrMessage: (state) => state.errMsg,
        getTotalCount: (state) => state.totalCount,
        getPostList: (state) => state.postList,
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
        setPostList(postList) {
            this.postList = postList;
        },
        async dispatchPosts(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: GET_POSTS, method: 'POST', data })
                console.log(response);
                if (response.status === 200) {
                    this.setSuccess(true);
                    this.setPostList(response.data);
                    this.setTotalCount(response.total_count);
                }
            } catch (e) {
                console.log(e.response);
                this.setErrorMsg(e.response.message);
            }
        },
        async dispatchUpdatePost(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: UPDATE_POST, method: 'POST', data })
                console.log(response);
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
                this.setErrorMsg(e.response.message);
            }
        },
        async dispatchDeletePost(data) {
            try {
                this.setSuccess(false);
                let response = await request({ url: DELETE_POST, method: 'POST', data })
                console.log(response);
                if (response.status === 200) {
                    this.setSuccess(true);
                }
            } catch (e) {
                console.log(e.response);
                this.setErrorMsg(e.response.message);
            }
        },
    },
    persist: {
        enabled: true
    }
});
