

<template>
  <el-config-provider :locale="locale">
    <router-view v-slot="{ Component }">
      <transition mode="out-in" appear>
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </el-config-provider>
</template>
<script setup lang="ts">
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
import { settingStore } from '@/store/app'
import { ref } from 'vue';

const store = settingStore()
let locale = ref(localStorage.getItem('lang') === 'zhCn' ? zhCn : en)

store.$subscribe((mutation, state) => {
  locale.value = store.locale === 'zhCn' ? zhCn : en
})

</script>
<style lang="scss" scoped>
.aside {
  width: auto;
  max-width: 200px;
}

.common-layout,
.container,
.el-menu {
  height: 100%;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}
</style>
