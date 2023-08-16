<template>
	<el-card>
		<el-form>
			<el-form-item>
				<el-button type="primary" @click="showNewItemDialog">新增</el-button>
			</el-form-item>
		</el-form>
		<el-table v-loading="loading" :data="discountList" style="width: 100%; margin-top: 10px;" border>
			<el-table-column property="title" label="标题" align="center" />
			<el-table-column property="content" label="内容" align="center">
				<template #default="scope">
					<div v-html="scope.row.content"></div>
				</template>
			</el-table-column>
			<el-table-column property="image" label="图像" align="center">
				<template #default="scope">
					<img :src="scope.row.image" width="100" />
				</template>
			</el-table-column>
			<el-table-column label="操作" align="center">
				<template #default="scope">
					<el-button type="success" @click="editItem(scope.row)">编辑</el-button>
					<el-button type="danger" @click="deleteItem(scope.row.id)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-dialog v-model="newItemVisible" title="新增高额返水" style="height: 800px;">
			<el-form label-width="60">
				<el-form-item label="标题:">
					<el-input v-model="formData.title" />
				</el-form-item>
				<el-form-item label="图像:">
					<el-upload class="avatar-uploader" action="#" :show-file-list="false" :on-change="handleUploadChange"
						:auto-upload="false">
						<img v-if="formData.image != '' && formData.image != null" :src="formData.image" class="avatar" />
						<el-icon v-else class="avatar-uploader-icon">
							<Plus />
						</el-icon>
					</el-upload>
				</el-form-item>
				<el-form-item label="内容:">
				</el-form-item>
				<quill-editor v-model:value="formData.content" style="height: 200px; overflow-y: auto;" />
			</el-form>
			<template #footer>
				<el-button @click="resetItem">关闭</el-button>
				<el-button type="primary" @click="addItem">保存</el-button>
			</template>
		</el-dialog>
	</el-card>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import { ElNotification } from "element-plus";
import moment from "moment-timezone";
import { ElLoading } from "element-plus";
import { discountStore } from "@/pinia/modules/discount";
import { storeToRefs } from "pinia";

const { dispatchDiscounts } = discountStore();
const { dispatchAddDiscount } = discountStore();
const { dispatchUpdateDiscount } = discountStore();
const { dispatchDeleteDiscount } = discountStore();

const newItemVisible = ref(false);
const loading = ref(false);
const formData = ref({
	title: "",
	content: "",
	image: "",
	file: "",
	type: 4,
})
const editor = ref(null);

const fileFormData = ref(null);

const handleUploadChange = (rawFile) => {
	console.log(rawFile.raw.type);
	if (rawFile.raw.type !== 'image/jpeg' && rawFile.raw.type !== 'image/png') {
		ElMessage.error('Avatar picture must be JPG or PNG format!')
		return false
	} else if (rawFile.raw.size / 1024 / 1024 > 2) {
		ElMessage.error('Avatar picture size can not exceed 2MB!')
		return false
	}
	formData.value.image = URL.createObjectURL(rawFile.raw);
	formData.value.file = rawFile.raw;
	return true
}

const showNewItemDialog = () => {
	newItemVisible.value = true;
}

const addItem = async () => {
	console.log(formData.value);
	if (formData.value.title == "") {
		ElMessage.error('请输入标题。');
		return;
	}
	if (formData.value.content == "") {
		ElMessage.error('请输入内容。');
		return;
	}
	if (formData.value.image == "") {
		ElMessage.error('请上传图片。');
		return;
	}
	let submitFormData = new FormData();
	submitFormData.append("id", formData.value.id);
	submitFormData.append("title", formData.value.title);
	submitFormData.append("content", formData.value.content);
	submitFormData.append("image", formData.value.image);
	submitFormData.append("file", formData.value.file);
	submitFormData.append("type", formData.value.type);
	const loading = ElLoading.service({
		lock: true,
		text: "加载中...",
		background: "rgba(0, 0, 0, 0.7)",
	});
	if (formData.value.id != null) {
		await dispatchUpdateDiscount(submitFormData);
	} else {
		await dispatchAddDiscount(submitFormData);
	}
	await dispatchDiscounts({ type: 4 });
	formData.value = {
		title: "",
		content: "",
		image: "",
		file: "",
		type: 4,
	}
	newItemVisible.value = false;
	loading.close();
}

const editItem = (item) => {
	formData.value = item;
	console.log(formData.value);
	newItemVisible.value = true;
}

const deleteItem = async (id) => {
	ElMessageBox.confirm('确认删除已选中的数据项?', '警告', {
		confirmButtonText: '确定',
		cancelButtonText: '取消',
		type: 'warning',
	}).then(async () => {
		loading.value = true;
		await dispatchDeleteDiscount({ id });
		await dispatchDiscounts({ type: 4 });
		successResult();
		loading.value = false
	}).catch(() => { });
}

const resetItem = () => {
	formData.value = {
		title: "",
		content: "",
		image: "",
		file: "",
		type: 4,
	}
	newItemVisible.value = false;
}

const success = computed(() => {
	const { getSuccess } = storeToRefs(discountStore());
	return getSuccess.value;
});

const discountList = computed(() => {
	const { getDiscountList } = storeToRefs(discountStore());
	return getDiscountList.value;
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
			message: "操作失败。",
			type: "error",
		});
	}
}

onMounted(async () => {
	loading.value = true;
	await dispatchDiscounts({ type: 4 });
	loading.value = false;
})
</script>

<style lang="scss" scoped>
.avatar-uploader .avatar {
	width: 300px;
	height: 178px;
	display: block;
}
</style>

<style lang="scss">
.avatar-uploader .el-upload {
	border: 1px dashed var(--el-border-color);
	border-radius: 6px;
	cursor: pointer;
	position: relative;
	overflow: hidden;
	transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
	border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
	font-size: 28px;
	color: #8c939d;
	width: 178px;
	height: 178px;
	text-align: center;
}
</style>