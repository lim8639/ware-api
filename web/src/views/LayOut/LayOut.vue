<template>
    <div class="common-layout">
        <el-container>
            <el-header class="top">
                <div>二手书销售后台系统</div>
                <div>

                    <el-button type="primary" @click="loginOut">退出</el-button>
                    <el-button type="primary" @click="loginOut1">注册</el-button>
                </div>

            </el-header>
            <el-container>
                <el-aside width="200px" class="side">
                    <el-menu background-color="none" text-color="#fff" default-active="2" class="el-menu-vertical-demo"
                        @open="handleOpen" @close="handleClose">
                        <el-sub-menu index="1">
                            <template #title>
                                <el-icon>
                                    <location />
                                </el-icon>
                                <span>账号管理</span>
                            </template>
                            <router-link to="/userList">
                                <el-menu-item index="1-2">
                                    用户列表
                                </el-menu-item>
                            </router-link>
                        </el-sub-menu>

                        <el-sub-menu index="2">
                            <template #title>
                                <el-icon>
                                    <location />
                                </el-icon>
                                <span>账号管理</span>
                            </template>
                            <router-link to="/userList">
                                <el-menu-item index="2-1">
                                    用户列表
                                </el-menu-item>
                            </router-link>
                        </el-sub-menu>

                        <el-sub-menu index="3">
                            <template #title>
                                <el-icon>
                                    <location />
                                </el-icon>
                                <span>角色管理</span>
                            </template>
                            <router-link to="/rolesList">
                                <el-menu-item index="3-1">
                                    角色列表
                                </el-menu-item>
                            </router-link>
                        </el-sub-menu>

                        <el-sub-menu index="4">
                            <template #title>
                                <el-icon>
                                    <location />
                                </el-icon>
                                <span>商品管理</span>
                            </template>
                            <router-link to="/commodityList">
                                <el-menu-item index="4-1">
                                    商品列表
                                </el-menu-item>
                            </router-link>
                            <router-link to="/releaseCommodities">
                                <el-menu-item index="4-2">
                                    发布商品
                                </el-menu-item>
                            </router-link>
                        </el-sub-menu>

                        <el-sub-menu index="5">
                            <template #title>
                                <el-icon>
                                    <location />
                                </el-icon>
                                <span>订单管理</span>
                            </template>
                            <router-link to="/orderList">
                                <el-menu-item index="5-1">
                                    订单列表
                                </el-menu-item>
                            </router-link>
                            <!-- <router-link to="/releaseCommodities">
                                <el-menu-item index="4-2">
                                    发布商品
                                </el-menu-item>
                            </router-link> -->
                        </el-sub-menu>
                    </el-menu>

                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script setup>
import { useStore } from "vuex"
import { useRouter } from 'vue-router'
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key, keyPath) => {
    console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
    console.log(key, keyPath)
}



const router = useRouter()
const store = useStore()
const loginOut = () => {
    localStorage.removeItem("loginData")
    store.commit('setUserInfo', {})

    router.push({
        path: "/login"
    })
}
const loginOut1 = () => {


    router.push({
        path: "/register"
    })
}


</script>
<style scoped>
a {
    text-decoration: none;
}

.router-link-active {
    text-decoration: none;
}

.router-link-active {
    text-decoration: none;
}

.top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: aqua;

}

.side {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: rgb(18, 20, 20);
}
</style>