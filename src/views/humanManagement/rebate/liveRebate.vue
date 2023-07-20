<template>
  <div style="text-align: left;">
    <h3>一键返水（真人视讯）</h3>
    <el-form :model="formData" inline="true">
      <el-form-item label="开始日期">
        <el-date-picker v-model="formData.s_time" placeholder="" value-format="YYYY-MM-DD"></el-date-picker>
      </el-form-item>
      <el-form-item label="结束日期">
        <el-date-picker v-model="formData.e_time" placeholder="" value-format="YYYY-MM-DD"></el-date-picker>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" @click="discountZr">开始返水</el-button>
      </el-form-item>
    </el-form>
    <h6>注：不自动返水的会员请填把会员的返水改为0</h6>
  </div>
</template>
<script>
import { ElNotification, ElMessageBox } from "element-plus";
import moment from "moment-timezone";
import { ElLoading } from "element-plus";
import { humanManagementStore } from "@/pinia/modules/human_management.js";
export default {
  setup() {
    const { dispatchDiscountZr } = humanManagementStore();
    return {
      dispatchDiscountZr
    }
  },
  data() {
    return {
      formData: {
        s_time: moment().tz("Asia/Hong_Kong").format("YYYY-MM-DD"),
        e_time: moment().tz("Asia/Hong_Kong").format("YYYY-MM-DD"),
      },
    }
  },
  computed: {
    success: function () {
      let { getSuccess } = humanManagementStore();
      return getSuccess;
    },
  },
  methods: {
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
    discountZr: async function () {
      ElMessageBox.confirm('你确认了吗?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(async () => {
        const loading = ElLoading.service({
          lock: true,
          text: "加载中...",
          background: "rgba(0, 0, 0, 0.7)",
        });
        await this.dispatchDiscountZr(this.formData)
        loading.close();
        this.successResult();
      }).catch(() => { });
    }
  }
}
</script>
