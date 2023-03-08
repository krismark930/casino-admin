<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center; margin: 1rem;"
  >
    <h3>系统设置</h3>
    <el-form :model="formData" inline="true">
      <el-form-item label="">
        <el-button type="primary" link>自动接收游戏</el-button>
        <el-button type="primary" link>新增电子游戏</el-button>
        <el-button type="primary" link>新增棋牌游戏</el-button>
      </el-form-item>
      <el-form-item label="平台">
        <el-select v-model="formData.platformOption" style="width: 150px;">
          <el-option
            v-for="item in platformOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="开元棋牌">
        <el-input
          v-model="formData.gameName"
          placeholder=""
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary">确认</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="settingData"
      style="width: 100%;"
      border
      header-align="center"
      stripe
    >
      <el-table-column type="index" label="编号" align="center" width="70" />
      <el-table-column property="gameName" label="游戏名称" align="center" />
      <el-table-column property="englishName" label="英文名称" align="center" />
      <el-table-column property="classification" label="分类" align="center" />
      <el-table-column property="gameCode" label="游戏代码" align="center" />
      <el-table-column
        property="gameCodeM"
        label="游戏代码(手机)"
        align="center"
      />
      <el-table-column property="picture" label="图片" align="center" />
      <el-table-column property="pictureM" label="图片(手机)" align="center" />
      <el-table-column label="上架时间" width="180" align="center">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.addedTime }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column property="platform" label="平台" align="center" />
      <el-table-column property="state" label="状态" align="center" />
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
              @click="reviseData(scope.$index, scope.row)"
            >
              修改
            </el-button>
            <el-button
              type="danger"
              link
              @click="deleteData(scope.$index, scope.row)"
            >
              删除
            </el-button>
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
        platformOption: '',
        gameName: '',
      },
      platformOptions: [
        {
          value: '全部',
          label: '全部',
        },
        {
          value: 'AG电子',
          label: 'AG电子',
        },
        {
          value: 'BBIN电子',
          label: 'BBIN电子',
        },
        {
          value: 'MG电子',
          label: 'MG电子',
        },
        {
          value: 'PT电子',
          label: 'PT电子',
        },
        {
          value: 'YOPLAY电子',
          label: 'YOPLAY电子',
        },
        {
          value: '开元棋牌',
          label: '开元棋牌',
        },
      ],
      settingData: [
        {
          gameName: '',
          englishName: '',
          classification: '',
          gameCode: '',
          gameCodeM: '',
          picture: '',
          pictureM: '',
          addedTime: '',
          platform: '',
          state: '',
        },
      ],
    }
  },
  methods: {
    reviseData() {},
    deleteData() {},
  },
  components: {},
}
</script>
