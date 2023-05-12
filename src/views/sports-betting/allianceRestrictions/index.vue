<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center; margin: 1rem;"
  >
    <h3>{{ $t('menu.allianceRestrictions') }}</h3>
    <el-form :inline="true" :model="formData">
      <el-form-item label="联盟单注限制 -- 类别">
        <el-select v-model="formData.typeOption" @change="getItems">
          <el-option
            v-for="item in typeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary">自动接新联盟</el-button>
      </el-form-item>
      <el-form-item label="联盟快速查找">
        <el-input
          clearable
          v-model="formData.keyword"
          placeholder=""
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="getItems">提交</el-button>
        <el-button type="info">回上一頁</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="allianceRestrictionsData"
      style="width: 100%;"
      border
      header-align="center"
      stripe
      v-loading="loading"
    >
      <el-table-column fixed="left" label="序号" align="center" width="70">
        <template #default="scope">
          <div>{{ (page - 1) * 20 + scope.$index + 1 }}</div>
        </template>
      </el-table-column>
      <el-table-column property="mLeague" label="联盟" align="center" />
      <el-table-column property="R" label="让球" align="center" />
      <el-table-column property="OU" label="大小球" align="center" />
      <el-table-column property="VR" label="半场让球" align="center" />
      <el-table-column property="VOU" label="半场大小" align="center" />
      <el-table-column property="RB" label="滚球让球" align="center" />
      <el-table-column property="ROU" label="滚球大小球" align="center" />
      <el-table-column property="VRB" label="上半滚球让球" align="center" />
      <el-table-column property="VROU" label="上半滚球大小球" align="center" />
      <el-table-column property="CS" label="特殊类" align="center" />
      <el-table-column fixed="right" label="操作" width="120" align="center">
        <template #default="scope">
          <el-button-group>
            <el-button
              type="primary"
              icon="edit"
              @click="editAllianceData(scope.$index, scope.row)"
            ></el-button>
            <el-button
              type="primary"
              icon="delete"
              @click="deleteAllianceData(scope.row)"
            ></el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="totalCount"
        :page-size="20"
        @current-change="onPageChange"
        v-model:current-page="page"
      />
    </div>
  </div>
  <el-backtop :right="60" :bottom="60" target=".main" />
</template>
<script>
import { GetItems, DeleteEvent } from '@/api/sports/alliance-restriction'

export default {
  data() {
    return {
      formData: {
        keyword: '',
        typeOption: 'FT',
      },
      allianceRestrictionsData: [],
      typeOptions: [
        {
          value: 'FT',
          label: '足球联盟',
        },
        {
          value: 'BK',
          label: '篮球联盟',
        },
        {
          value: 'BS',
          label: '棒球联盟',
        },
        {
          value: 'TN',
          label: '网球联盟',
        },
        {
          value: 'VB',
          label: '排球联盟',
        },
        {
          value: 'OP',
          label: '其它联盟',
        },
        {
          value: 'FU',
          label: '指数联盟',
        },
        {
          value: 'FS',
          label: '特殊联盟',
        },
      ],
      loading: false,
      totalCount: 0,
      page: 1,
    }
  },
  mounted() {
    this.getItems()
  },
  methods: {
    getItems() {
      this.loading = true
      GetItems({
        type: this.formData.typeOption,
        league: this.formData.keyword,
        page: this.page,
      })
        .then(res => {
          this.allianceRestrictionsData = [...res.data]
          this.totalCount = res.totalCount
        })
        .catch(err => {
          console.error('get items error', err)
        })
        .finally(res => {
          this.loading = false
        })
    },
    editAllianceData(index, row) {
      this.$router.push({
        name: 'allianceRestrictions.editLeague',
        params: { id: row.id },
      })
    },
    deleteAllianceData(row) {
      if (confirm('are you sure want to delete this?')) {
        DeleteEvent({ id: row.id })
          .then(() => {
            this.getItems()
          })
          .catch(err => {
            alert('failed')
            console.error('delete event error', err)
          })
      }
    },
    onPageChange(currentPage) {
      this.getItems()
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
