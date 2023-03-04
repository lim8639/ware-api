<template>
    <div class="main">
        <div class="box">
            <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px"
                class="demo-ruleForm">
                <el-form-item prop="user_name">
                    <el-input v-model="ruleForm.user_name" autocomplete="off" placeholder="账号" />
                </el-form-item>

                <el-form-item prop="pass">
                    <el-input v-model="ruleForm.pass" type="password" autocomplete="off" placeholder="密码" />
                </el-form-item>
                <el-form-item prop="checkPass">
                    <el-input v-model="ruleForm.checkPass" type="password" placeholder="确定密码" autocomplete="off" />
                </el-form-item>



                <el-form-item>

                    <button class="button_log" @click="submitForm(ruleFormRef)">注册</button>
                </el-form-item>
            </el-form>
            <p class="tiaozhuang" @click="gotoLogin">点击跳转到登录页</p>
        </div>
    </div>
</template>
<script setup>
import { ElMessage, ElMessageBox } from 'element-plus'
// import type { Action } from 'element-plus'
import { useRouter } from 'vue-router'
import { register } from '@/api/index'
import { reactive, ref } from 'vue'
// import type { FormInstance } from 'element-plus'
import { registerApi } from "@/util/request"

const ruleFormRef = ref()
const router = useRouter()

function gotoLogin() {
    router.push({
        path: "/login"
    })
}


const validatename = (rule, value, callback) => {
    // 请输入4-10名称
    let reg = /(^[a-zA-Z0-9]{2,10}$)/
    if (value === '') {
        callback(new Error('请输入用户名'))
    } else if (!reg.test(value)) {
        callback(new Error('请输入2-10数字或英文'))
    } else {
        callback()
    }
}

const validatePass = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请输入密码'))
    } else {
        if (ruleForm.checkPass !== '') {
            if (!ruleFormRef.value) return
            ruleFormRef.value.validateField('checkPass', () => null)
        }
        callback()
    }
}
const validatePass2 = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请再次输入密码'))
    } else if (value !== ruleForm.pass) {
        callback(new Error("俩次密码输入不一致！"))
    } else {
        callback()
    }
}

const ruleForm = reactive({
    user_name: '',
    pass: '',
    checkPass: '',

})

const rules = reactive({
    user_name: [{ validator: validatename, trigger: 'blur' }],
    pass: [{ validator: validatePass, trigger: 'blur' }],
    checkPass: [{ validator: validatePass2, trigger: 'blur' }],

})

const submitForm = (formEl) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {

            registerApi({ user_name: ruleForm.user_name, password: ruleForm.pass }).then(res => {
                if (res.message === '用户注册成功') {
                    ElMessageBox.alert('注册成功！！！', {
                        confirmButtonText: '确定',
                        callback: () => {
                            // if (!formEl) return
                            // formEl.resetFields()
                        },
                    })
                }

            })




        } else {
            console.log('error submit!')
            return false
        }
    })
}




</script>

<style scoped>
.main {

    width: 100%;
    height: 100vh;
    background-color: aqua;
    position: relative;
}

.box {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: aliceblue;
    padding: 30px 100px 30px 0;
    border-radius: 5px;
}


.tiaozhuang {
    cursor: default;
    font-size: 10px;
    position: absolute;
    right: 3px;

}

.tiaozhuang:hover {
    color: #409EFF;
}

.button_log {
    color: #ffff;
    background-color: #409EFF;
    /* background:#35b451; */
    margin: 5px 0;
    padding: 5px 0;
    width: 200px;
    border: 1px;
    border-radius: 3px;
}
</style>