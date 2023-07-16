<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: left; margin: 1rem;"
  >
    <h3>系统设置</h3>
    <el-form :model="formData" inline="true">
      <el-form-item label="">
        <el-button type="primary" link @click="addNewGame">新增电子游戏</el-button>
        <el-button type="primary" link @click="addNewGameKY">新增棋牌游戏</el-button>
      </el-form-item>
      <el-form-item label="平台:">
        <el-select v-model="formData.platformType" style="width: 150px;">
          <el-option
            v-for="item in platformOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="游戏名称:">
        <el-input
          v-model="formData.gameName"
          placeholder=""
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" @click="getGameResultByFilter">确认</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="gameList"
      v-loading="loading"
      style="width: 100%;"
      border
      header-align="center"
      stripe
    >
      <el-table-column type="index" :index="indexMethod" label="编号" align="center" width="70"/>
      <el-table-column property="GameName" label="游戏名称" align="center" />
      <el-table-column property="GameName_EN" label="英文名称" align="center" />
      <el-table-column property="GameClass" label="分类" align="center" />
      <el-table-column property="GameType" label="游戏代码" align="center" />
      <el-table-column
        property="GameType_H5"
        label="游戏代码(手机)"
        align="center"
      />
      <el-table-column property="ZH_Logo_File" label="图片" align="center" />
      <el-table-column property="H5_Logo_File" label="图片(手机)" align="center" />
      <el-table-column label="上架时间" width="180" align="center">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.Date }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column property="PlatformType" label="平台" align="center" />
      <el-table-column property="Open" label="状态" align="center">
        <template #default="scope">
          <el-checkbox
            v-model="scope.row.Open" 
            size="large"
            @change="updateAction(scope.row.ID, scope.row.Open)"
          />
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100" align="center">
        <template #default="scope">
          <el-button-group>
            <el-button
              type="primary"
              link
              @click="modifyGame(scope.row)"
            >
              修改
            </el-button>
            <el-button
              type="danger"
              link
              @click="deleteGame(scope.row.ID)"
            >
              删除
            </el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="totalCount" 
        :page-size="20"
        @current-change="onPageChange"
        v-model:current-page="formData.page_no" />
    </div>
    <el-dialog v-model="editDialogVisible" :title="dialogTitle" width="50%" center>
      <el-form :model="gameItem" label-width="150px" ref="formRef">
        <el-form-item
          label="游戏名称"
          prop="GameName"
          :rules="{
            required: true,
            message: '重要数据不能为空',
            trigger: 'blur',
          }"
        >
          <el-input v-model="gameItem.GameName"/>
        </el-form-item>
        <el-form-item
          label="游戏名称(英文)"
        >
          <el-input v-model="gameItem.GameName_EN"/>
        </el-form-item>
        <el-form-item
          label="平台"
          prop="PlatformType"
          :rules="{
            required: true,
            message: '重要数据不能为空',
            trigger: 'blur',
          }"
        >
          <el-select v-model="gameItem.PlatformType">
            <el-option
              v-for="item in addPlatformOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="游戏分类">
          <el-input
            v-model="gameItem.GameClass"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="游戏代码"
          prop="GameType"
          :rules="{
            required: true,
            message: '重要数据不能为空',
            trigger: 'blur',
          }"
        >
          <el-input
            v-model="gameItem.GameType"
          ></el-input>
        </el-form-item>
        <el-form-item label="游戏代码(H5)">
          <el-input
            v-model="gameItem.GameType_H5"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="图片"
          prop="ZH_Logo_File"
          :rules="{
            required: true,
            message: '重要数据不能为空',
            trigger: 'blur',
          }"
        >
          <el-input
            v-model="gameItem.ZH_Logo_File"
          ></el-input>
        </el-form-item>
        <el-form-item label="图片(H5)">
          <el-input
            v-model="gameItem.H5_Logo_File"
          ></el-input>
        </el-form-item>
        <el-form-item label="上架日期">
          <el-date-picker
            v-model="gameItem.Date"
            placeholder=""
            value-format="YYYY-MM-DD"
          ></el-date-picker>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="editDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="updateGame(formRef)">
            修改
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
  <el-backtop :right="60" :bottom="60" target=".main" />
</template>

<script lang="ts">
import { reactive, ref } from 'vue'
import { humanManagementStore } from "@/pinia/modules/human_management.js";
import moment from "moment-timezone";
import { ElNotification,ElMessageBox } from "element-plus";
import type { FormInstance } from 'element-plus'
export default {
  setup() {
    const formRef = ref<FormInstance>()
    const {dispatchGameSystem} = humanManagementStore();
    const {dispatchGameOpen} = humanManagementStore();
    const {dispatchDeleteGame} = humanManagementStore();
    const {dispatchEditGame} = humanManagementStore();
    const {dispatchUpdateGame} = humanManagementStore();
    const {dispatchAddGame} = humanManagementStore();
    return {
      dispatchGameSystem,
      dispatchGameOpen,
      dispatchDeleteGame,
      dispatchEditGame,
      dispatchUpdateGame,
      dispatchAddGame,
      formRef
    }
  },
  data() {
    return {
      dialogTitle: "",
      gameItem: null,
      editDialogVisible: false,
      loading: false,
      formData: {
        platformType: '',
        gameName: '',
        page_no: 1
      },
      addPlatformOptions: [
        {
          value: 'XIN',
          label: 'AG电子',
        },
        {
          value: 'BBIN',
          label: 'BBIN电子',
        },
        {
          value: 'MG',
          label: 'MG电子',
        },
        {
          value: 'PT',
          label: 'PT电子',
        },
        {
          value: 'YOPLAY',
          label: 'YOPLAY电子',
        },
        {
          value: 'KY',
          label: '开元棋牌',
        },
      ],
      platformOptions: [
        {
          value: '',
          label: '全部',
        },
        {
          value: 'XIN',
          label: 'AG电子',
        },
        {
          value: 'BBIN',
          label: 'BBIN电子',
        },
        {
          value: 'MG',
          label: 'MG电子',
        },
        {
          value: 'PT',
          label: 'PT电子',
        },
        {
          value: 'YOPLAY',
          label: 'YOPLAY电子',
        },
        {
          value: 'KY',
          label: '开元棋牌',
        },
      ],
    }
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
    getGameResultByFilter: async function() {
      this.loading = true;
      await this.dispatchGameSystem(this.formData);
      this.loading = false;
    },
    onPageChange: async function() {
      this.loading = true;
      await this.dispatchGameSystem(this.formData);
      this.loading = false;
    },
    indexMethod: function(index) {
      return index + 1 + (this.formData.page_no - 1) * 20;
    },
    updateAction: async function(id, action) {
      let open = 0;
      if (action) {
        open = 1;
      }
      let formData = {
        id: id,
        open: open
      }
      this.loading = true;
      await this.dispatchGameOpen(formData);
      await this.dispatchGameSystem(this.formData);
      this.loading = false;
      this.successResult();
    },
    addNewGame: function() {
      this.dialogTitle = "新增电子游戏";
      this.gameItem = {
        ID: "",
        GameName: "",
        GameName_EN: "",
        PlatformType: "",
        GameClass: "",
        GameType: "",
        GameType_H5: "",
        ZH_Logo_File: "",
        H5_Logo_File: "",
        Date: moment().tz("Asia/Hong_Kong").format("YYYY-MM-DD"),
      }
      this.editDialogVisible = true;
    },
    addNewGameKY: function() {
      this.dialogTitle = "新增棋牌游戏";
      this.gameItem = {
        ID: "",
        GameName: "",
        GameName_EN: "",
        PlatformType: "KY",
        GameClass: "",
        GameType: "",
        GameType_H5: "",
        ZH_Logo_File: "",
        H5_Logo_File: "",
        Date: moment().tz("Asia/Hong_Kong").format("YYYY-MM-DD"),
      }
      this.editDialogVisible = true;
    },
    modifyGame: async function(item) {
      this.dialogTitle = "修改电子游戏";
      this.gameItem = item;
      this.editDialogVisible = true;
    },
    updateGame: async function(formRef: FormInstance | undefined) {
      if (!formRef) return;
      formRef.validate(async (valid) => {
        if (valid) {
          if (this.gameItem.ID == "") {
            await this.dispatchAddGame(this.gameItem);
          } else {
            await this.dispatchUpdateGame(this.gameItem);
          }
          this.editDialogVisible = false;
          this.loading = true;
          await this.dispatchGameSystem(this.formData);
          this.successResult();
          this.loading = false;
        } else {
          return false;
        }
      })
    },
    deleteGame: async function(id) {
      ElMessageBox.confirm('确认删除已选中的数据项?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(async () => {
        this.loading = true;
        await this.dispatchDeleteGame({id: id});
        await this.dispatchGameSystem(this.formData);
        this.successResult();
        this.loading = false;   
      })
    },
  },
  computed: {
    success: function () {
      let { getSuccess } = humanManagementStore();
      return getSuccess;
    },
    gameList: function() {
      const {getGameList} = humanManagementStore();
      return getGameList;
    },
    totalCount: function() {
      const {getTotalCount} = humanManagementStore();
      return getTotalCount;
    }
  },
  async mounted() {
    this.loading = true;
    await this.dispatchGameSystem(this.formData);
    this.loading = false;
  }
}
</script>
<style lang="scss" scoped>
.pagination {
  margin-top: 10px;
  text-align: center;
  display: inline-flex;
}
</style>
