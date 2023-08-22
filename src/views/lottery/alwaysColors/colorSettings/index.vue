<template>
  <div
    style="
      border: 1px solid #eee;
      padding: 0.75rem;
      margin-top: 0.75rem;
      text-align: center;
    "
  >
    <h3>时时彩设置</h3>
    <table
      border="0"
      align="center"
      cellspacing="1"
      cellpadding="5"
      width="100%"
      class="font12"
      style="margin-top: 5px"
      bgcolor="#798EB9"
      v-if="lotteryConfig != null"
    >
      <tr bgcolor="#FFFFFF">
        <td height="22" align="left">
          <el-checkbox label="维护重庆时时彩" v-model="lotteryConfig['cq']['close']">
          </el-checkbox>
          <el-checkbox label="停用重庆时时彩" v-model="lotteryConfig['cq']['hide']">
          </el-checkbox>
        </td>
        <td height="22" align="left">
          <el-form-item label="维护原因:">
            <el-input v-model="lotteryConfig['cq']['des']" />
          </el-form-item>
        </td>
      </tr>
      <tr bgcolor="#FFFFFF">
        <td height="22" align="left">
          <el-checkbox label="维护天津时时彩" v-model="lotteryConfig['tj']['close']">
          </el-checkbox>
          <el-checkbox label="停用天津时时彩" v-model="lotteryConfig['tj']['hide']">
          </el-checkbox>
        </td>
        <td height="22" align="left">
          <el-form-item label="维护原因:">
            <el-input v-model="lotteryConfig['tj']['des']" />
          </el-form-item>
        </td>
      </tr>
      <tr bgcolor="#FFFFFF">
        <td height="22" align="left">
          <el-checkbox label="维护新疆时时彩" v-model="lotteryConfig['jx']['close']">
          </el-checkbox>
          <el-checkbox label="停用新疆时时彩" v-model="lotteryConfig['jx']['hide']">
          </el-checkbox>
        </td>
        <td height="22" align="left">
          <el-form-item label="维护原因:">
            <el-input v-model="lotteryConfig['jx']['des']" />
          </el-form-item>
        </td>
      </tr>
      <tr bgcolor="#FFFFFF">
        <td height="22" align="left">
          <el-checkbox label="维护河内五分彩" v-model="lotteryConfig['ffc5']['close']">
          </el-checkbox>
          <el-checkbox label="停用河内五分彩" v-model="lotteryConfig['ffc5']['hide']">
          </el-checkbox>
        </td>
        <td height="22" align="left">
          <el-form-item label="维护原因:">
            <el-input v-model="lotteryConfig['ffc5']['des']" />
          </el-form-item>
        </td>
      </tr>
      <tr bgcolor="#FFFFFF">
        <td height="22" align="left">
          <el-checkbox label="维护腾讯时时彩" v-model="lotteryConfig['txssc']['close']">
          </el-checkbox>
          <el-checkbox label="停用腾讯时时彩" v-model="lotteryConfig['txssc']['hide']">
          </el-checkbox>
        </td>
        <td height="22" align="left">
          <el-form-item label="维护原因:">
            <el-input v-model="lotteryConfig['txssc']['des']" />
          </el-form-item>
        </td>
      </tr>
      <tr bgcolor="#FFFFFF">
        <td height="22" align="left">
          <el-checkbox label="维护台湾时时彩" v-model="lotteryConfig['twssc']['close']">
          </el-checkbox>
          <el-checkbox label="停用台湾时时彩" v-model="lotteryConfig['twssc']['hide']">
          </el-checkbox>
        </td>
        <td height="22" align="left">
          <el-form-item label="维护原因:">
            <el-input v-model="lotteryConfig['txssc']['des']" />
          </el-form-item>
        </td>
      </tr>
      <tr bgcolor="#FFFFFF">
        <td height="22" align="left">
          <el-checkbox label="维护重庆快乐十分" v-model="lotteryConfig['cqsf']['close']">
          </el-checkbox>
          <el-checkbox label="停用重庆快乐十分" v-model="lotteryConfig['cqsf']['hide']">
          </el-checkbox>
        </td>
        <td height="22" align="left">
          <el-form-item label="维护原因:">
            <el-input v-model="lotteryConfig['cqsf']['des']" />
          </el-form-item>
        </td>
      </tr>
      <tr bgcolor="#FFFFFF">
        <td height="22" align="left">
          <el-checkbox label="维护广东快乐十分" v-model="lotteryConfig['gdsf']['close']">
          </el-checkbox>
          <el-checkbox label="停用广东快乐十分" v-model="lotteryConfig['gdsf']['hide']">
          </el-checkbox>
        </td>
        <td height="22" align="left">
          <el-form-item label="维护原因:">
            <el-input v-model="lotteryConfig['gdsf']['des']" />
          </el-form-item>
        </td>
      </tr>
      <tr bgcolor="#FFFFFF">
        <td height="22" align="left">
          <el-checkbox label="维护天津快乐十分" v-model="lotteryConfig['tjsf']['close']">
          </el-checkbox>
          <el-checkbox label="停用天津快乐十分" v-model="lotteryConfig['tjsf']['hide']">
          </el-checkbox>
        </td>
        <td height="22" align="left">
          <el-form-item label="维护原因:">
            <el-input v-model="lotteryConfig['tjsf']['des']" />
          </el-form-item>
        </td>
      </tr>
      <tr bgcolor="#FFFFFF">
        <td height="22" align="left">
          <el-checkbox label="维护广西快乐十分" v-model="lotteryConfig['gxsf']['close']">
          </el-checkbox>
          <el-checkbox label="停用广西快乐十分" v-model="lotteryConfig['gxsf']['hide']">
          </el-checkbox>
        </td>
        <td height="22" align="left">
          <el-form-item label="维护原因:">
            <el-input v-model="lotteryConfig['gxsf']['des']" />
          </el-form-item>
        </td>
      </tr>
      <tr bgcolor="#FFFFFF">
        <td height="22" align="left">
          <el-checkbox label="维护福彩3D" v-model="lotteryConfig['d3']['close']">
          </el-checkbox>
          <el-checkbox label="停用福彩3D" v-model="lotteryConfig['d3']['hide']">
          </el-checkbox>
        </td>
        <td height="22" align="left">
          <el-form-item label="维护原因:">
            <el-input v-model="lotteryConfig['d3']['des']" />
          </el-form-item>
        </td>
      </tr>
      <tr bgcolor="#FFFFFF">
        <td height="22" align="left">
          <el-checkbox label="维护排列三" v-model="lotteryConfig['p3']['close']">
          </el-checkbox>
          <el-checkbox label="停用排列三" v-model="lotteryConfig['p3']['hide']">
          </el-checkbox>
        </td>
        <td height="22" align="left">
          <el-form-item label="维护原因:">
            <el-input v-model="lotteryConfig['p3']['des']" />
          </el-form-item>
        </td>
      </tr>
      <tr bgcolor="#FFFFFF">
        <td height="22" align="left">
          <el-checkbox label="维护上海时时乐" v-model="lotteryConfig['t3']['close']">
          </el-checkbox>
          <el-checkbox label="停用上海时时乐" v-model="lotteryConfig['t3']['hide']">
          </el-checkbox>
        </td>
        <td height="22" align="left">
          <el-form-item label="维护原因:">
            <el-input v-model="lotteryConfig['t3']['des']" />
          </el-form-item>
        </td>
      </tr>
      <tr bgcolor="#FFFFFF">
        <td height="22" align="left">
          <el-checkbox label="维护北京快乐8" v-model="lotteryConfig['kl8']['close']">
          </el-checkbox>
          <el-checkbox label="停用北京快乐8" v-model="lotteryConfig['kl8']['hide']">
          </el-checkbox>
        </td>
        <td height="22" align="left">
          <el-form-item label="维护原因:">
            <el-input v-model="lotteryConfig['kl8']['des']" />
          </el-form-item>
        </td>
      </tr>
      <tr bgcolor="#FFFFFF">
        <td height="22" align="left">
          <el-checkbox label="维护北京PK10" v-model="lotteryConfig['pk10']['close']">
          </el-checkbox>
          <el-checkbox label="停用北京PK10" v-model="lotteryConfig['pk10']['hide']">
          </el-checkbox>
        </td>
        <td height="22" align="left">
          <el-form-item label="维护原因:">
            <el-input v-model="lotteryConfig['pk10']['des']" />
          </el-form-item>
        </td>
      </tr>
      <tr bgcolor="#FFFFFF">
        <td height="22" align="left">
          <el-checkbox label="维护广东11选5" v-model="lotteryConfig['gd11']['close']">
          </el-checkbox>
          <el-checkbox label="停用广东11选5" v-model="lotteryConfig['gd11']['hide']">
          </el-checkbox>
        </td>
        <td height="22" align="left">
          <el-form-item label="维护原因:">
            <el-input v-model="lotteryConfig['gd11']['des']" />
          </el-form-item>
        </td>
      </tr>
      <tr bgcolor="#FFFFFF">
        <td height="22" align="left">
          <el-checkbox label="维护幸运飞艇" v-model="lotteryConfig['xyft']['close']">
          </el-checkbox>
          <el-checkbox label="停用幸运飞艇" v-model="lotteryConfig['xyft']['hide']">
          </el-checkbox>
        </td>
        <td height="22" align="left">
          <el-form-item label="维护原因:">
            <el-input v-model="lotteryConfig['xyft']['des']" />
          </el-form-item>
        </td>
      </tr>
      <tr bgcolor="#FFFFFF">
        <td height="22" align="left">
          <el-checkbox label="维护澳洲幸运5" v-model="lotteryConfig['azxy5']['close']">
          </el-checkbox>
          <el-checkbox label="停用澳洲幸运5" v-model="lotteryConfig['azxy5']['hide']">
          </el-checkbox>
        </td>
        <td height="22" align="left">
          <el-form-item label="维护原因:">
            <el-input v-model="lotteryConfig['azxy5']['des']" />
          </el-form-item>
        </td>
      </tr>
      <tr bgcolor="#FFFFFF">
        <td height="22" align="left">
          <el-checkbox label="维护澳洲幸运10" v-model="lotteryConfig['azxy10']['close']">
          </el-checkbox>
          <el-checkbox label="停用澳洲幸运10" v-model="lotteryConfig['azxy10']['hide']">
          </el-checkbox>
        </td>
        <td height="22" align="left">
          <el-form-item label="维护原因:">
            <el-input v-model="lotteryConfig['azxy10']['des']" />
          </el-form-item>
        </td>
      </tr>

      <tr bgcolor="#FFFFFF">
        <td height="22" align="left" colspan="2">
          <font size="4" color="red">
            温馨提示:停用彩种在前台不再展示,维护彩种在前台显示维护!
          </font>
        </td>
      </tr>

      <tr bgcolor="#FFFFFF">
        <td height="22" align="left">福彩3D期数校对:</td>
        <td height="22" align="left">
          <el-form-item label="开奖时间:">
            <el-date-picker type="date" v-model="lotteryConfig['d3']['ktime']" />
          </el-form-item>
          <el-form-item label="开奖期号:">
            <el-input v-model="lotteryConfig['d3']['knum']" />
            (例如:2021-01-01开的期数是2021001)
          </el-form-item>
        </td>
      </tr>

      <tr bgcolor="#FFFFFF">
        <td height="22" align="left">排列三期数校对:</td>
        <td height="22" align="left">
          <el-form-item label="开奖时间:">
            <el-date-picker type="date" v-model="lotteryConfig['p3']['ktime']" />
          </el-form-item>
          <el-form-item label="开奖期号:">
            <el-input v-model="lotteryConfig['p3']['knum']" />
            (例如:2021-01-01开的期数是2021001)
          </el-form-item>
        </td>
      </tr>

      <tr bgcolor="#FFFFFF">
        <td height="22" align="left">广西十分彩期数校对:</td>
        <td height="22" align="left">
          <el-form-item label="开奖时间:">
            <el-date-picker type="date" v-model="lotteryConfig['gxsf']['ktime']" />
          </el-form-item>
          <el-form-item label="开奖期号:">
            <el-input v-model="lotteryConfig['gxsf']['knum']" />
            (例如:2021-01-01开的期数是2021001)
          </el-form-item>
        </td>
      </tr>

      <tr bgcolor="#FFFFFF">
        <td height="22" align="left">北京快乐8期数校对:</td>
        <td height="22" align="left">
          <el-form-item label="开奖时间:">
            <el-date-picker type="date" v-model="lotteryConfig['kl8']['ktime']" />
          </el-form-item>
          <el-form-item label="开奖期号:">
            <el-input v-model="lotteryConfig['kl8']['knum']" />
            (例如:2021-01-01开的期数是2021001)
          </el-form-item>
        </td>
      </tr>

      <tr bgcolor="#FFFFFF">
        <td height="22" align="left">北京PK10期数校对:</td>
        <td height="22" align="left">
          <el-form-item label="开奖时间:">
            <el-date-picker type="date" v-model="lotteryConfig['pk10']['ktime']" />
          </el-form-item>
          <el-form-item label="开奖期号:">
            <el-input
              v-model="lotteryConfig['pk10']['knum']"
            />(例如:2020-01-01开的第一期是754648)
          </el-form-item>
        </td>
      </tr>

      <tr bgcolor="#FFFFFF">
        <td height="22" align="left">台灣時時彩期数校对:</td>
        <td height="22" align="left">
          <el-form-item label="开奖时间:">
            <el-date-picker type="date" v-model="lotteryConfig['twssc']['ktime']" />
          </el-form-item>
          <el-form-item label="开奖期号:">
            <el-input v-model="lotteryConfig['twssc']['knum']" />
            (例如:2021-01-01开的第一期是110000001)
          </el-form-item>
        </td>
      </tr>

      <tr bgcolor="#FFFFFF">
        <td height="22" align="left">澳洲幸运5期数校对:</td>
        <td height="22" align="left">
          <el-form-item label="开奖时间:">
            <el-date-picker type="date" v-model="lotteryConfig['azxy5']['ktime']" />
          </el-form-item>
          <el-form-item label="开奖期号:">
            <el-input v-model="lotteryConfig['azxy5']['knum']" />
            (例如:2021-01-01开的第一期是50750762)
          </el-form-item>
        </td>
      </tr>

      <tr bgcolor="#FFFFFF">
        <td height="22" align="left">澳洲幸运10期数校对:</td>
        <td height="22" align="left">
          <el-form-item label="开奖时间:">
            <el-date-picker type="date" v-model="lotteryConfig['azxy10']['ktime']" />
          </el-form-item>
          <el-form-item label="开奖期号:">
            <el-input
              v-model="lotteryConfig['azxy10']['knum']"
            />(例如:2021-01-01开的第一期是20759662)
          </el-form-item>
        </td>
      </tr>

      <tr>
        <td height="28" colspan="10" align="center" bgcolor="#FFFFFF">
          <el-button type="primary" @click="updateLotteryConfig">确认修改</el-button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import { lotteryConfigStore } from "@/pinia/modules/always_color/lottery_config.js";
import { ElLoading } from "element-plus";
import { ElNotification } from "element-plus";
import moment from "moment-timezone";
export default {
  setup() {
    const { dispatchGetLotteryConfig } = lotteryConfigStore();
    const { dispatchUpdateLotteryConfig } = lotteryConfigStore();
    return {
      dispatchGetLotteryConfig,
      dispatchUpdateLotteryConfig,
    }
  },
  data() {
    return {};
  },
  computed: {
    success: function () {
      const { getSuccess } = lotteryConfigStore();
      return getSuccess;
    },
    lotteryConfig: function () {
      const { getLotteryConfig } = lotteryConfigStore();
      if (getLotteryConfig == null) {
        return null;
      }
      getLotteryConfig["cq"]["close"] =
        getLotteryConfig["cq"]["close"] == 0 ? false : true;
      getLotteryConfig["cq"]["hide"] = getLotteryConfig["cq"]["hide"] == 0 ? false : true;
      getLotteryConfig["jx"]["close"] =
        getLotteryConfig["jx"]["close"] == 0 ? false : true;
      getLotteryConfig["jx"]["hide"] = getLotteryConfig["jx"]["hide"] == 0 ? false : true;
      getLotteryConfig["azxy5"]["close"] =
        getLotteryConfig["azxy5"]["close"] == 0 ? false : true;
      getLotteryConfig["azxy5"]["hide"] =
        getLotteryConfig["azxy5"]["hide"] == 0 ? false : true;
      getLotteryConfig["azxy10"]["close"] =
        getLotteryConfig["azxy10"]["close"] == 0 ? false : true;
      getLotteryConfig["azxy10"]["hide"] =
        getLotteryConfig["azxy10"]["hide"] == 0 ? false : true;
      getLotteryConfig["cqsf"]["close"] =
        getLotteryConfig["cqsf"]["close"] == 0 ? false : true;
      getLotteryConfig["cqsf"]["hide"] =
        getLotteryConfig["cqsf"]["hide"] == 0 ? false : true;
      getLotteryConfig["d3"]["close"] =
        getLotteryConfig["d3"]["close"] == 0 ? false : true;
      getLotteryConfig["d3"]["hide"] = getLotteryConfig["d3"]["hide"] == 0 ? false : true;
      getLotteryConfig["ffc5"]["close"] =
        getLotteryConfig["ffc5"]["close"] == 0 ? false : true;
      getLotteryConfig["ffc5"]["hide"] =
        getLotteryConfig["ffc5"]["hide"] == 0 ? false : true;
      getLotteryConfig["gd11"]["close"] =
        getLotteryConfig["gd11"]["close"] == 0 ? false : true;
      getLotteryConfig["gd11"]["hide"] =
        getLotteryConfig["gd11"]["hide"] == 0 ? false : true;
      getLotteryConfig["gdsf"]["close"] =
        getLotteryConfig["gdsf"]["close"] == 0 ? false : true;
      getLotteryConfig["gdsf"]["hide"] =
        getLotteryConfig["gdsf"]["hide"] == 0 ? false : true;
      getLotteryConfig["gxsf"]["close"] =
        getLotteryConfig["gxsf"]["close"] == 0 ? false : true;
      getLotteryConfig["gxsf"]["hide"] =
        getLotteryConfig["gxsf"]["hide"] == 0 ? false : true;
      getLotteryConfig["kl8"]["close"] =
        getLotteryConfig["kl8"]["close"] == 0 ? false : true;
      getLotteryConfig["kl8"]["hide"] =
        getLotteryConfig["kl8"]["hide"] == 0 ? false : true;
      getLotteryConfig["p3"]["close"] =
        getLotteryConfig["p3"]["close"] == 0 ? false : true;
      getLotteryConfig["p3"]["hide"] = getLotteryConfig["p3"]["hide"] == 0 ? false : true;
      getLotteryConfig["pk10"]["close"] =
        getLotteryConfig["pk10"]["close"] == 0 ? false : true;
      getLotteryConfig["pk10"]["hide"] =
        getLotteryConfig["pk10"]["hide"] == 0 ? false : true;
      getLotteryConfig["t3"]["close"] =
        getLotteryConfig["t3"]["close"] == 0 ? false : true;
      getLotteryConfig["t3"]["hide"] = getLotteryConfig["t3"]["hide"] == 0 ? false : true;
      getLotteryConfig["tj"]["close"] =
        getLotteryConfig["tj"]["close"] == 0 ? false : true;
      getLotteryConfig["tj"]["hide"] = getLotteryConfig["tj"]["hide"] == 0 ? false : true;
      getLotteryConfig["tjsf"]["close"] =
        getLotteryConfig["tjsf"]["close"] == 0 ? false : true;
      getLotteryConfig["tjsf"]["hide"] =
        getLotteryConfig["tjsf"]["hide"] == 0 ? false : true;
      getLotteryConfig["twssc"]["close"] =
        getLotteryConfig["twssc"]["close"] == 0 ? false : true;
      getLotteryConfig["twssc"]["hide"] =
        getLotteryConfig["twssc"]["hide"] == 0 ? false : true;
      getLotteryConfig["txssc"]["close"] =
        getLotteryConfig["txssc"]["close"] == 0 ? false : true;
      getLotteryConfig["txssc"]["hide"] =
        getLotteryConfig["txssc"]["hide"] == 0 ? false : true;
      getLotteryConfig["xyft"]["close"] =
        getLotteryConfig["xyft"]["close"] == 0 ? false : true;
      getLotteryConfig["xyft"]["hide"] =
        getLotteryConfig["xyft"]["hide"] == 0 ? false : true;
      return getLotteryConfig;
    },
  },
  methods: {
    updateLotteryConfig: async function () {
      let tempLotteryConfig = {
        cq: {},
        jx: {},
        azxy5: {},
        azxy10: {},
        cqsf: {},
        d3: {},
        ffc5: {},
        gd11: {},
        gdsf: {},
        gxsf: {},
        kl8: {},
        p3: {},
        pk10: {},
        t3: {},
        tj: {},
        tjsf: {},
        twssc: {},
        txssc: {},
        xyft: {},
      }
      tempLotteryConfig["cq"]["close"] = this.lotteryConfig["cq"]["close"] ? 1 : 0;
      tempLotteryConfig["cq"]["hide"] = this.lotteryConfig["cq"]["hide"] ? 1 : 0;
      tempLotteryConfig["cq"]["des"] = this.lotteryConfig["cq"]["des"];
      tempLotteryConfig["jx"]["close"] = this.lotteryConfig["jx"]["close"] ? 1 : 0;
      tempLotteryConfig["jx"]["hide"] = this.lotteryConfig["jx"]["hide"] ? 1 : 0;
      tempLotteryConfig["jx"]["des"] = this.lotteryConfig["jx"]["des"];
      tempLotteryConfig["azxy5"]["close"] = this.lotteryConfig["azxy5"]["close"] ? 1 : 0;
      tempLotteryConfig["azxy5"]["hide"] = this.lotteryConfig["azxy5"]["hide"] ? 1 : 0;
      tempLotteryConfig["azxy5"]["des"] = this.lotteryConfig["azxy5"]["des"];
      tempLotteryConfig["azxy10"]["close"] = this.lotteryConfig["azxy10"]["close"]
        ? 1
        : 0;
      tempLotteryConfig["azxy10"]["hide"] = this.lotteryConfig["azxy10"]["hide"] ? 1 : 0;
      tempLotteryConfig["azxy10"]["des"] = this.lotteryConfig["azxy10"]["des"];
      tempLotteryConfig["cqsf"]["close"] = this.lotteryConfig["cqsf"]["close"] ? 1 : 0;
      tempLotteryConfig["cqsf"]["hide"] = this.lotteryConfig["cqsf"]["hide"] ? 1 : 0;
      tempLotteryConfig["cqsf"]["des"] = this.lotteryConfig["cqsf"]["des"];
      tempLotteryConfig["d3"]["close"] = this.lotteryConfig["d3"]["close"] ? 1 : 0;
      tempLotteryConfig["d3"]["hide"] = this.lotteryConfig["d3"]["hide"] ? 1 : 0;
      tempLotteryConfig["d3"]["des"] = this.lotteryConfig["d3"]["des"];
      tempLotteryConfig["ffc5"]["close"] = this.lotteryConfig["ffc5"]["close"] ? 1 : 0;
      tempLotteryConfig["ffc5"]["hide"] = this.lotteryConfig["ffc5"]["hide"] ? 1 : 0;
      tempLotteryConfig["ffc5"]["des"] = this.lotteryConfig["ffc5"]["des"];
      tempLotteryConfig["gd11"]["close"] = this.lotteryConfig["gd11"]["close"] ? 1 : 0;
      tempLotteryConfig["gd11"]["hide"] = this.lotteryConfig["gd11"]["hide"] ? 1 : 0;
      tempLotteryConfig["gd11"]["des"] = this.lotteryConfig["gd11"]["des"];
      tempLotteryConfig["gdsf"]["close"] = this.lotteryConfig["gdsf"]["close"] ? 1 : 0;
      tempLotteryConfig["gdsf"]["hide"] = this.lotteryConfig["gdsf"]["hide"] ? 1 : 0;
      tempLotteryConfig["gdsf"]["des"] = this.lotteryConfig["gdsf"]["des"];
      tempLotteryConfig["gxsf"]["close"] = this.lotteryConfig["gxsf"]["close"] ? 1 : 0;
      tempLotteryConfig["gxsf"]["hide"] = this.lotteryConfig["gxsf"]["hide"] ? 1 : 0;
      tempLotteryConfig["gxsf"]["des"] = this.lotteryConfig["gxsf"]["des"];
      tempLotteryConfig["kl8"]["close"] = this.lotteryConfig["kl8"]["close"] ? 1 : 0;
      tempLotteryConfig["kl8"]["hide"] = this.lotteryConfig["kl8"]["hide"] ? 1 : 0;
      tempLotteryConfig["kl8"]["des"] = this.lotteryConfig["kl8"]["des"];
      tempLotteryConfig["p3"]["close"] = this.lotteryConfig["p3"]["close"] ? 1 : 0;
      tempLotteryConfig["p3"]["hide"] = this.lotteryConfig["p3"]["hide"] ? 1 : 0;
      tempLotteryConfig["p3"]["des"] = this.lotteryConfig["p3"]["des"];
      tempLotteryConfig["pk10"]["close"] = this.lotteryConfig["pk10"]["close"] ? 1 : 0;
      tempLotteryConfig["pk10"]["hide"] = this.lotteryConfig["pk10"]["hide"] ? 1 : 0;
      tempLotteryConfig["pk10"]["des"] = this.lotteryConfig["pk10"]["des"];
      tempLotteryConfig["t3"]["close"] = this.lotteryConfig["t3"]["close"] ? 1 : 0;
      tempLotteryConfig["t3"]["hide"] = this.lotteryConfig["t3"]["hide"] ? 1 : 0;
      tempLotteryConfig["t3"]["des"] = this.lotteryConfig["t3"]["des"];
      tempLotteryConfig["tj"]["close"] = this.lotteryConfig["tj"]["close"] ? 1 : 0;
      tempLotteryConfig["tj"]["hide"] = this.lotteryConfig["tj"]["hide"] ? 1 : 0;
      tempLotteryConfig["tj"]["des"] = this.lotteryConfig["tj"]["des"];
      tempLotteryConfig["tjsf"]["close"] = this.lotteryConfig["tjsf"]["close"] ? 1 : 0;
      tempLotteryConfig["tjsf"]["hide"] = this.lotteryConfig["tjsf"]["hide"] ? 1 : 0;
      tempLotteryConfig["tjsf"]["des"] = this.lotteryConfig["tjsf"]["des"];
      tempLotteryConfig["twssc"]["close"] = this.lotteryConfig["twssc"]["close"] ? 1 : 0;
      tempLotteryConfig["twssc"]["hide"] = this.lotteryConfig["twssc"]["hide"] ? 1 : 0;
      tempLotteryConfig["twssc"]["des"] = this.lotteryConfig["twssc"]["des"];
      tempLotteryConfig["txssc"]["close"] = this.lotteryConfig["txssc"]["close"] ? 1 : 0;
      tempLotteryConfig["txssc"]["hide"] = this.lotteryConfig["txssc"]["hide"] ? 1 : 0;
      tempLotteryConfig["txssc"]["des"] = this.lotteryConfig["txssc"]["des"];
      tempLotteryConfig["xyft"]["close"] = this.lotteryConfig["xyft"]["close"] ? 1 : 0;
      tempLotteryConfig["xyft"]["hide"] = this.lotteryConfig["xyft"]["hide"] ? 1 : 0;
      tempLotteryConfig["xyft"]["des"] = this.lotteryConfig["xyft"]["des"];
      tempLotteryConfig["d3"]["ktime"] = moment(this.lotteryConfig["d3"]["ktime"]).format(
        "YYYY-MM-DD"
      );
      tempLotteryConfig["d3"]["knum"] = this.lotteryConfig["d3"]["knum"];
      tempLotteryConfig["p3"]["ktime"] = moment(this.lotteryConfig["p3"]["ktime"]).format(
        "YYYY-MM-DD"
      );
      tempLotteryConfig["p3"]["knum"] = this.lotteryConfig["p3"]["knum"];
      tempLotteryConfig["gxsf"]["ktime"] = moment(
        this.lotteryConfig["gxsf"]["ktime"]
      ).format("YYYY-MM-DD");
      tempLotteryConfig["gxsf"]["knum"] = this.lotteryConfig["gxsf"]["knum"];
      tempLotteryConfig["kl8"]["ktime"] = moment(
        this.lotteryConfig["kl8"]["ktime"]
      ).format("YYYY-MM-DD");
      tempLotteryConfig["kl8"]["knum"] = this.lotteryConfig["kl8"]["knum"];
      tempLotteryConfig["pk10"]["ktime"] = moment(
        this.lotteryConfig["pk10"]["ktime"]
      ).format("YYYY-MM-DD");
      tempLotteryConfig["pk10"]["knum"] = this.lotteryConfig["pk10"]["knum"];
      tempLotteryConfig["twssc"]["ktime"] = moment(
        this.lotteryConfig["twssc"]["ktime"]
      ).format("YYYY-MM-DD");
      tempLotteryConfig["twssc"]["knum"] = this.lotteryConfig["twssc"]["knum"];
      tempLotteryConfig["azxy5"]["ktime"] = moment(
        this.lotteryConfig["azxy5"]["ktime"]
      ).format("YYYY-MM-DD");
      tempLotteryConfig["azxy5"]["knum"] = this.lotteryConfig["azxy5"]["knum"];
      tempLotteryConfig["azxy10"]["ktime"] = moment(
        this.lotteryConfig["azxy10"]["ktime"]
      ).format("YYYY-MM-DD");
      tempLotteryConfig["azxy10"]["knum"] = this.lotteryConfig["azxy10"]["knum"];
      console.log(tempLotteryConfig);
      const loading = ElLoading.service({
        lock: true,
        text: "加载中...",
        background: "rgba(0, 0, 0, 0.7)",
      });

      await this.dispatchUpdateLotteryConfig({
        data: JSON.stringify(tempLotteryConfig),
      });
      loading.close();
      this.successResult();
    },
    successResult: function () {
      if (this.success) {
        ElNotification({
          title: "成功",
          message: "操作成功。",
          type: "success",
        });
      } else {
        ElNotification({
          title: "错误",
          message: "操作失败。",
          type: "error",
        });
      }
    },
  },
  async mounted() {
    const loading = ElLoading.service({
      lock: true,
      text: "加载中...",
      background: "rgba(0, 0, 0, 0.7)",
    });
    await this.dispatchGetLotteryConfig({});
    loading.close();
  },
};
</script>
<style lang="scss" scoped></style>
