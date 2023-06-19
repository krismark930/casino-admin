<template>
	<el-row style="margin: 20px; justify-content: center;">
		<el-form-item label="管理">
			<el-select v-model="formData.gtype">
				<el-option v-for="(item, index) in gtypeOptions" :key="index" :label="item.label" :value="item.value"></el-option>
			</el-select>
			<el-button type="primary" style="margin-left: 8px;" @click="handleDateRange('yesterday')">昨日</el-button>
			<el-button type="primary" @click="handleDateRange('today')">今日</el-button>
			<el-button type="primary" @click="handleDateRange('tomorrow')">明日</el-button>
			<el-button type="primary" @click="handleDateRange('this week')">本星期</el-button>
			<el-button type="primary" @click="handleDateRange('last week')">上星期</el-button>
			<el-button type="primary" @click="handleDateRange('this month')">本月份</el-button>
			<el-button type="primary" @click="handleDateRange('last month')">上月份</el-button>
			<el-button type="danger">一键返水</el-button>
			<el-button type="danger">彩票返水</el-button>
			<el-button type="danger">真人返水</el-button>
			<el-button type="danger">电子返水</el-button>
			<el-button type="danger">捕鱼返水</el-button>
		</el-form-item>
	</el-row>
	<el-row style="margin: 20px;">
		<el-col :span="12">
			<el-form label-width="150px" style="margin: 40px">
				<el-form-item label="日期区间:">
					<el-date-picker type="daterange" style="width: 200px" v-model="dateRange"></el-date-picker>
				</el-form-item>
				<el-form-item label="报表分类:">
					<el-select v-model="formData.report_kind">
						<el-option v-for="(item, index) in kindOptions" :key="index" :label="item.label" :value="item.value"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="投注方式:">
					<el-select v-model="formData.pay_type">
						<el-option v-for="(item, index) in payOptions" :key="index" :label="item.label" :value="item.value"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="投注种类:">
					<el-select v-model="formData.type">
						<el-option v-for="(item, index) in typeOptions" :key="index" :label="item.label" :value="item.value"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="投注状态:">
					<el-select v-model="formData.result_type">
						<el-option v-for="(item, index) in resultOptions" :key="index" :label="item.label" :value="item.value"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item style="text-align: center;">
					<el-button type="primary">确定</el-button>
					<el-button type="danger">取消</el-button>
				</el-form-item>
			</el-form>
			<el-row style="margin: 20px">
				<el-col :span="12" style="text-align: center;">
					<Font color="red">{{moment().format("YYYY-MM-DD")}}足球{{sportReportItem.ft_caption}}</Font>
				</el-col>
				<el-col :span="12" style="text-align: center;">					
					<Font>{{moment().format("YYYY-MM-DD")}}足球{{sportReportItem.ft_caption1}}</Font>
				</el-col>
			</el-row>
			<el-row style="margin: 20px">
				<el-col :span="12" style="text-align: center;">
					<Font color="red">{{moment().format("YYYY-MM-DD")}}篮球{{sportReportItem.bk_caption}}</Font>
				</el-col>
				<el-col :span="12" style="text-align: center;">					
					<Font>{{moment().format("YYYY-MM-DD")}}篮球{{sportReportItem.bk_caption1}}</Font>
				</el-col>
			</el-row>
		</el-col>
		<el-col :span="12" style="text-align: center">
			<h2>2010年月帐期数</h2>
			<el-table :data="helpList" style="width: 100%;" border header-align="center">
				<el-table-column prop="period" label="" style="background: #7DD5D2"/>
				<el-table-column prop="date" label=""/>
			</el-table>
		</el-col>
	</el-row>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue';
import moment from 'moment-timezone';
import { sportReportStore } from "@/pinia/modules/sport_report";
import { storeToRefs } from "pinia";
import { ElNotification } from "element-plus";
import { ElLoading } from "element-plus";

const { dispatchSportReport } = sportReportStore();

const helpList = [
	{
		period: "第1期",
		date: "2009/12/28 ~ 2010/01/24",
	},
	{
		period: "第2期",
		date: "2010/01/25 ~ 2010/02/21",
	},
	{
		period: "第3期",
		date: "2010/02/22 ~ 2010/03/21",
	},
	{
		period: "第4期",
		date: "2010/03/22 ~ 2010/04/18",
	},
	{
		period: "第5期",
		date: "2010/04/19 ~ 2010/05/16",
	},
	{
		period: "第6期",
		date: "2010/05/17 ~ 2010/06/13",
	},
	{
		period: "第7期",
		date: "2010/06/14 ~ 2010/07/11",
	},
	{
		period: "第8期",
		date: "2010/07/12 ~ 2010/08/08",
	},
	{
		period: "第9期",
		date: "2010/08/09 ~ 2010/09/05",
	},
	{
		period: "第10期",
		date: "2010/09/06 ~ 2010/10/03",
	},
	{
		period: "第11期",
		date: "2010/10/04 ~ 2010/10/31",
	},
	{
		period: "第12期",
		date: "2010/11/01 ~ 2010/11/28",
	},
	{
		period: "第13期",
		date: "2010/11/29 ~ 2010/12/26",
	},
];

const dateRange = ref([
	moment.tz("Asia/Hong_Kong").format("YYYY-MM-DD"),
	moment.tz("Asia/Hong_Kong").format("YYYY-MM-DD"),
]);

const formData = ref({
	gtype: "",
	date_start: dateRange.value[0],
	date_end: dateRange.value[1],
	report_kind: "总帐",
	pay_type: "",
	type: "",
	result_type: "",
	cancel: ""
})

const gtypeOptions = ref([
	{
		label: "全部",
		value: ""
	},
	{
		label: "足球",
		value: "FT"
	},
	{
		label: "六合彩",
		value: "SIX"
	},
])

const kindOptions = ref([
	{
		label: "总帐",
		value: "A"
	},
	{
		label: "分类帐",
		value: "C"
	},
	{
		label: "已注销注单",
		value: "D"
	},
	{
		label: "未接受注单",
		value: "E"
	},
])

const payOptions = ref([
	{
		label: "全部",
		value: ""
	},
	{
		label: "信用额度",
		value: 0
	},
	{
		label: "现金",
		value: 1
	},
])

const typeOptions = ref([
	{
		label: "全部",
		value: ""
	},
	{
		label: "全场独赢",
		value: "M"
	},
	{
		label: "全场让球",
		value: "R"
	},
	{
		label: "全场大小",
		value: "OU"
	},
	{
		label: "上半独赢",
		value: "VM"
	},
	{
		label: "上半让球",
		value: "VR"
	},
	{
		label: "上半大小",
		value: "VOU"
	},
	{
		label: "上半单双",
		value: "VEO"
	},
	{
		label: "下半让球",
		value: "UR"
	},
	{
		label: "下半大小",
		value: "UOU"
	},
	{
		label: "下半单双",
		value: "UEO"
	},
	{
		label: "单节让球",
		value: "QR"
	},
	{
		label: "单节大小",
		value: "QOU"
	},
	{
		label: "单节单双",
		value: "QEO"
	},
	{
		label: "滚球全场独赢",
		value: "RM"
	},
	{
		label: "滚球全场让球",
		value: "RB"
	},
	{
		label: "滚球全场大小",
		value: "ROU"
	},
	{
		label: "滚球上半独赢",
		value: "VRM"
	},
	{
		label: "滚球上半让球",
		value: "VRB"
	},
	{
		label: "滚球上半大小",
		value: "VROU"
	},
	{
		label: "滚球下半让球",
		value: "URB"
	},
	{
		label: "滚球下半大小",
		value: "UROU"
	},
	{
		label: "波胆",
		value: "PD"
	},
	{
		label: "上半波胆",
		value: "VPD"
	},
	{
		label: "总入球",
		value: "T"
	},
	{
		label: "半全场",
		value: "F"
	},
	{
		label: "混合过关",
		value: "PC"
	},
	{
		label: "冠军",
		value: "CS"
	},
])

const resultOptions = ref([
	{
		label: "全部",
		value: ""
	},
	{
		label: "有结果",
		value: "Y"
	},
	{
		label: "未有结果",
		value: "N"
	},
])

const handleDateRange = (date) => {
	switch (date) {
		case "yesterday":
			dateRange.value[0] = moment().subtract(1, 'day').format('YYYY-MM-DD');
			dateRange.value[1] = moment().subtract(1, 'day').format('YYYY-MM-DD');
			break;
		case "today":
			dateRange.value[0] = moment().format('YYYY-MM-DD');
			dateRange.value[1] = moment().format('YYYY-MM-DD');
			break;
		case "tomorrow":
			dateRange.value[0] = moment().add(1, 'day').format('YYYY-MM-DD');
			dateRange.value[1] = moment().add(1, 'day').format('YYYY-MM-DD');
			break;
		case "this week":
			dateRange.value[0] = moment().clone().startOf('week').format('YYYY-MM-DD');
			dateRange.value[1] = moment().clone().endOf('week').format('YYYY-MM-DD');
			break;
		case "last week":
			dateRange.value[0] = moment().clone().subtract(1, 'week').startOf('week').format('YYYY-MM-DD');
			dateRange.value[1] = moment().clone().subtract(1, 'week').endOf('week').format('YYYY-MM-DD');
			break;
		case "this month":
			dateRange.value[0] = moment().clone().startOf('month').format('YYYY-MM-DD');
			dateRange.value[1] = moment().clone().endOf('month').format('YYYY-MM-DD');
			break;
		case "last month":
			dateRange.value[0] = moment().clone().subtract(1, 'month').startOf('month').format('YYYY-MM-DD');
			dateRange.value[1] = moment().clone().subtract(1, 'month').endOf('month').format('YYYY-MM-DD');
			break;
	}
}

const success = computed(() => {
	const { getSuccess } = storeToRefs(sportReportStore());
	return getSuccess.value;
})

const successResult = () => {
  if (success.value) {
    ElNotification({
      title: "成功",
      message: "操作成功。",
      type: "success",
    });
  } else {
    ElNotification({
      title: "错误",
      message: errMessage.value,
      type: "error",
    });
  }
}

const sportReportItem = computed(() => {
	const { getSportReportItem } = storeToRefs(sportReportStore());
	return getSportReportItem.value
})

onMounted(async () => {
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchSportReport();
  successResult();
  loading.close();	
})
</script>
<style></style>