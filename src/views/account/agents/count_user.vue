<template>
    <div style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center; margin: 1rem;">
        <el-row style="margin-bottom: 10px;">
            <el-col :span="12">
            </el-col>
            <el-col :span="12">
                <el-button type="primary" @click="goBeforePage">后 退</el-button>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <el-form-item label="账户名称:">
                    <font color="blue"><b>{{ userInfo.username }}</b></font>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="上级代理:">
                    <font color="blue"><b>{{ userInfo.Agents }}</b></font>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="会员ID:">
                    <font color="blue"><b>{{ userInfo.user_id }}</b></font>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <el-form-item label="姓 名:">
                    <font color="blue"><b>{{ userInfo.alias }}</b></font>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="注册时间:">
                    <font color="blue"><b>{{ userInfo.AddDate }}</b></font>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="最后一次充值日期:">
                    <font color="blue"><b>{{ userInfo.datetime }}</b></font>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <el-form-item label="AG账号:">
                    <font><b>{{ userInfo.AG_User }}</b></font>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="BBIN账号:">
                    <font><b>{{ userInfo.BBIN_User }}</b></font>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="OG账号:">
                    <font><b>{{ userInfo.OG_User }}</b></font>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <el-form-item label="MG账号:">
                    <font><b>{{ userInfo.MG_User }}</b></font>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="PT账号:">
                    <font><b>{{ userInfo.PT_User }}</b></font>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="开元账号:">
                    <font><b>{{ userInfo.KY_User }}</b></font>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <el-form-item label="账户余额:">
                    <font color="blue"><b>{{ userInfo.money }}0元</b></font>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="AG余额:">
                    <font color="blue"><b>00元</b></font>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="BBIN余额:">
                    <font color="blue"><b>0元</b></font>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6">
                <el-form-item label="OG余额:">
                    <font color="blue"><b>0元</b></font>
                </el-form-item>
            </el-col>
            <el-col :span="6">
                <el-form-item label="MG余额:">
                    <font color="blue"><b>0元</b></font>
                </el-form-item>
            </el-col>
            <el-col :span="6">
                <el-form-item label="PT余额:">
                    <font color="blue"><b>0元</b></font>
                </el-form-item>
            </el-col>
            <el-col :span="6">
                <el-form-item label="开元余额:">
                    <font color="blue"><b>0元</b></font>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <el-form-item label="存款总数:">
                    <font color="blue"><b>{{ userInfo.ckzs2 }}元</b></font>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="彩金金额:">
                    <font color="blue"><b>{{ userInfo.cjzs }}元</b></font>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="反水金额:">
                    <font color="blue"><b>{{ userInfo.hszs }}元</b></font>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <el-form-item label="取款总数:">
                    <font color="blue"><b>{{ userInfo.qkzs2 }}元</b></font>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="体育有效投注额总额:">
                    <font color="red"><b>{{ userInfo.yxzs2 }}</b></font>元&nbsp;&nbsp;<font color=red><b>从最后一次入款算起</b></font>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="体育有效投注额总额:">
                    <font color="blue"><b>{{ userInfo.yxzs }}元</b></font>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <el-form-item label="体育未结算数:">
                    <font color="blue"><b>{{ userInfo.wjszs }}元</b></font>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="体育总帐输/赢:">
                    <font color="blue"><b>{{ userInfo.zzzs }}元</b></font>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="六合未结算:">
                    <font color="blue"><b>{{ userInfo.lhc_wjs }}元</b></font>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <el-form-item label="六合总帐输/赢:">
                    <font color="blue"><b>{{ userInfo.lhgkzs }}</b></font>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="新时时彩有效投注额总额:">
                    <font color="blue"><b>{{ userInfo.yxzs_lottery }}</b></font>元&nbsp;&nbsp;<font color=red>
                        <b>从最后一次入款算起</b>
                    </font>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="新时时彩未结算数:">
                    <font color="blue"><b>{{ userInfo.lottery_wjs }}元</b></font>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <el-form-item label="新时时彩总帐输/赢:">
                    <font color="blue"><b>{{ userInfo.lottery_win }}元</b></font>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="额度误差:">
                    <font color="blue"><b>{{ userInfo.edwc }}元</b></font>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="登录网址:">
                    <font color="blue"><b>{{ userInfo.Url }}</b></font>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <el-form-item label="登录IP:">
                    <font color="blue"><b>{{ userInfo.LoginIP }}</b></font>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="最后登录时间:">
                    <font color="blue"><b>{{ userInfo.LoginTime }}</b></font>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="最后在线时间:">
                    <font color="blue"><b>{{ userInfo.OnlineTime }}</b></font>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row style="margin-bottom: 10px;">
            <el-col :span="12">
            </el-col>
            <el-col :span="12">
                <el-button type="primary" @click="goRecordPage">额度检查</el-button>
                <el-button type="danger" @click="goRecordIPPage">操作日志</el-button>
            </el-col>
        </el-row>
    </div>
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
        const { dispatchUserInfo } = useCountUserStore();
        return {
            router,
            route,
            dispatchUserInfo
        }
    },
    data() {
        return {
            loading: false,
        }
    },
    computed: {
        userInfo: function () {
            const { getUserInfo } = useCountUserStore();
            return getUserInfo;
        }
    },
    methods: {
        goBeforePage: function () {
            this.router.go(-1);
        },
        goRecordPage: function () {
            this.router.push({ name: "agents.record", query: { user_id: this.userInfo.user_id } })
        },
        goRecordIPPage: function () {
            this.router.push({ name: "agents.record_ip", query: { username: this.userInfo.username } })
        }
    },
    async mounted() {
        this.loading = true;
        await this.dispatchUserInfo({ user_name: this.route.query.userName });
        this.loading = false;
    }
})
</script>
<style lang="scss" scoped></style>