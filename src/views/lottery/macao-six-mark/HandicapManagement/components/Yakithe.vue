<template>
  <table class="handicap-setting">
    <tr>
      <th> 预设期数： </th>
      <td>
        <el-input v-model="yakitheItem.nn" />
      </td>
      <th> 开奖时间： </th>
      <td>
        <el-date-picker v-model="yakitheItem.nd" type="datetime" />
      </td>
    </tr>
    <tr>
      <th>自动开盘时间：</th>
      <td>
        <el-date-picker v-model="yakitheItem.zfbdate1" style="flex: 0 1 auto;" type="datetime" />
      </td>
      <th> 总自动封盘时间: </th>
      <td>
        <el-date-picker v-model="yakitheItem.zfbdate" type="datetime" />
      </td>
    </tr>
    <tr>
      <th>充许自动开盘：</th>
      <td>
        <el-radio-group v-model="yakitheItem.best" class="ml-4">
          <el-radio label="1" size="large">是</el-radio>
          <el-radio label="0" size="large">否</el-radio>
        </el-radio-group>
      </td>
      <th> 总封盘：</th>
      <td>
        <el-radio-group v-model="yakitheItem.zfb" class="ml-4">
          <el-radio label="0" size="large">封盘</el-radio>
        </el-radio-group>
      </td>
    </tr>
    <tr>
      <th>特码：</th>
      <td>
        <el-radio-group v-model="yakitheItem.kitm" class="ml-4">
          <el-radio label="0" size="large">封</el-radio>
          <el-radio label="1" size="large">开</el-radio>
        </el-radio-group>
      </td>
      <th>特码自动封盘时间：</th>
      <td>
        <el-date-picker v-model="yakitheItem.kitm1" type="datetime" />
      </td>
    </tr>
    <tr>
      <th>正特：</th>
      <td>
        <el-radio-group v-model="yakitheItem.kizt" class="ml-4">
          <el-radio label="0" size="large">封</el-radio>
          <el-radio label="1" size="large">开</el-radio>
        </el-radio-group>
      </td>
      <th rowspan="8">
        正码自动封盘时间：
      </th>
      <td rowspan="8">
        <el-date-picker v-model="yakitheItem.kizm1" type="datetime" />
      </td>
    </tr>
    <tr>
      <th>正码：</th>
      <td>
        <el-radio-group v-model="yakitheItem.kizm" class="ml-4">
          <el-radio label="0" size="large">封</el-radio>
          <el-radio label="1" size="large">开</el-radio>
        </el-radio-group>
      </td>
    </tr>
    <tr>
      <th>五行：</th>
      <td>
        <el-radio-group v-model="yakitheItem.kizm6" class="ml-4">
          <el-radio label="0" size="large">封</el-radio>
          <el-radio label="1" size="large">开</el-radio>
        </el-radio-group>
      </td>
    </tr>
    <tr>
      <th>过关：</th>
      <td>
        <el-radio-group v-model="yakitheItem.kigg" class="ml-4">
          <el-radio label="0" size="large">封</el-radio>
          <el-radio label="1" size="large">开</el-radio>
        </el-radio-group>
      </td>
    </tr>
    <tr>
      <th>连码：</th>
      <td>
        <el-radio-group v-model="yakitheItem.kilm" class="ml-4">
          <el-radio label="0" size="large">封</el-radio>
          <el-radio label="1" size="large">开</el-radio>
        </el-radio-group>
      </td>
    </tr>
    <tr>
      <th>生肖/正特尾：</th>
      <td>
        <el-radio-group v-model="yakitheItem.kisx" class="ml-4">
          <el-radio label="0" size="large">封</el-radio>
          <el-radio label="1" size="large">开</el-radio>
        </el-radio-group>
      </td>
    </tr>
    <tr>
      <th>半波/半半波/正肖七色波：</th>
      <td>
        <el-radio-group v-model="yakitheItem.kibb" class="ml-4">
          <el-radio label="0" size="large">封</el-radio>
          <el-radio label="1" size="large">开</el-radio>
        </el-radio-group>
      </td>
    </tr>
    <tr>
      <th>头尾数：</th>
      <td>
        <el-radio-group v-model="yakitheItem.kiws" class="ml-4">
          <el-radio label="0" size="large">封</el-radio>
          <el-radio label="1" size="large">开</el-radio>
        </el-radio-group>
      </td>
    </tr>
    <tr>
      <th></th>
      <td>
        <el-button @click="updateYakithe">
          保存盘口
        </el-button>
        <el-button type="danger" @click="showKakithe">
          后退
        </el-button>
      </td>
    </tr>
  </table>
</template>
<script>
import { defineComponent } from 'vue';
import { ElNotification } from 'element-plus';
import moment from "moment-timezone";
import { ElLoading } from 'element-plus'
import { handicapStore } from "@/pinia/modules/macao_six_mark/handicap";
export default defineComponent({
  props: {
    yakitheId: Number
  },
  setup() {
    const { dispatchYakitheItem } = handicapStore();
    const { dispatchYakitheUpdate } = handicapStore();
    return {
      dispatchYakitheItem,
      dispatchYakitheUpdate
    }
  },
  data() {
    return {
      yakitheItem: {}
    }
  },
  computed: {
    success: function () {
      let { getSuccess } = handicapStore();
      return getSuccess;
    },
  },
  watch: {
    yakitheId: async function (id) {
      const loading = ElLoading.service({
        lock: true,
        text: '加载中...',
        background: 'rgba(0, 0, 0, 0.7)',
      })
      await this.dispatchYakitheItem({ id: this.yakitheId });
      this.getYakitheItem();
      loading.close();
      this.successResult();
    }
  },
  methods: {
    getYakitheItem: function () {
      let { getYakitheItem } = handicapStore();
      getYakitheItem["kitm"] = Number(getYakitheItem["kitm"]).toString();
      getYakitheItem["kizt"] = Number(getYakitheItem["kizt"]).toString();
      getYakitheItem["kizm"] = Number(getYakitheItem["kizm"]).toString();
      getYakitheItem["kizm6"] = Number(getYakitheItem["kizm6"]).toString();
      getYakitheItem["kigg"] = Number(getYakitheItem["kigg"]).toString();
      getYakitheItem["kilm"] = Number(getYakitheItem["kilm"]).toString();
      getYakitheItem["kisx"] = Number(getYakitheItem["kisx"]).toString();
      getYakitheItem["kibb"] = Number(getYakitheItem["kibb"]).toString();
      getYakitheItem["kiws"] = Number(getYakitheItem["kiws"]).toString();
      getYakitheItem["best"] = Number(getYakitheItem["best"]).toString();
      getYakitheItem["zfb"] = Number(getYakitheItem["zfb"]).toString();
      this.yakitheItem = getYakitheItem;
    },
    successResult: function () {
      if (this.success) {
        ElNotification({
          title: '成功',
          message: '操作成功。',
          type: 'success',
        })
      } else {
        ElNotification({
          title: '错误',
          message: '操作失败。',
          type: 'error',
        })
      }
    },
    updateYakithe: async function () {
      const loading = ElLoading.service({
        lock: true,
        text: '加载中...',
        background: 'rgba(0, 0, 0, 0.7)',
      })
      this.yakitheItem.zfbdate1 = moment(this.yakitheItem.zfbdate1).format("YYYY-MM-DD HH:mm:ss");
      this.yakitheItem.zfbdate = moment(this.yakitheItem.zfbdate).format("YYYY-MM-DD HH:mm:ss");
      this.yakitheItem.kitm1 = moment(this.yakitheItem.kitm1).format("YYYY-MM-DD HH:mm:ss");
      this.yakitheItem.kizm1 = moment(this.yakitheItem.kizm1).format("YYYY-MM-DD HH:mm:ss");
      this.yakitheItem.nd = moment(this.yakitheItem.nd).format("YYYY-MM-DD HH:mm:ss");
      await this.dispatchYakitheUpdate(this.yakitheItem);
      this.$emit("updateYaKitheList");
      loading.close();
      this.successResult();
    },
    showKakithe: function () {
      this.$emit("showKakithe");
    }
  },
  async mounted() {
    const loading = ElLoading.service({
      lock: true,
      text: '加载中...',
      background: 'rgba(0, 0, 0, 0.7)',
    })
    await this.dispatchYakitheItem({ id: this.yakitheId });
    loading.close();
    this.getYakitheItem();
    this.successResult();
  }
})
</script>
<style lang="scss" scoped>
$table-border: 1px solid #ece9d8;
$table-th-bgcolor: #fdf4ca;

.handicap-setting {
  width: 100%;
  border: $table-border;
  margin-bottom: 5px;
  border-collapse: collapse;

  tr {
    height: 40px;

    th {
      width: 15%;
      text-align: right;
      padding: 0 10px;
      background-color: $table-th-bgcolor;
      border: $table-border;
    }

    td {
      padding: 5px 10px;
      border: $table-border;
      min-width: 35%;
      max-width: 85%;
    }
  }

  .lottery-ball-number {
    border-spacing: 0;
    border-collapse: collapse;

    tr {
      height: auto;
    }

    th {
      text-align: center;
      background-color: blue;
      color: white;
      padding: 5px 0;
    }

    td {
      text-align: center;
    }
  }
}
</style>
