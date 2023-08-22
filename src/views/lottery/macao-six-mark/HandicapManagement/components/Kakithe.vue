<template>
  <table class="handicap-setting">
    <tr>
      <th>开奖球号：</th>
      <td colspan="3">
        <table
          class="lottery-ball-number"
          v-if="
            gameStatus.kizt == 0 &&
            gameStatus.kizm == 0 &&
            gameStatus.kibb == 0 &&
            gameStatus.kiws == 0 &&
            gameStatus.kizm6 == 0 &&
            gameStatus.kisx == 0 &&
            gameStatus.kigg == 0 &&
            gameStatus.kilm == 0
          "
        >
          <thead>
            <th style="width: 10%">平1</th>
            <th style="width: 10%" v-if="gameStatus.n1 != 0 && gameStatus.n1 != ''">
              平2
            </th>
            <th style="width: 10%" v-if="gameStatus.n2 != 0 && gameStatus.n2 != ''">
              平3
            </th>
            <th style="width: 10%" v-if="gameStatus.n3 != 0 && gameStatus.n3 != ''">
              平4
            </th>
            <th style="width: 10%" v-if="gameStatus.n4 != 0 && gameStatus.n4 != ''">
              平5
            </th>
            <th style="width: 10%" v-if="gameStatus.n5 != 0 && gameStatus.n5 != ''">
              平6
            </th>
            <th style="width: 10%" v-if="gameStatus.n6 != 0 && gameStatus.n6 != ''">
              特码
            </th>
            <th style="width: 10%">操作</th>
          </thead>
          <tbody>
            <tr>
              <td>
                <el-input v-model="gameStatus.n1" />
              </td>
              <td v-if="gameStatus.n1 != 0 && gameStatus.n1 != ''">
                <el-input v-model="gameStatus.n2" />
              </td>
              <td v-if="gameStatus.n2 != 0 && gameStatus.n2 != ''">
                <el-input v-model="gameStatus.n3" />
              </td>
              <td v-if="gameStatus.n3 != 0 && gameStatus.n3 != ''">
                <div v-if="gameStatus.zfb != 0">请先封盘</div>
                <el-input v-model="gameStatus.n4" v-else />
              </td>
              <td v-if="gameStatus.n4 != 0 && gameStatus.n4 != ''">
                <el-input v-model="gameStatus.n5" />
              </td>
              <td v-if="gameStatus.n5 != 0 && gameStatus.n5 != ''">
                <el-input v-model="gameStatus.n6" />
              </td>
              <td v-if="gameStatus.n6 != 0 && gameStatus.n6 != ''">
                <el-input v-model="gameStatus.na" />
              </td>
              <td>
                <el-button @click="saveGameResult(gameStatus.id)"> 开奖 </el-button>
              </td>
            </tr>
            <tr>
              <td colspan="8" style="color: red">如果还未到开奖，这里数据请保持为0！</td>
            </tr>
          </tbody>
        </table>
        <font v-else color="ff000">请先封盘在开奖！</font>
      </td>
    </tr>
    <tr>
      <th>期数：</th>
      <td>
        <el-input v-model="gameStatus.nn" :readonly="gameStatus.zfb == 1" />
      </td>
      <th>开奖时间：</th>
      <td>
        <el-date-picker
          v-model="gameStatus.nd"
          type="datetime"
          :readonly="gameStatus.zfb == 1"
        />
      </td>
    </tr>
    <tr>
      <th>总封盘：</th>
      <td>
        <el-button @click="updateHandicap(gameStatus.id, gameStatus.zfb)">
          <font color="0000ff" v-if="gameStatus.zfb === 0">正在封盘中...</font>
          <font color="ff0000" v-else>正在开盘中...</font>
        </el-button>
      </td>
      <th>总自动封盘时间:</th>
      <td>
        <el-date-picker
          v-model="gameStatus.zfbdate"
          type="datetime"
          :readonly="gameStatus.zfb == 1"
        />
      </td>
    </tr>
    <tr>
      <th>自动开盘时间：</th>
      <td colspan="3">
        <div style="display: flex; width: 100%; column-gap: 10px">
          <el-date-picker
            v-model="gameStatus.zfbdate1"
            style="flex: 0 1 auto"
            type="datetime"
            :readonly="gameStatus.zfb == 1"
          />
          <el-checkbox
            v-model="gameStatus.best"
            style="flex: 0 1 auto"
            size="large"
            @change="updateKitheBest(gameStatus.best, gameStatus.id)"
          >
            (是否充许自动开盘)*(如果开始设成了自动开盘，那自动开盘后这勾会自动变成不打勾！)
          </el-checkbox>
        </div>
      </td>
    </tr>
    <tr>
      <th>特码：</th>
      <td>
        <el-radio-group v-model="gameStatus.kitm" class="ml-4">
          <el-radio label="0" size="large">封</el-radio>
          <el-radio label="1" size="large">开</el-radio>
        </el-radio-group>
      </td>
      <th>特码自动封盘时间：</th>
      <td>
        <el-date-picker
          v-model="gameStatus.kitm1"
          type="datetime"
          :readonly="gameStatus.zfb == 1"
        />
      </td>
    </tr>
    <tr>
      <th>正特：</th>
      <td>
        <el-radio-group v-model="gameStatus.kizt" class="ml-4">
          <el-radio label="0" size="large">封</el-radio>
          <el-radio label="1" size="large">开</el-radio>
        </el-radio-group>
      </td>
      <th rowspan="8">正码自动封盘时间：</th>
      <td rowspan="8">
        <el-date-picker
          v-model="gameStatus.kizm1"
          type="datetime"
          :readonly="gameStatus.zfb == 1"
        />
      </td>
    </tr>
    <tr>
      <th>正码：</th>
      <td>
        <el-radio-group v-model="gameStatus.kizm" class="ml-4">
          <el-radio label="0" size="large">封</el-radio>
          <el-radio label="1" size="large">开</el-radio>
        </el-radio-group>
      </td>
    </tr>
    <tr>
      <th>五行：</th>
      <td>
        <el-radio-group v-model="gameStatus.kizm6" class="ml-4">
          <el-radio label="0" size="large">封</el-radio>
          <el-radio label="1" size="large">开</el-radio>
        </el-radio-group>
      </td>
    </tr>
    <tr>
      <th>过关：</th>
      <td>
        <el-radio-group v-model="gameStatus.kigg" class="ml-4">
          <el-radio label="0" size="large">封</el-radio>
          <el-radio label="1" size="large">开</el-radio>
        </el-radio-group>
      </td>
    </tr>
    <tr>
      <th>连码：</th>
      <td>
        <el-radio-group v-model="gameStatus.kilm" class="ml-4">
          <el-radio label="0" size="large">封</el-radio>
          <el-radio label="1" size="large">开</el-radio>
        </el-radio-group>
      </td>
    </tr>
    <tr>
      <th>生肖/正特尾：</th>
      <td>
        <el-radio-group v-model="gameStatus.kisx" class="ml-4">
          <el-radio label="0" size="large">封</el-radio>
          <el-radio label="1" size="large">开</el-radio>
        </el-radio-group>
      </td>
    </tr>
    <tr>
      <th>半波/半半波/正肖七色波：</th>
      <td>
        <el-radio-group v-model="gameStatus.kibb" class="ml-4">
          <el-radio label="0" size="large">封</el-radio>
          <el-radio label="1" size="large">开</el-radio>
        </el-radio-group>
      </td>
    </tr>
    <tr>
      <th>头尾数：</th>
      <td>
        <el-radio-group v-model="gameStatus.kiws" class="ml-4">
          <el-radio label="0" size="large">封</el-radio>
          <el-radio label="1" size="large">开</el-radio>
        </el-radio-group>
      </td>
    </tr>
    <tr>
      <th></th>
      <td colspan="3">
        <el-button @click="updateKakithe"> 保存盘口 </el-button>
      </td>
    </tr>
  </table>
</template>
<script>
import { defineComponent } from "vue";
import { ElNotification } from "element-plus";
import moment from "moment-timezone";
import { ElLoading } from "element-plus";
import { handicapStore } from "@/pinia/modules/macao_six_mark/handicap";
export default defineComponent({
  setup() {
    const { dispatchGameStatus } = handicapStore();
    const { dispatchGameResult } = handicapStore();
    const { dispatchHandicap } = handicapStore();
    const { dispatchKitheBest } = handicapStore();
    const { dispatchKakitheUpdate } = handicapStore();
    return {
      dispatchGameStatus,
      dispatchGameResult,
      dispatchHandicap,
      dispatchKitheBest,
      dispatchKakitheUpdate,
    }
  },
  data() {
    return {
      gameStatus: {},
    }
  },
  computed: {
    success: function () {
      let { getSuccess } = handicapStore();
      return getSuccess;
    },
  },
  watch: {},
  methods: {
    getGameStatus: function () {
      let { getGameStatus } = handicapStore();
      getGameStatus["kitm"] = Number(getGameStatus["kitm"]).toString();
      getGameStatus["kizt"] = Number(getGameStatus["kizt"]).toString();
      getGameStatus["kizm"] = Number(getGameStatus["kizm"]).toString();
      getGameStatus["kizm6"] = Number(getGameStatus["kizm6"]).toString();
      getGameStatus["kigg"] = Number(getGameStatus["kigg"]).toString();
      getGameStatus["kilm"] = Number(getGameStatus["kilm"]).toString();
      getGameStatus["kisx"] = Number(getGameStatus["kisx"]).toString();
      getGameStatus["kibb"] = Number(getGameStatus["kibb"]).toString();
      getGameStatus["kiws"] = Number(getGameStatus["kiws"]).toString();
      this.gameStatus = getGameStatus;
    },
    updateKitheBest: async function (newBest, id) {
      const loading = ElLoading.service({
        lock: true,
        text: "加载中...",
        background: "rgba(0, 0, 0, 0.7)",
      });
      await this.dispatchKitheBest({ best: newBest ? 0 : 1, id: id });
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
    saveGameResult: async function (id) {
      const loading = ElLoading.service({
        lock: true,
        text: "加载中...",
        background: "rgba(0, 0, 0, 0.7)",
      });
      let data = {
        n1: this.gameStatus.n1,
        n2: this.gameStatus.n2,
        n3: this.gameStatus.n3,
        n4: this.gameStatus.n4,
        n5: this.gameStatus.n5,
        n6: this.gameStatus.n6,
        na: this.gameStatus.na,
        id: this.gameStatus.id,
      }
      await this.dispatchGameResult(data);
      await this.dispatchGameStatus({});
      this.$emit("updateYaKitheList");
      loading.close();
      this.successResult();
      this.getGameStatus();
    },
    updateHandicap: async function (id, zfb) {
      const loading = ElLoading.service({
        lock: true,
        text: "加载中...",
        background: "rgba(0, 0, 0, 0.7)",
      });
      let temp_zfb = 0;
      if (zfb == 0) {
        temp_zfb = 1;
      }
      await this.dispatchHandicap({ id: id, zfb: temp_zfb });
      await this.dispatchGameStatus({});
      loading.close();
      this.successResult();
      this.getGameStatus();
    },
    updateKakithe: async function () {
      const loading = ElLoading.service({
        lock: true,
        text: "加载中...",
        background: "rgba(0, 0, 0, 0.7)",
      });
      this.gameStatus.zfbdate1 = moment(this.gameStatus.zfbdate1).format(
        "YYYY-MM-DD HH:mm:ss"
      );
      this.gameStatus.zfbdate = moment(this.gameStatus.zfbdate).format(
        "YYYY-MM-DD HH:mm:ss"
      );
      this.gameStatus.nd = moment(this.gameStatus.nd).format("YYYY-MM-DD HH:mm:ss");
      this.gameStatus.kizm1 = moment(this.gameStatus.kizm1).format("YYYY-MM-DD HH:mm:ss");
      this.gameStatus.kitm1 = moment(this.gameStatus.kitm1).format("YYYY-MM-DD HH:mm:ss");
      await this.dispatchKakitheUpdate(this.gameStatus);
      this.$emit("updateYaKitheList");
      loading.close();
      this.successResult();
    },
  },
  async mounted() {
    const loading = ElLoading.service({
      lock: true,
      text: "加载中...",
      background: "rgba(0, 0, 0, 0.7)",
    });
    await this.dispatchGameStatus({});
    this.getGameStatus();
    loading.close();
  },
});
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
