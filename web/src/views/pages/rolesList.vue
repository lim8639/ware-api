<template>
    <div class="max">
        <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/rolesList' }">角色列表</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="main">
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="user_name" label="账号" width="180" />
                <el-table-column prop="password" label="密码" width="180" />
                <el-table-column prop="is_admin" label="权限" />
            </el-table>
        </div>
        <div class="paging">

            <el-pagination background layout="prev, pager, next" :page-size="state.pageSize" :total="state.total"
                @size-change="handleSizeChange" @current-change="handleCurrentChange" />
        </div>

    </div>
</template>
<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
import { ref, onMounted, reactive } from 'vue'
import { userListApi } from '@/util/request'

const tableData = ref([])
const state = reactive({
    pageSize: 3,
    page: 1,
    total: 0,
});

const handleSizeChange = (val) => {
    state.pageSize = val;
    userList();
};
const handleCurrentChange = (val) => {
    state.page = val;
    userList();
};
const userList = async () => {
    await userListApi({ pageNum: state.page, pageSize:3 }).then(res => {
        console.log('333', res);
        tableData.value = res.result.list
        state.total = res.result.total
    })
}



onMounted(() => {
    userList()
})

</script>

<style>
.max {
    padding: 5px 0;
    height: 100%;
}

.main {

    margin: 10px;
}

.paging {
    margin: 50px 0;
}
</style>