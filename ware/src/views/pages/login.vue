<template>
    <div class="main">
        <div class="box">
            <el-form ref="formRef" :model="loginData" label-width="100px" class="demo-dynamic">
                <el-form-item prop="user_name" label="用户名" :rules="[
                    {
                        required: true,
                        message: '必须填',
                        trigger: 'blur',
                    },
                ]">
                    <el-input v-model="loginData.user_name" />
                </el-form-item>
                <el-form-item prop="password" label="密码" :rules="[
                    {
                        required: true,
                        message: '必须填',
                        trigger: 'blur',
                    },
                ]">
                    <el-input v-model="loginData.password" />
                </el-form-item>

            </el-form>

            <div class="mb-2 flex items-center text-sm">
                <el-radio-group v-model="radio">
                    <el-radio :label="3">用户端</el-radio>
                    <el-radio :label="6">管理员</el-radio>
                  
                </el-radio-group>
            </div>
            <div><button class="button_log" @click="handleLogin">登录</button></div>
            <p class="tiaozhuang" @click="gotoRrgister">没有账号？点击跳转注册</p>
        </div>
    </div>
</template>
<script>
import { reactive, toRefs, ref } from 'vue'
import { useStore } from "vuex"
import { useRouter } from 'vue-router'
import { loginApi } from "@/util/request"
import { ElMessage } from 'element-plus'

export default {
    name: 'login',
    setup() {
        const radio = ref(3)
        const store = useStore()
        const router = useRouter()
        const count = store.state.count
        const data = reactive({
            loginData: {
                user_name: '',
                password: '',
            },
        })
        function gotoRrgister() {
            router.push({
                path: "/register"
            })
        }
        const handleLogin = async () => {
            //    请求后台接口
            await loginApi(data.loginData).then(res => {
                // store.commit('setUserInfo', res.result)
                // localStorage.setItem("loginData", JSON.stringify(res.result))
                console.log("登录的返回值", res);
                if (!res.result == '') {

                    store.commit('setUserInfo', res.result)
                    localStorage.setItem("loginData", JSON.stringify(res.result))
                }


                ElMessage({
                    message: res.message,
                    type: "success"
                })
                 // 跳转/user
                 if (radio.value === 6) {
                router.push({
                    path: "/index"
                    // path: "/homePage"
                })
            } else {
                router.push({
                    // path: "/index"
                    path: "/homePage"
                })
            }

                
            }).catch(err => {
                console.log(err);
            })
           

        }

        // vuex更改语法
        // console.log("修改前getters",store.getters.countStatus);
        // const handleLogin=()=>{
        //     // store.commit('setCount',100)
        //     store.dispatch('setCountPromise',10).then(res=>{
        //         alert("修改成功")
        //     }).catch(err=>{
        //         alert(err)
        //     });
        //     console.log(store.state.count);
        //     console.log("修改之后",store.getters.countStatus);
        // }
        return {
            radio,
            ...toRefs(data),
            handleLogin,
            gotoRrgister
        }
    }
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
    padding: 30px 50px;
    border-radius: 5px;
}


.button_log {
    color: #ffff;
    background-color: #409EFF;
    /* background:#35b451; */
    margin: 10px 0;
    width: 260px;
    border: 1px;
    padding: 5px 0;
    border-radius: 3px;
}

.tiaozhuang {
    cursor: default;
    font-size: 10px;
    position: absolute;
    right: 3px;

}

.button_log {
    color: #ffff;
    background-color: #409EFF;
    /* background:#35b451; */
    margin: 5px 0;
    width: 200px;
    border: 1px;
    border-radius: 3px;
}

.tiaozhuang:hover {
    color: #409EFF;
}
</style>