<!--  -->
<template>
    <div class="statebar">
        <div>Status bar</div>
        <div class="update-progress" v-if="percentbar">
            <el-progress :percentage="percent" :show-text="false" />
        </div>

    </div>
</template>

<script setup lang='ts'>
import { ipcRenderer } from 'electron';
import { ref } from 'vue';
import { ElMessage } from 'element-plus'
let percent = ref(0)
let percentbar = ref(false)
ipcRenderer.on('updatemessage', function (event, arg) {
    if (arg.message.percent) {
        percentbar.value = true
        percent.value = arg.message.percent
    } else {
        percentbar.value = false
        ElMessage({
            type: "success",
            message: arg.title
        })
    }
})
</script>

<style lang='scss' scoped>
.statebar {
    height: 30px;
    font-size: 12px;
    line-height: 30px;
    padding: 0 8px;
    display: flex;
    justify-content: space-between;
}

.update-progress .el-progress--line {
    padding: 12px 4px;
    width: 150px;
}
</style>