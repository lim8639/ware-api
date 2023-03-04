<template>
    <div>
        <div>
            123
        </div>
        <div class="top">
            <div class="top_1">
                <h1>小蜜蜂二手书商城</h1>
            </div>
            <div class="top_2">111</div>
            <div class="top_3">
                <div  v-show="data.user_name =='' "><a @click="gotoLogin" >登录</a>/<a @click="gotoRegister">注册</a></div>
                <div style="display: flex; flex-direction: column;  "  v-show="data.user_name !=='' "><div style="font-size: 30px;">{{data.user_name }}</div><div @click="loginOut">退出</div></div>
                <div @click="gotoCarts"><el-icon>
                        <ShoppingCart />
                    </el-icon>购物车</div>
            </div>
        </div>
        <div class="main">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1"> <router-link to="/homeIndex">首页</router-link></el-menu-item>
                <el-menu-item index="2"><router-link to="/homehhh">第二页</router-link></el-menu-item>

                <el-menu-item index="3" disabled>Info</el-menu-item>
                <el-menu-item index="4">Orders</el-menu-item>
            </el-menu>

        </div>
        <div style="display: flex;">
            <div class="left">
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                    <el-menu-item index="1">
                        <el-icon>
                            <setting />
                        </el-icon>
                        <span>
                            <router-link to="/homeLiterature" style="text-decoration: none;">文学专业</router-link>
                        </span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <el-icon>
                            <setting />
                        </el-icon>
                        <span>
                            <router-link to="/homePhilosophy" style="text-decoration: none;">哲学专业</router-link>
                        </span>
                    </el-menu-item>
                    <el-menu-item index="3" >
                        <el-icon>
                            <setting />
                        </el-icon>
                        <span>化学专业</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <el-icon>
                            <setting />
                        </el-icon>
                        <span>数学专业</span>
                    </el-menu-item>
                    <el-menu-item index="5">
                        <el-icon>
                            <setting />
                        </el-icon>
                        <span>计算机专业</span>
                    </el-menu-item>
                    <el-menu-item index="6">
                        <el-icon>
                            <setting />
                        </el-icon>
                        <span>其它</span>
                    </el-menu-item>
                </el-menu>
                <div class="left_img">
                    <div class="left_img_a">
                        <img
                            src="https://tse3-mm.cn.bing.net/th/id/OIP-C.SBOm_5PJKuVkGT9auvMu8AHaFL?w=282&h=198&c=7&r=0&o=5&dpr=1.9&pid=1.7" />
                    </div>
                    <div></div>
                    <div class="left_img_a">
                        <img
                            src="https://tse2-mm.cn.bing.net/th/id/OIP-C.YVlKEPLPMdxhxYR4yARb3wHaEl?w=317&h=196&c=7&r=0&o=5&dpr=1.9&pid=1.7" />
                    </div>
                    <div></div>
                    <div class="left_img_a">
                        <img
                            src="https://tse4-mm.cn.bing.net/th/id/OIP-C.IUva0ca7L3RUtuHxlJE7xgHaFx?w=253&h=196&c=7&r=0&o=5&dpr=1.9&pid=1.7" />
                    </div>


                </div>




            </div>
            <div style="flex: 0.8;"><router-view></router-view></div>
        </div>
    </div>
</template>

<script setup>
import { ref ,onMounted} from 'vue'
import { useStore } from "vuex"
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useStore()
const activeIndex = ref('1')
const activeIndex2 = ref('1')
const data =ref([])
// 获取登录信息
const handleLogin=()=>{
    const list =localStorage.getItem("loginData")&&JSON.parse(localStorage.getItem("loginData"))
    // data.value=JSON.parse(JSON.stringify(list.res))
    data.value=list.res
    console.log('本地存储的数据', data.value.id);
    console.log('本地存储的数据', data.value.user_name);
    // console.log('本地存储的数据', list.res.user_name);
}


const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
}
function gotoLogin() {
    router.push({
        path: "/login"
    })
}
function gotoRegister() {
    router.push({
        path: "/register"
    })
}
function gotoCarts() {
    console.log('点击了');

    router.push({
        path: "/shoppingCart"
        // path: '/orderForm'
    })
}
const loginOut = () => {
    localStorage.removeItem("loginData")
    store.commit('setUserInfo', {})

    router.push({
        path: "/login"
    })
}
onMounted(() => {
    handleLogin()
})
</script>

<style scoped >


img {
    width: 100%;
    height: 100%;
}

.top {
    display: flex;
    height: 80px;
    width: 100%;
    background-color: aqua;
   
}

.top_1 {
    flex: 0.3;
    background-color: #CCFFFF;

}

.top_2 {
    flex: 0.5;
    background-color: #CCFFFF;
}

.top_3 {
    flex: 0.2;
    display: flex;
    align-items: center;
    cursor: default;
    justify-content: space-around;
    background-color: #CCFFFF;
}

.left {
    flex: 0.2;
    height: 62.5rem;
    background-color: #FFFFFF;
}

.left_img {

    width: 100%;
    height: 37.5rem;
    /* padding: .3125rem; */
    /* background-color: #475669; */
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    /* border: .0063rem solid #DCDFE6; */
}

.left_img_a {
    width: 90%;
    height: 7.5rem;
    background-color: aqua;
}
</style>