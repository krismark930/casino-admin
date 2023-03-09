<script lang="ts" setup>
import { ref, defineProps } from 'vue'
const OddValue = ref("1.95")
</script>
<template>
    <el-scrollbar>
        <el-row class="scrollbar-flex-content">
            <table class="TwoSide-table">
            <thead>
                <tr>第一球</tr>
                <tr>
                  <th>大</th>
                  <th>单</th>
                  <th>尾大</th>
                  <th>龙</th>
                  <th>小</th>
                  <th>双</th>
                  <th>尾小</th>
                  <th>虎</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <template v-for="m in 8" :key="m">
                        <td>1.95</td>
                    </template>
                </tr>
            </tbody>
            </table>
        </el-row>
    </el-scrollbar>
</template>
<script lang="ts" setup>
</script>
