<template>
    <div class="max">
        <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/orderList' }">订单列表</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="main">
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="order_number" label="订单号" width="180" />
                <el-table-column prop="goods_info" label="商品信息" width="180" />
                <el-table-column prop="total" label="订单总金额" width="180" />
                <el-table-column prop="status" label="订单状态" />
            </el-table>
        </div>
    </div>
</template>
<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
import { ref, onMounted } from 'vue'
import { orderListApi } from '@/util/request'
const tableData = ref([])

const orderList = async () => {
    orderListApi().then(res => {
        console.log('888', res.result.list);
       
        tableData.value=res.result.list
        // console.log('888',tableData.value);

    })
}


onMounted(() => {
    orderList()
})
</script>

<style>
.max {

    padding: 5px 0;
    height: 100%;
    /* background-color: antiquewhite; */
}

.main {

    margin: 10px;
}
</style>