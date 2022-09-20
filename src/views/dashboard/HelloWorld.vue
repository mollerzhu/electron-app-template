<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()
const count = ref(0)

</script>

<template>
    <div>
        <h1>{{ msg }}</h1>
        <p>
            {{ $t('home.recomended') }}
            <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
            +
            <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
        </p>

        <p>{{ $t('home.see') }} <code>README.md</code> {{ $t('home.formore') }}</p>

        <p>
            <a href="https://vitejs.dev/guide/features.html" target="_blank">
                {{ $t('home.vitedocs') }}
            </a>
            |
            <a href="https://v3.vuejs.org/" target="_blank">{{ $t('home.vuedocs') }}</a>
        </p>

        <button type="button" @click="count++">count is: {{ count }}</button>
        <p>
            {{ $t('home.edit') }}
            <code>components/HelloWorld.vue</code> {{ $t('home.teshot') }}
        </p>
    </div>
</template>

<style scoped>
a {
    color: #42b983;
}

label {
    margin: 0 0.5em;
    font-weight: bold;
}

code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
}

.lang {
    display: flex;
    justify-content: center;
    gap: 4px;
    text-align: center;
}
</style>