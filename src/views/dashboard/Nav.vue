<template>
    <div>
        <window>
            <el-container>
                <el-aside width="200px">
                    <el-menu router default-active="main" class="el-menu-vertical-demo" @open="handleOpen"
                        @close="handleClose">
                        <el-menu-item index="main">
                            <template #title>
                                <el-icon>
                                    <Notebook />
                                </el-icon>
                                <span>首页</span>
                            </template>
                        </el-menu-item>
                        <el-menu-item index="func">
                            <el-icon>
                                <FolderRemove />
                            </el-icon>
                            <span>功能</span>
                        </el-menu-item>
                        <el-menu-item index="about">
                            <el-icon>
                                <Picture />
                            </el-icon>
                            <span>关于</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>
                    <el-scrollbar>
                        <router-view v-slot="{ Component, route }">
                            <transition name="fade" mode="out-in" appear>
                                <keep-alive>
                                    <component :is="Component" />
                                </keep-alive>
                            </transition>
                        </router-view>
                    </el-scrollbar>
                </el-main>
            </el-container>
        </window>
    </div>
</template>

<script setup lang="ts">
import Window from '@/windows/layout/Window.vue'
import { Notebook, FolderRemove, Reading, Picture } from '@element-plus/icons-vue';
const handleOpen = (key: string, keyPath: string[]) => {
    //console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    //console.log(key, keyPath)
}

</script>
<style scoped lang="scss">
.el-container {
    border-top: solid 1px var(--el-border-color);
    border-bottom: solid 1px var(--el-border-color);
}

.el-container,
.el-menu {
    height: 100%;
}

.el-main {
    padding: 0
}
</style> 