<template>
     <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/userList' }">用户列表</el-breadcrumb-item>
        </el-breadcrumb>
</template>
<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
</script>