<!--  -->
<template>
    <router-view v-slot="{ Component, route }">
        <transition mode="out-in" appear name="fade">
            <keep-alive>
                <component :is="Component" />
            </keep-alive>
        </transition>
    </router-view>

</template>
<script setup lang='ts'>
</script>
<style lang='scss' scoped>
</style> 