<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin: 1rem; text-align: center;"
  >
    <h3>{{ $t('menu.numberofUserOnline') }}</h3>
    <el-form :inline="true" :model="formData">
      <div>
        <el-form-item label="在线人数">
          <el-select
            v-model="formData.userOption"
            placeholder=" "
            style="width: 80px;"
          >
            <el-option
              v-for="item in userOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="在线帐号">
          <el-input
            v-model="formData.account"
            placeholder=""
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">提交</el-button>
        </el-form-item>
      </div>
    </el-form>
    <el-table
      :data="numberofUserData"
      style="width: 100%;"
      border
      header-align="center"
      stripe
    >
      <el-table-column type="index" label="序号" align="center" width="70" />
      <el-table-column property="account" label="账号" align="center" />
      <el-table-column property="name" label="名称" align="center" />
      <el-table-column label="操作" width="120" align="center">
        <template #default="scope">
          <el-button-group>
            <el-button
              type="danger"
              link
              @click="kickLineData(scope.$index, scope.row)"
            >
              踢线
            </el-button>
            <el-button
              type="primary"
              link
              @click="realPersonSetting(scope.$index, scope.row)"
            >
              真人设置
            </el-button>
          </el-button-group>
        </template>
      </el-table-column>
      <el-table-column property="credits" label="信用额度" align="center" />
      <el-table-column property="cashAmount" label="现金额度" align="center" />
      <el-table-column property="BBAmount" label="BB额度" align="center" />
      <el-table-column property="AGAmount" label="AG额度" align="center" />
      <el-table-column property="OGAmount" label="OG额度" align="center" />
      <el-table-column property="MGAmount" label="MG额度" align="center" />
      <el-table-column property="PTAmount" label="PT额度" align="center" />
      <el-table-column
        property="kaiyuanAmount"
        label="开元额度"
        align="center"
      />
      <el-table-column label="登陆时间" width="180" align="center">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.loginTime }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="活动时间" width="180" align="center">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.activityTime }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column property="loginURL" label="登陆网址" align="center" />
      <el-table-column
        property="loginIPRegion"
        label="登陆IP和地区"
        align="center"
      />
      <el-table-column property="machineCode" label="机器码" align="center" />
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
        account: '',
        userOption: '会员',
      },
      numberofUserData: [
        {
          account: 'aaa123',
          name: 'hello',
          credits: '1100',
          cashAmount: '1087',
          BBAmount: '122元',
          AGAmount: '122元',
          OGAmount: '122元',
          MGAmount: '122元',
          PTAmount: '122元',
          kaiyuanAmount: '122元',
          loginTime: '2023-03-02 02:34:18',
          activityTime: '2023-03-02 02:34:18',
          loginURL: 'http://vip.pj6678.com',
          loginIPRegion: '188.43.14.13 英国',
          machineCode: 'D7048F27BCEA8D0EF7ED',
        },
      ],
      userOptions: [
        {
          value: '会员',
          label: '会员',
        },
        {
          value: '代理',
          label: '代理',
        },
      ],
    }
  },
  methods: {
    realPersonSetting(index, row) {
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
