<!--  -->
<template>
    <div class="loginpage">
        <div class="item loginbg pic"></div>
        <div class="item log">
            <div class="closebtn" @click="closewin">
                <el-icon>
                    <Close />
                </el-icon>

            </div>
            <div class="logindiv">
                <div class="title">
                    {{ pkg.name }}
                </div>
                <el-form class="loginform" :model="ruleForm" :rules="rules" ref="formRef">
                    <div>
                        <el-input v-model:value="ruleForm.username" placeholder="Username" />
                    </div>
                    <div>
                        <el-input v-model:value="ruleForm.password" placeholder="Password" />
                    </div>
                </el-form>
                <el-button type="primary" block @click="submitForm(formRef)" class="loginbtn">
                    登录
                </el-button>
                <el-divider title-placement="center">
                    <span class="others">其他方式</span>
                </el-divider>
                <div class="wechat">
                    <i class="iconfont ld-weixin" id="minbtn" @click="wechatlogin"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router';
import { ipcRenderer } from 'electron'

import { Close } from '@element-plus/icons-vue'
import { ElMessage, FormInstance, FormRules } from 'element-plus'
import pkg from "@/../package.json"

const router = useRouter();

const formRef = ref<FormInstance>()
const ruleForm = reactive({
    username: 'admin',
    password: '123456'
})
const rules = reactive<FormRules>({
    username: {
        required: true,
        message: '请输入姓名',
        trigger: ['blur']
    },
    password: {
        required: true,
        message: '请输入密码',
        trigger: ['blur']
    }
})
const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            localStorage.setItem('x-auth-token', '12345')
            ElMessage({
                message: '登录成功.',
                type: 'success',
            })
            router.push('/')
        } else {
            console.log('error submit!', fields)
        }
    })
}
function handleValidateClick2() {
    if (formRef.value) {
        var tryvalidate: any = formRef.value
        tryvalidate.validate((errors: any) => {
            if (!errors) {
                localStorage.setItem('x-auth-token', '12345')
                ElMessage({
                    message: 'Congrats, this is a success message.',
                    type: 'success',
                })
                router.push('/')
            } else {
                ElMessage({
                    message: errors,
                    type: 'error',
                })
                // message.error('用户名密码错误')
            }
        })
    }
}
function wechatlogin() {
    // message.info("懒死，自己开发去...")
}
const closewin = () => {
    ipcRenderer.invoke("win-close")
}
</script>
<style lang='scss' scoped>
.loginpage {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-size: cover;
    background-position-y: top;
}

.loginpage .item {
    flex: 1;
    height: 100vh;
}

.loginbtn {
    width: 100%;
}

.title {
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
}

.loginform>* {
    margin-bottom: 16px;
}

.loginbg {
    background: url('@/assets/images/loginbg.svg') no-repeat center;
    background-size: 1920px 990px;
    background-color: #e8f2fe;
}

.closebtn {
    font-size: 40px;
    color: #62a1ff;
    position: fixed;
    top: 20px;
    right: 30px;
    cursor: pointer;
    transition: color 0.3s;
}

.closebtn:hover {
    color: #327ff1;
    transition: color 0.3s;
}

.log {
    display: flex;
    justify-content: center;
    align-items: center;
}

.logindiv {
    width: 400px;
}

.others {
    font-size: 12px;
    color: #999;
}

.wechat {
    text-align: center;
    font-size: 28px;
    color: #999;
    cursor: pointer;
    transition: color 0.5s;
}

.wechat:hover {
    color: #333;
    transition: color 0.5s;
}

.iconfont {
    font-size: 28px;
}
</style>