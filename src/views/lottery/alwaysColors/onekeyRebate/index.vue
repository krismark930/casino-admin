<template>
  <div style="border: 1px solid #eee; padding: 0.75rem; margin-top: 1rem; text-align: center;">
    <el-form-item label="">
      <el-checkbox-group v-model="form.g_type">
        <el-checkbox label="3D彩" name="D3" />
        <el-checkbox label="排列3" name="P3" />
        <el-checkbox label="上海时时乐" name="T3" />
        <el-checkbox label="重庆时时彩" name="CQ" />
        <el-checkbox label="天津时时彩" name="TJ" />
        <el-checkbox label="新疆时时彩" name="JX" />
        <el-checkbox label="广东十分彩" name="GDSF" />
        <el-checkbox label="广西十分彩" name="GXSF" />
        <el-checkbox label="天津十分彩" name="TJSF" />
        <el-checkbox label="重庆十分彩" name="CQSF" />
        <el-checkbox label="广东11选5" name="GD11" />
        <el-checkbox label="北京赛事" name="BJPK" />
        <el-checkbox label="北京快乐8" name="BJKN" />
        <el-checkbox label="幸运飞艇" name="XYFT" />
        <el-checkbox label="5分彩" name="FFC5" />
        <el-checkbox label="腾讯时时彩" name="TXSSC" />
        <el-checkbox label="台湾时时彩" name="TWSSC" />
        <el-checkbox label="澳洲幸运5" name="AZXY5" />
        <el-checkbox label="澳洲幸运10" name="AZXY10" />
      </el-checkbox-group>
    </el-form-item>
    <el-row>
      <el-col :span="12">
        <el-form-item label="开始日期：">
          <el-date-picker type="date" v-model="form.s_time" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="结束日期：">
          <el-date-picker type="date" v-model="form.e_time" />
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item label="排除会员：">
      <el-input v-model="form.user_group" />
    </el-form-item>
    <el-form-item style="float: right;">
      <el-button type="primary" @click="submit">开始反水</el-button>
    </el-form-item>
    <div style="text: center;">
      注：不自动反水的会员请填到排除会员，用半角逗号,隔开
    </div>
    <div style="text: center;">
      一键返水只适用于关闭彩票自动反水的注单
    </div>
  </div>
</template>
<script>
import moment from 'moment-timezone';
import { ElNotification } from "element-plus";
import { ElLoading } from "element-plus";
import { lotteryConfigStore } from "@/pinia/modules/always_color/lottery_config.js";
export default {
  setup() {
    const {dispatchStartDiscount} = lotteryConfigStore();
    return {
      dispatchStartDiscount
    }
  },
  data() {
    return {
      form: {
        g_type: [
          "3D彩",
          "排列3",
          "上海时时乐",
          "重庆时时彩",
          "天津时时彩",
          "新疆时时彩",
          "广东十分彩",
          "广西十分彩",
          "天津十分彩",
          "重庆十分彩",
          "广东11选5",
          "北京赛事",
          "北京快乐8",
          "幸运飞艇",
          "5分彩",
          "腾讯时时彩",
          "台湾时时彩",
          "澳洲幸运5",
          "澳洲幸运10"
        ],
        s_time: moment().tz("Asia/Hong_Kong").format("YYYY-MM-DD"),
        e_time: moment().tz("Asia/Hong_Kong").format("YYYY-MM-DD"),
        user_group: ""
      },
      lotteryType: [
        {
          label: "3D彩",
          value: "D3"
        },
        {
          label: "排列3",
          value: "P3"
        },
        {
          label: "上海时时乐",
          value: "T3"
        },
        {
          label: "重庆时时彩",
          value: "CQ"
        },
        {
          label: "天津时时彩",
          value: "TJ"
        },
        {
          label: "新疆时时彩",
          value: "JX"
        },
        {
          label: "广东十分彩",
          value: "GDSF"
        },
        {
          label: "广西十分彩",
          value: "GXSF"
        },
        {
          label: "天津十分彩",
          value: "TJSF"
        },
        {
          label: "重庆十分彩",
          value: "CQSF"
        },
        {
          label: "广东11选5",
          value: "GD11"
        },
        {
          label: "北京赛事",
          value: "BJPK"
        },
        {
          label: "北京快乐8",
          value: "BJKN"
        },
        {
          label: "幸运飞艇",
          value: "XYFT"
        },
        {
          label: "5分彩",
          value: "FFC5"
        },
        {
          label: "腾讯时时彩",
          value: "TXSSC"
        },
        {
          label: "台湾时时彩",
          value: "TWSSC"
        },
        {
          label: "澳洲幸运5",
          value: "AZXY5"
        },
        {
          label: "澳洲幸运10",
          value: "AZXY10"
        },
      ]
    }
  },
  computed: {
    success: function () {
      let { getSuccess } = lotteryConfigStore();
      return getSuccess;
    },
  },
  methods: {
    submit: async function () {
      const loading = ElLoading.service({
        lock: true,
        text: "加载中...",
        background: "rgba(0, 0, 0, 0.7)",
      });
      let formData = {
        s_time: moment(this.form.s_time).format("YYYY-MM-DD"),
        e_time: moment(this.form.e_time).format("YYYY-MM-DD"),
        g_type: this.lotteryType.filter(item => this.form.g_type.includes(item.label)).map(item => item.value),
        user_group: this.form.user_group
      }
      await this.dispatchStartDiscount(formData);
      this.successResult();
      loading.close();
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
}
</script>
<style lang="scss" scoped></style>
