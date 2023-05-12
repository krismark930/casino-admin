<template>
    <div style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center; margin: 1rem;">
        <el-row style="margin-bottom: 10px;">
            <el-col :span="12">
            </el-col>
            <el-col :span="12">
                <el-button type="primary" @click="goBeforePage">后 退</el-button>
            </el-col>
        </el-row>
        <div align="center" style="margin-top: 20px;">
            <el-table v-loading="loading" :data="money_logs" stripe style="width: 100%;">
                <el-table-column prop="order_num" label="定单号" width="180" />
                <el-table-column prop="type" label="投注内容" width="300">
                    <template #default="scope">
                        <div v-html="scope.row.type"></div>
                    </template>
                </el-table-column>
                <el-table-column prop="update_time" label="操作时间" width="100" />
                <el-table-column prop="about" label="操作明细" width="200">
                    <template #default="scope">
                        <div v-html="scope.row.about"></div>
                    </template>
                </el-table-column>
                <el-table-column prop="order_value" label="金额" />
                <el-table-column prop="assets" label="操作前金额" />
                <el-table-column prop="balance" label="操作后金额" />
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
        const { dispatchRecord } = useCountUserStore();
        return {
            router,
            route,
            dispatchRecord
        }
    },
    data() {
        return {
            loading: false,
            page: 1,
        }
    },
    computed: {
        money_logs: function () {
            const { getMoneyLogs } = useCountUserStore();
            return getMoneyLogs;
        },
        totalCount: function () {
            const { getTotalCount } = useCountUserStore();
            return getTotalCount;
        }
    },
    methods: {
        async onPageChange() {
            this.loading = true;
            await this.dispatchRecord({ user_id: this.route.query.user_id, page_no: this.page });
            this.loading = false;
        },
        goBeforePage: function () {
            this.router.go(-1);
        }
    },
    async mounted() {
        this.loading = true;
        await this.dispatchRecord({ user_id: this.route.query.user_id });
        this.loading = false;
    }
})
</script>
<style lang="scss" scoped>
.pagination {
    margin-top: 10px;
    text-align: center;
    display: inline-flex;
}
</style>