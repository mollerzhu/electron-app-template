<!--  -->
<template>
    <div class="cards">
        <div class="cards-item">
            <el-row>
                <el-col>
                    <el-card shadow="hover">
                        <h3>{{ $t('function.sqlite') }}</h3>
                        <p>{{ $t('function.sqlitep') }}</p>
                        <div>
                            <el-button @click="showSQL" type="primary">{{ $t('function.sqlitebtn') }}</el-button>
                            <span class="code">
                                {{ $t('function.dbfile') }}: (./static/db.db)
                            </span>
                        </div>
                    </el-card>
                </el-col>
                <el-col>
                    <el-card shadow="hover">
                        <h3>{{ $t('function.update') }}</h3>
                        <div>
                            <el-button @click="checkupdate" type="success">{{ $t('function.checkupdate') }}</el-button>
                        </div>
                    </el-card>
                </el-col>
                <el-col>
                    <el-card shadow="hover">
                        <h3>{{ $t('function.window') }}</h3>
                        <div>
                            <el-button @click="childwindow()" type="primary">{{ $t('function.childwindow') }}
                            </el-button>
                        </div>
                    </el-card>
                </el-col>
                <el-col>
                    <el-card shadow="hover">
                        <h3>{{ $t('function.changetheme') }}</h3>
                        <p>{{ $t('function.themep') }}</p>
                        <div>
                            <el-button @click="toggleDark()" type="success">{{ $t('function.changebtn') }}</el-button>
                        </div>
                    </el-card>
                </el-col>
                <el-col>
                    <el-card shadow="hover">
                        <h3>{{ $t('function.i18n') }}</h3>
                        <p>
                            {{ $t('function.i18ntest') }}
                        </p>
                        <div style="margin:12px 0">{{ $t('function.i18nlang') }}</div>
                        <div style="margin:12px 0">
                            <el-date-picker v-model="datemodel" type="date" :placeholder="$t('function.pickdate')" />
                        </div>
                        <div>
                            <el-radio-group v-model="lang" @change="changelang">
                                <el-radio-button label="zhCn">中文</el-radio-button>
                                <el-radio-button label="en">English</el-radio-button>
                            </el-radio-group>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script setup lang='ts'>
import sqlite3 from "sqlite3"
import { ElMessage } from 'element-plus'
import { toggleDark } from '@/composables';
import { settingStore } from '@/store/app'
import { ref } from "vue";
import { ipcRenderer } from "electron";
let sqldata: string;


//process.env.NODE_ENV =  'production' or 'development'

const db = new sqlite3.Database('./static/db.db', (error: any) => {
    if (error) {
        console.log("error", error)
        return
    }
    console.log("[sqlite3] connect success.")
    db.all("select * from product", function (err: any, res: {}[]) {
        if (!err) {
            sqldata = JSON.stringify(res[0])
        }
        else { console.log(err) }
    })
})

function showSQL() {
    ElMessage({
        message: sqldata,
        type: 'success',
    })
}

let lang = ref();
lang.value = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'zhCn'
const store = settingStore()
const changelang = () => {
    store.SET_LOCALE(lang.value)
}
const datemodel = ''

//update
function checkupdate() {
    ipcRenderer.invoke('check-update')
}
//child window
function childwindow() {
    ipcRenderer.invoke('child-window')
}
</script>

<style lang='scss' scoped>
.datepick {
    display: flex;
    gap: 8px;
}

.cards {
    text-align: center;
    padding: 40px 0;
}

.cards-item {
    max-width: 800px;
    margin: auto
}

.el-card {
    margin-bottom: 20px;
    text-align: left;
}
</style>