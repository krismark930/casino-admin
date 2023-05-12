<template>
  <Form :resultId="resultId" @initialId="initialId" @tableRefresh="tableRefresh" />
  <Table :refresh="refresh" @editLotteryResult="editLotteryResult" />
</template>
<script>
import Form from "./form.vue";
import Table from "./table.vue";
export default {
  components: {
    Table,
    Form,
  },
  data() {
    return {
      resultId: 0,
      refresh: false,
    };
  },
  methods: {
    editLotteryResult: function (data) {
      this.resultId = data.id;
    },
    tableRefresh: function () {
      this.refresh = !this.refresh;
    },
    initialId: function () {
      this.resultId = 0;
      console.log(this.resultId);
    },
  },
};
</script>
<style lang="scss" scoped></style>
