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
                    <font color="blue"><b>{{ userInfo.money }}元</b></font>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="AG下注金额:">
                    <font color="blue" @click="agDialogShow" style="cursor: pointer;"><b>{{ userInfo.AG_Money }}元</b></font>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="BBIN下注金额:">
                    <font color="blue" @click="bbinDialogShow" style="cursor: pointer;"><b>{{ userInfo.BBIN_Money }}元</b>
                    </font>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6">
                <el-form-item label="OG下注金额:">
                    <font color="blue" @click="ogDialogShow" style="cursor: pointer;"><b>{{ userInfo.OG_Money }}元</b></font>
                </el-form-item>
            </el-col>
            <el-col :span="6">
                <el-form-item label="MG下注金额:">
                    <font color="blue" @click="mgDialogShow" style="cursor: pointer;"><b>{{ userInfo.MG_Money }}元</b></font>
                </el-form-item>
            </el-col>
            <el-col :span="6">
                <el-form-item label="PT下注金额:">
                    <font color="blue" @click="ptDialogShow" style="cursor: pointer;"><b>{{ userInfo.PT_Money }}元</b></font>
                </el-form-item>
            </el-col>
            <el-col :span="6">
                <el-form-item label="开元下注金额:">
                    <font color="blue" @click="kyDialogShow" style="cursor: pointer;"><b>{{ userInfo.KY_Money }}元</b></font>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6">
                <el-form-item label="香港六合彩下注金额:">
                    <font color="blue" @click="sixMarkDialogShow" style="cursor: pointer;"><b>{{
                        userInfo.hongKong_six_mark_bet_money }}元</b></font>
                </el-form-item>
            </el-col>
            <el-col :span="6">
                <el-form-item label="澳门六合彩下注金额:">
                    <font color="blue" @click="macaoSixMarkDialogShow" style="cursor: pointer;"><b>{{
                        userInfo.macao_six_mark_bet_money }}元</b></font>
                </el-form-item>
            </el-col>
            <el-col :span="6">
                <el-form-item label="其他彩票下注金额:">
                    <font color="blue" @click="otherLotteryDialogShow" style="cursor: pointer;"><b>{{
                        userInfo.other_lottery_bet_money
                    }}元</b></font>
                </el-form-item>
            </el-col>
            <el-col :span="6">
                <el-form-item label="体育下注金额:">
                    <font color="blue" @click="sportDialogShow" style="cursor: pointer;"><b>{{ userInfo.sport_bet_money
                    }}元</b></font>
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
                    <font color="blue"><b>{{ userInfo.lottery_win.toFixed(2) }}元</b></font>
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
    <el-dialog v-model="ogTransactionDialogVisible" style="width: 90%">
        <el-table :data="queryList" v-loading="loading" style="width: 100%;" border header-align="center" stripe>
            <el-table-column type="index" :index="indexMethod" label="编号" align="center" />
            <el-table-column property="playerName" label="真人帐号" align="center" />
            <el-table-column label="投注时间" width="180" align="center">
                <template #default="scope">
                    <div style="display: flex; align-items: center">
                        <el-icon>
                            <timer />
                        </el-icon>
                        <span style="margin-left: 10px">{{ scope.row.betTime }}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="派彩时间" width="180" align="center">
                <template #default="scope">
                    <div style="display: flex; align-items: center">
                        <el-icon>
                            <timer />
                        </el-icon>
                        <span style="margin-left: 10px">{{ scope.row.recalcuTime }}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column property="GameName" label="投注类型" align="center" />
            <el-table-column property="playType" label="投注内容" align="center" />
            <el-table-column label="返水状态" align="center">
                <template #default="scope">
                    <font color=blue v-if="scope.row.isFS == 1">已返水</font>
                    <font color=red v-else>未返水</font>
                </template>
            </el-table-column>
            <el-table-column property="betAmount" label="投注金额" align="center" />
            <el-table-column property="validBetAmount" label="有效投注额" align="center" />
            <el-table-column property="netAmount" label="结果" align="center" />
            <el-table-column property="billNo" label="定单号" align="center" />
            <el-table-column property="gameCode" label="游戏局号" align="center" />
            <el-table-column property="tableCode" label="桌号" align="center" />
            <el-table-column property="platformType" label="平台" align="center" />
            <el-table-column property="loginIP" label="玩家IP" align="center" />
        </el-table>
    </el-dialog>
    <el-dialog v-model="kyTransactionDialogVisible" style="width: 90%">
        <el-table :data="kyQueryList" v-loading="loading" style="width: 100%;" border header-align="center" stripe>
            <el-table-column type="index" :index="indexMethod" label="编号" align="center" />
            <el-table-column property="Accounts" label="真人帐号" align="center" />
            <el-table-column label="开始时间" width="180" align="center">
                <template #default="scope">
                    <div style="display: flex; align-items: center">
                        <el-icon>
                            <timer />
                        </el-icon>
                        <span style="margin-left: 10px">{{ scope.row.GameStartTime }}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="结束时间" width="180" align="center">
                <template #default="scope">
                    <div style="display: flex; align-items: center">
                        <el-icon>
                            <timer />
                        </el-icon>
                        <span style="margin-left: 10px">{{ scope.row.GameEndTime }}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column property="GameName" label="游戏内容" align="center" />
            <el-table-column label="返水状态" align="center">
                <template #default="scope">
                    <font color=blue v-if="scope.row.isFS == 1">已返水</font>
                    <font color=red v-else>未返水</font>
                </template>
            </el-table-column>
            <el-table-column property="CellScore" label="投注金额" align="center" />
            <el-table-column property="CellScore" label="AllBet" align="center" />
            <el-table-column property="Profit" label="盈利" align="center" />
            <el-table-column property="Revenue" label="抽水" align="center" />
            <el-table-column property="GameID" label="游戏局号" align="center" />
            <el-table-column property="UserCount" label="人数" align="center" />
            <el-table-column property="ServerID" label="房间" align="center" />
            <el-table-column property="TableID" label="桌号" align="center" />
            <el-table-column property="ChairID" label="座位" align="center" />
        </el-table>
    </el-dialog>
    <el-dialog v-model="sportTransactionVisible" style="width: 90%">
        <el-table :data="searchBettingData" style="width: 100%" border header-align="center" stripe v-loading="loading">
            <el-table-column property="userName" label="用户名称" align="center">
                <template #default="scope">
                    <div style="cursor: pointer">
                        {{ scope.row.userName }}<br />
                        <font color="#cc0000">
                            {{ scope.row.OpenType }}&nbsp;&nbsp;{{ scope.row.TurnRate }}
                        </font>
                    </div>
                </template>
            </el-table-column>
            <el-table-column property="minutes" label="分钟数" align="center">
                <template #default="scope">
                    <div v-html="scope.row.minutes"></div>
                </template>
            </el-table-column>
            <el-table-column label="投注时间" width="130" align="center">
                <template #default="scope">
                    <div style="display: flex; align-items: center">
                        <el-icon>
                            <timer />
                        </el-icon>
                        <span style="margin-left: 10px" v-html="scope.row.bettingTime"></span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="开始时间" width="130" align="center">
                <template #default="scope">
                    <div style="display: flex; align-items: center">
                        <el-icon>
                            <timer />
                        </el-icon>
                        <span style="margin-left: 10px">{{ scope.row.startingTime }}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column property="gameType" label="球赛种类" align="center">
                <template #default="scope">
                    <div v-html="scope.row.gameType"></div>
                    <div style="color: blue; font-weight: bold">{{ scope.row.OrderID }}</div>
                </template>
            </el-table-column>
            <el-table-column property="content" label="內容" align="center" width="200">
                <template #default="scope">
                    <div v-html="scope.row.content"></div>
                </template>
            </el-table-column>
            <el-table-column property="state" label="状态" align="center">
                <template #default="scope">
                    <div v-html="scope.row.state" @click="toOperation(scope.row)" style="cursor: pointer;"></div>
                </template>
            </el-table-column>
            <el-table-column property="betAmount" label="投注金额" align="center">
                <template #default="scope">
                    <div v-html="scope.row.betAmount"></div>
                </template>
            </el-table-column>
            <el-table-column property="winableAmount" label="可赢金额" align="center" />
            <el-table-column property="memberResult" label="会员结果" align="center">
                <template #default="scope">
                    <div v-html="scope.row.memberResult"></div>
                </template>
            </el-table-column>
            <el-table-column property="betSlip" label="注单" align="center">
                <template #default="scope">
                    <div v-html="scope.row.betSlip"></div>
                </template>
            </el-table-column>
        </el-table>
    </el-dialog>
    <el-dialog v-model="sixMarkTransactionVisible" style="width: 90%">
        <table width="100%" border="0" cellpadding="2" cellspacing="1" style="border-color: #f9f9f9;"
            bordercolordark="#f9f9f9" bgcolor="#cccccc">
            <tr class="tbtitle">
                <td width="30" align="center" nowrap="nowrap"><span class="STYLE2">序号</span></td>
                <td width="60" height="28" align="center" nowrap="nowrap"><span class="STYLE2"> 下注单号 </span></td>
                <td width="80" align="center" nowrap="nowrap"><span class="STYLE2">下注时间</span></td>
                <td width="80" align="center" nowrap="nowrap"><span class="STYLE2">期数</span></td>
                <td height="28" align="center" nowrap="nowrap"><span class="STYLE2">内容</span></td>
                <td align="center" nowrap="nowrap"><span class="STYLE2">赔率</span></td>
                <td width="60" align="center" nowrap="nowrap"><span class="STYLE2">金额</span></td>
                <td width="60" align="center" nowrap="nowrap"><span class="STYLE2">佣金</span></td>
            </tr>

            <tr :bgcolor="[item.bm === 1 ? '#FFFF99' : 'FFFFF4']" v-for="(item, index) in  subBillList " :key="index">
                <td height="25" align="center" nowrap="nowrap">
                    {{ index + 1 }}
                </td>
                <td align="center" nowrap="nowrap">
                    {{ item.num }}
                </td>
                <td align="center" nowrap="nowrap">
                    {{ item.adddate }}
                </td>
                <td align="center" nowrap="nowrap">
                    {{ item.kithe }}期
                </td>
                <td align="center" nowrap="nowrap">
                    <div v-html="item.class4"></div>
                </td>
                <td align="center" nowrap="nowrap">
                    {{ item.rate }}
                </td>
                <td align="center" nowrap="nowrap">
                    {{ item.sum_m }}
                </td>
                <td align="center" nowrap="nowrap">
                    <span v-if="item.bm == 2">0</span>
                    <span v-else>
                        {{ item.sum_m * Math.abs(item.user_ds) / 100 }}
                    </span>
                </td>
            </tr>
        </table>
    </el-dialog>
    <el-dialog v-model="macaoSixMarkBetSlipVisible" style="width: 90%">
        <table width="100%" border="0" cellpadding="2" cellspacing="1" style="border-color: #f9f9f9;"
            bordercolordark="#f9f9f9" bgcolor="#cccccc">
            <tr class="tbtitle">
                <td width="30" align="center" nowrap="nowrap"><span class="STYLE2">序号</span></td>
                <td width="60" height="28" align="center" nowrap="nowrap"><span class="STYLE2"> 下注单号 </span></td>
                <td width="80" align="center" nowrap="nowrap"><span class="STYLE2">下注时间</span></td>
                <td width="80" align="center" nowrap="nowrap"><span class="STYLE2">期数</span></td>
                <td height="28" align="center" nowrap="nowrap"><span class="STYLE2">内容</span></td>
                <td align="center" nowrap="nowrap"><span class="STYLE2">赔率</span></td>
                <td width="60" align="center" nowrap="nowrap"><span class="STYLE2">金额</span></td>
                <td width="60" align="center" nowrap="nowrap"><span class="STYLE2">佣金</span></td>
            </tr>

            <tr :bgcolor="[item.bm === 1 ? '#FFFF99' : 'FFFFF4']" v-for="(item, index) in  macaoSubBillList " :key="index">
                <td height="25" align="center" nowrap="nowrap">
                    {{ index + 1 }}
                </td>
                <td align="center" nowrap="nowrap">
                    {{ item.num }}
                </td>
                <td align="center" nowrap="nowrap">
                    {{ item.adddate }}
                </td>
                <td align="center" nowrap="nowrap">
                    {{ item.kithe }}期
                </td>
                <td align="center" nowrap="nowrap">
                    <div v-html="item.class4"></div>
                </td>
                <td align="center" nowrap="nowrap">
                    {{ item.rate }}
                </td>
                <td align="center" nowrap="nowrap">
                    {{ item.sum_m }}
                </td>
                <td align="center" nowrap="nowrap">
                    <span v-if="item.bm == 2">0</span>
                    <span v-else>
                        {{ item.sum_m * Math.abs(item.user_ds) / 100 }}
                    </span>
                </td>
            </tr>
        </table>
    </el-dialog>
    <el-dialog v-model="otherLotteryDialogVisible" style="width: 90%">
        <el-table :data="detailLotteryList" v-loading="loading" style="width: 100%" border header-align="center" stripe>
            <el-table-column property="order_sub_num" label="订单号" align="center" width="180px" />
            <el-table-column property="lottery_name" label="彩票类别" align="center" />
            <el-table-column property="qishu" label="彩票期号" align="center" />
            <el-table-column property="rtype_str" label="投注玩法" align="center" />
            <el-table-column property="content_name" label="投注内容" align="center" />
            <el-table-column property="bet_money_one" label="投注金额" align="center" />
            <el-table-column property="fs" label="反水" align="center" />
            <el-table-column property="bet_rate_one" label="赔率" align="center" />
            <el-table-column property="win_sub" label="可赢金额" align="center" />
            <el-table-column property="money_result" label="会员结果" align="center" />
            <el-table-column label="投注时间" width="180" align="center">
                <template #default="scope">
                    <div style="display: flex; align-items: center">
                        <el-icon>
                            <timer />
                        </el-icon>
                        <span style="margin-left: 10px">{{ scope.row.bet_time }}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column property="username" label="投注账号" align="center" />
            <el-table-column label="状态" align="center">
                <template #default="scope">
                    <div v-if="scope.row.status == 0">
                        <font color="#0000FF">未结算</font>
                    </div>
                    <div v-if="scope.row.status == 1">
                        <font color="#FF0000">已结算</font>
                    </div>
                    <div v-if="scope.row.status == 2">
                        <font color="#FF0000">已重算</font>
                    </div>
                    <div v-if="scope.row.status == 3">
                        <font color="#FFcccc">作废</font>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </el-dialog>
</template>
<script>
import { defineComponent } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useCountUserStore } from "@/pinia/modules/count_user";
import { humanManagementStore } from "@/pinia/modules/human_management.js";
import { reportStore } from "@/pinia/modules/mark_six/report.js";
import { macaoReportStore } from "@/pinia/modules/macao_six_mark/report.js";
import { manageHomeStore } from "@/pinia/modules/always_color/manage_home.js";
import {
    GetItems,
} from "@/api/sports/search-betting";
import moment from "moment-timezone";

export default defineComponent({
    name: 'CountUser',
    setup() {
        const router = useRouter()
        const route = useRoute();
        const { dispatchUserInfo } = useCountUserStore();
        const { dispatchQuery, dispatchQueryKy } = humanManagementStore();
        const { dispatchSubBill } = reportStore();
        const { dispatchMacaoSubBill } = macaoReportStore();
        const { dispatchDetailLottery } = manageHomeStore();
        return {
            router,
            route,
            dispatchUserInfo,
            dispatchQuery,
            dispatchQueryKy,
            dispatchSubBill,
            dispatchMacaoSubBill,
            dispatchDetailLottery
        }
    },
    data() {
        return {
            loading: false,
            ogTransactionDialogVisible: false,
            agTransactionDialogVisible: false,
            kyTransactionDialogVisible: false,
            sportTransactionVisible: false,
            sixMarkTransactionVisible: false,
            macaoSixMarkBetSlipVisible: false,
            otherLotteryDialogVisible: false,
            formData: {
                date: "",
                user: "",
                player_name: '',
                platformType: '',
                type: '',
                page_no: 1,
            },
            searchBettingData: [
            ],
        }
    },
    computed: {
        userInfo: function () {
            const { getUserInfo } = useCountUserStore();
            return getUserInfo;
        },
        queryList: function () {
            const { getQueryList } = humanManagementStore();
            return getQueryList;
        },
        kyQueryList: function () {
            const { getQueryKyList } = humanManagementStore();
            return getQueryKyList;
        },
        subBillList: function () {
            const { getSubBillList } = reportStore();
            return getSubBillList;
        },
        macaoSubBillList: function () {
            const { getSubBillList } = macaoReportStore();
            return getSubBillList;
        },
        detailLotteryList: function () {
            const { getDetailLotteryList } = manageHomeStore();
            return getDetailLotteryList;
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
        },
        ogDialogShow: async function () {
            this.loading = true;
            this.ogTransactionDialogVisible = true;
            this.formData.platformType = "OG";
            this.formData.player_name = this.userInfo.OG_User;
            await this.dispatchQuery(this.formData);
            this.loading = false;
        },
        agDialogShow: async function () {
            this.loading = true;
            this.ogTransactionDialogVisible = true;
            this.formData.platformType = "AGIN";
            this.formData.player_name = this.userInfo.AG_User;
            await this.dispatchQuery(this.formData);
            this.loading = false;
        },
        bbinDialogShow: async function () {
            this.loading = true;
            this.ogTransactionDialogVisible = true;
            this.formData.platformType = "BBIN";
            this.formData.player_name = this.userInfo.BBIN_User;
            await this.dispatchQuery(this.formData);
            this.loading = false;
        },
        mgDialogShow: async function () {
            this.loading = true;
            this.ogTransactionDialogVisible = true;
            this.formData.platformType = "MG";
            this.formData.player_name = this.userInfo.MG_User;
            await this.dispatchQuery(this.formData);
            this.loading = false;
        },
        ptDialogShow: async function () {
            this.loading = true;
            this.ogTransactionDialogVisible = true;
            this.formData.platformType = "PT";
            this.formData.player_name = this.userInfo.PT_User;
            await this.dispatchQuery(this.formData);
            this.loading = false;
        },
        kyDialogShow: async function () {
            this.loading = true;
            this.kyTransactionDialogVisible = true;
            this.formData.player_name = this.userInfo.KY_User;
            await this.dispatchQueryKy(this.formData);
            this.loading = false;
        },
        sportDialogShow: function () {
            this.loading = true;
            this.sportTransactionVisible = true;
            this.getItems();
        },
        getItems() {
            GetItems({
                user_name: this.formData.user
            })
                .then((res) => {
                    this.searchBettingData = [...res.data];
                    this.loading = false
                })
                .catch((err) => {
                    this.loading = false;
                });
        },
        sixMarkDialogShow: async function () {
            this.sixMarkTransactionVisible = true;
            await this.dispatchSubBill({ period: "count_user", user_name: this.formData.user })
        },
        macaoSixMarkDialogShow: async function () {
            this.macaoSixMarkBetSlipVisible = true;
            await this.dispatchMacaoSubBill({ period: "count_user", user_name: this.formData.user })
        },
        otherLotteryDialogShow: async function () {
            this.otherLotteryDialogVisible = true;
            let formData = {
                user_group: "sniper",
            }
            await this.dispatchDetailLottery(formData)
        }
    },
    async mounted() {
        this.loading = true;
        await this.dispatchUserInfo({ user_name: this.route.query.userName });
        this.formData.user = this.route.query.userName;
        this.loading = false;
        console.log(this.loading);
    }
})
</script>
<style lang="scss" scoped>
.tbtitle {
    background: #0077cc;
    color: #ffffff;
}

.red {
    color: red
}

.black {
    color: black
}
</style>