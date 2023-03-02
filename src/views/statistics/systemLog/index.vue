<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin: 1rem; text-align: center;"
  >
    <h3>{{ $t('menu.systemLog') }}</h3>
    <el-form :inline="true" :model="formData">
      <div>
        <el-form-item label="">
          <el-select
            v-model="formData.timeOption"
            placeholder=" "
            style="width: 80px;"
          >
            <el-option
              v-for="item in timeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="日期">
          <el-date-picker
            placeholder="Select date"
            v-model="formData.date"
            style="width: 150px;"
          />
        </el-form-item>
        <el-form-item label="帐户">
          <el-select
            v-model="formData.accountOption"
            placeholder=" "
            style="width: 80px;"
          >
            <el-option
              v-for="item in accountOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">快速查詢</el-button>
        </el-form-item>
      </div>
    </el-form>
    <el-table
      :data="systemLogData"
      style="width: 100%;"
      border
      header-align="center"
      stripe
    >
      <el-table-column type="index" label="序号" align="center" width="70" />
      <el-table-column property="accountNumber" label="帐号" align="center" />
      <el-table-column property="level" label="级别" align="center" />
      <el-table-column label="登陆时间" width="180" align="center">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.loginTime }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column property="loginURL" label="登陆网址" align="center" />
      <el-table-column
        property="loginIPRegion"
        label="登陆IP和地区"
        align="center"
      />
      <el-table-column fixed="right" label="操作" width="100" align="center">
        <template #default="scope">
          <el-button-group>
            <el-button
              type="primary"
              link
              @click="checkData(scope.$index, scope.row)"
            >
              查看
            </el-button>
            <el-button
              type="danger"
              link
              @click="kickLineData(scope.$index, scope.row)"
            >
              踢线
            </el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="100" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        date: '',
        accountOption: '全部',
        timeOption: '10秒',
      },
      systemLogData: [
        {
          accountNumber: 'admin',
          level: '',
          loginTime: '2023-02-22 12:48:27',
          loginURL: 'http://htadmin.pj6678.com',
          loginIPRegion: '188.43.14.13 英国',
          contactNumber: '测试会员',
          bankofDeposit: '微信',
          bankAccount: '彩票返水',
          name: '测试会员',
          orderNumber: 'order',
        },
      ],
      timeOptions: [
        {
          value: '10',
          label: '10秒',
        },
        {
          value: '30',
          label: '30秒',
        },
        {
          value: '60',
          label: '60秒',
        },
        {
          value: '90',
          label: '90秒',
        },
        {
          value: '120',
          label: '120秒',
        },
        {
          value: '180',
          label: '180秒',
        },
      ],
      accountOptions: [
        {
          value: '全部',
          label: '全部',
        },
        {
          value: 'admin===管理员',
          label: 'admin===管理员',
        },
      ],
    }
  },
  methods: {
    checkData(index, row) {
      console.log(index, row)
    },
    kickLineData(index, row) {
      console.log(index, row)
    },
  },
}
</script>
<style lang="scss" scoped>
.pagination {
  margin-top: 10px;
  text-align: center;
  display: inline-flex;
}
</style>
