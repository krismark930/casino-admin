<template>
  <div style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center; margin: 1rem;">
    <h3>{{ $t('menu.basicDataSettings') }}</h3>
    <el-form label-width="100px" :model="formData" style="width: 600px; display: inline-block;">
      <el-form-item label="帐号">
        {{ formData.UserName }}
      </el-form-item>
      <el-form-item label="旧密码">
        <el-input v-model="formData.old_password" show-password clearable />
      </el-form-item>
      <el-form-item label="新密码">
        <el-input v-model="formData.new_password" show-password clearable />
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="formData.confirm_password" show-password clearable />
      </el-form-item>
      <el-form-item style="display: inline-flex;">
        <el-button type="primary" @click="updateAdminInfo">确定</el-button>
        <el-button type="danger" @click="resetAdminInfo">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { systemStore } from "@/pinia/modules/system";
import { ElNotification, ElLoading } from "element-plus";
export default {
  setup() {
    const { dispatchAdminInfoData } = systemStore();
    const { dispatchUpdateAdminInfoData } = systemStore();
    return {
      dispatchAdminInfoData,
      dispatchUpdateAdminInfoData
    }
  },
  data() {
    return {
      formData: {
        UserName: '',
        old_password: '',
        new_password: '',
        confirm_password: '',
      },
    }
  },
  computed: {
    success: function () {
      let { getSuccess } = systemStore();
      return getSuccess;
    },
    webSystemItem: function () {
      const { getWebSystemItem } = systemStore();
      this.formData.UserName = getWebSystemItem.UserName;
      return getWebSystemItem;
    }
  },
  methods: {
    updateAdminInfo: async function () {
      if (this.formData.new_password !== this.formData.confirm_password) {
        alert("确认新密码错误,请重新输入!!");
        return;
      }
      const loading = ElLoading.service({
        lock: true,
        text: "加载中...",
        background: "rgba(0, 0, 0, 0.7)",
      });
      await this.dispatchUpdateAdminInfoData(this.formData);
      this.successResult();
      loading.close();
    },
    resetAdminInfo: function () {
      this.formData.old_password = "";
      this.formData.new_password = "";
      this.formData.confirm_password = "";
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
    await this.dispatchAdminInfoData({});
    console.log(this.webSystemItem)
    loading.close();
  }
}
</script>

<style lang="scss" scoped></style>
