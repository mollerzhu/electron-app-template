<!--  -->
<template>
    <div>
        <Titlebar></Titlebar>
        <div class="mainbody">
            <slot></slot>
        </div>
        <Statebar></Statebar>
    </div>
</template>

<script setup lang='ts'>
import Titlebar from './Titlebar.vue'
import Statebar from './Statebar.vue'
</script>

<style lang='scss' scoped>
</style>