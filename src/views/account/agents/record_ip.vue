<template>
    <div style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center; margin: 1rem;">
        <el-row style="margin-bottom: 10px;">
            <el-col :span="12">
            </el-col>
            <el-col :span="12">
                <el-button type="primary" @click="goBeforePage">后 退</el-button>
            </el-col>
        </el-row>
        <div align="center">
            <table width="400" border="0" cellspacing="1" cellpadding="0" class="m_tab">
                <tr class="m_title">
                    <td align="center" style="font-size:16px;color:red;">
                        <div><b>相同登录IP的会员</b></div>
                        <div><b>{{ loginIP }}</b></div>
                        <div v-for="(user, userIndex) in users" :key="userIndex">
                            <div><b>{{ user.UserName }}</b></div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
        <div align="center" style="margin-top: 20px;">
            <el-table v-loading="loading" :data="web_member_logs" stripe style="width: 100%;">
                <el-table-column prop="UserName" label="用户名" width="180" />
                <el-table-column prop="DateTime" label="日期时间" width="180" />
                <el-table-column prop="LoginIP" label="IP地址" />
                <el-table-column prop="Contect" label="明细" />
                <el-table-column prop="Url" label="网址" />
            </el-table>
        </div>
        <div class="pagination">
            <el-pagination background layout="prev, pager, next" :total="totalCount" :page-size="100"
                @current-change="onPageChange" v-model:current-page="page" />
        </div>
    </div>
    <el-backtop :right="60" :bottom="60" target=".main" />
</template>
<script>
import { defineComponent } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useCountUserStore } from "@/pinia/modules/count_user";

export default defineComponent({
    name: 'CountUser',
    setup() {
        const router = useRouter()
        const route = useRoute();
        const { dispatchRecordIP } = useCountUserStore();
        return {
            router,
            route,
            dispatchRecordIP
        }
    },
    data() {
        return {
            loading: false,
            page: 1
        }
    },
    computed: {
        users: function () {
            const { getUsers } = useCountUserStore();
            return getUsers;
        },
        loginIP: function () {
            const { getLoginIP } = useCountUserStore();
            return getLoginIP;
        },
        web_member_logs: function () {
            const { getWebMemberLogs } = useCountUserStore();
            return getWebMemberLogs;
        },
        totalCount: function () {
            const { getTotalCount } = useCountUserStore();
            return getTotalCount;
        }
    },
    methods: {
        async onPageChange() {
            this.loading = true;
            await this.dispatchRecordIP({ user_name: this.route.query.username, page_no: this.page });
            this.loading = false;
        },
        goBeforePage: function () {
            this.router.go(-1);
        }
    },
    async mounted() {
        this.loading = true;
        await this.dispatchRecordIP({ user_name: this.route.query.username });
        this.loading = false;
    }
})
</script>
<style lang="scss" scoped>
.m_tab {
    padding-top: 3px;
    padding-right: 2px;
    padding-left: 2px;
    background-color: #006255;
}

.pagination {
    margin-top: 10px;
    text-align: center;
    display: inline-flex;
}
</style>