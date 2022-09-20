<!--  -->
<template>
    <div id="titlebar">
        <img class="softlogo" src="@/assets/images/32.png" />
        <span class="maintitle">{{ pkg.name }}</span>
        <ul class="controlbtn">
            <li @click="toggleDark()">
                <i class="iconfont ld-dark" id="changeT"></i>
            </li>
            <li @click="minwin">
                <i class="iconfont ld-zuixiaohua" id="minbtn"></i>
            </li>
            <li @click="maxwin">
                <i class="iconfont ld-zuidahua" id="maxbtn"></i>
            </li>
            <li @click="closewin">
                <i class="iconfont ld-closebtn" id="closebtn"></i>
            </li>
        </ul>
    </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue';
import { ipcRenderer } from 'electron';
import { toggleDark } from '@/composables';
import pkg from '@/../package.json'
import '@/styles/layout.scss'
let pageinfo = ref({
    pageid: null
});

const minwin = () => {
    ipcRenderer.invoke("win-min")
}
const maxwin = () => {
    ipcRenderer.invoke("win-max")
}
const closewin = () => {
    ipcRenderer.invoke("win-close", pageinfo.value.pageid)
}
</script>
