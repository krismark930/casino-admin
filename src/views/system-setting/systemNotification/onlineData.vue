<template>
  <div style="text-align: center;">
    <el-form :inline="true" :model="formData">
      <el-form-item label="线上数据－公告管理"></el-form-item>
      <el-form-item>
        <el-select v-model="formData.option" placeholder="Select type">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-date-picker
          v-model="formData.date"
          type="date"
          placeholder="Select date"
        ></el-date-picker>
      </el-form-item>
    </el-form>
    <el-table
      :data="onlineData"
      style="width: 100%;"
      border
      header-align="center"
      stripe
    >
      <el-table-column type="index" label="#" />
      <el-table-column label="日期" width="180">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.time }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column property="zh" label="简体信息" />
      <el-table-column property="cn" label="繁体信息" />
      <el-table-column property="en" label="英文信息" />
      <el-table-column fixed="right" label="功能" width="120">
        <template #default="scope">
          <el-button-group>
            <el-button
              type="primary"
              icon="edit"
              @click="editOnlineData(scope.$index, scope.row)"
            ></el-button>
            <el-button
              type="primary"
              icon="delete"
              @click="deleteOnlineData(scope.$index, scope.row)"
            ></el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        date: '',
        option: '',
      },
      onlineData: [
        {
          id: 1,
          zh: '公司维护中',
          cn: '公司维护中',
          en: '公司维护中',
          time: '2023-02-21',
        },
        {
          id: 2,
          zh: '公司维护中',
          cn: '公司维护中',
          en: '公司维护中',
          time: '2023-02-22',
        },
        {
          id: 3,
          zh: '公司维护中',
          cn: '公司维护中',
          en: '公司维护中',
          time: '2023-02-23',
        },
      ],
      options: [
        {
          value: '会员',
          label: '会员',
        },
        {
          value: '代理',
          label: '代理',
        },
        {
          value: '总代理',
          label: '总代理',
        },
        {
          value: '股东',
          label: '股东',
        },
        {
          value: '公司',
          label: '公司',
        },
      ],
    }
  },
  methods: {
    editOnlineData(index, row) {
      console.log(index, row)
    },
    deleteOnlineData(index, row) {
      console.log(index, row)
    },
  },
}
</script>
<style lang="scss" scoped></style>
