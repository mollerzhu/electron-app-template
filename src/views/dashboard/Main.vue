<!--  -->
<template>
    <div class="maincontent">
        <div class="logo-box">
            <img style="height:140px;" src="@/assets/electron.png">
            <span />
            <img style="height:140px;" src="@/assets/vite.svg">
            <span />
            <img style="height:140px;" src="@/assets/vue.png">
        </div>
        <HelloWorld msg="Vue 3 + TypeScript + Vite1" />
        <div class="static-public">
            {{ $t('home.place') }} <code>/public</code> {{ $t('home.folder') }}
            <img style="width:77px;" :src="'./node.png'">
        </div>
    </div>
</template>

<script setup lang='ts'>
import HelloWorld from '@/views/dashboard/HelloWorld.vue'
</script>

<style scoped lang="scss">
.maincontent {
    padding-top: 80px;
    text-align: center;
}

.logo-box {
    display: flex;
    width: 100%;
    justify-content: center;
}

.logo-box span {
    width: 74px;
}

.static-public {
    display: flex;
    align-items: center;
    justify-content: center;
}

.static-public code {
    background-color: #eee;
    padding: 2px 4px;
    margin: 0 4px;
    border-radius: 4px;
    color: #304455;
}
</style>