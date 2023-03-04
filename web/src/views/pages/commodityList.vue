<template>
    <div class="max">
        <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/userList' }">商品列表</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="main">
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="goods_name" label="书籍名称" width="100" />
                <el-table-column prop="goods_author" label="作者" width="100" />
                <el-table-column prop="goods_price" label="价格(元)" width="60" />
                <el-table-column prop="goods_introduce" label="简介" show-overflow-tooltip="true" width="200" />
                <el-table-column prop="goods_num" label="数量" width="100" />
                <el-table-column label="商品图片">
                    <template #default="scope">
                        <div class="img" style="display: flex;width: 50px;,height: 50xp;  align-items: center">
                            <el-image :src="scope.row.goods_img" min-width="70px" height="50px" />
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template #default="scope">
                        <div style="display: flex;">
                            <el-button @click="outCommodity(scope.row.id)">下架商品</el-button>
                            <el-button @click="handleClose(scope.row)">修改商品</el-button>
                        </div>
                    </template>
                </el-table-column>

            </el-table>


            <!-- 弹出窗口 -->
            <el-dialog modal="true" show-close="false" v-model="dialogVisible1" title="修改商品" width="30%"
                :before-close="dialogVisible = false">
                <div>
                    <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px"
                        class="demo-ruleForm">
                        <el-form-item label="商品名称" prop="goods_name">
                            <el-input v-model="ruleForm.goods_name" autocomplete="off" />
                        </el-form-item>
                        <el-form-item label="书籍作者" prop="goods_author">
                            <el-input v-model="ruleForm.goods_author" autocomplete="off" />
                        </el-form-item>
                        <el-form-item label="价格（元）" prop="goods_price">
                            <el-input v-model="ruleForm.goods_price" autocomplete="off" />
                        </el-form-item>
                        <el-form-item label="数量" prop="goods_num">
                            <el-input v-model.number="ruleForm.goods_num" />
                        </el-form-item>
                        <el-form-item label="图片地址" prop="goods_img">
                            <el-input v-model="ruleForm.goods_img" autocomplete="off" />
                        </el-form-item>
                        <el-form-item label="图书简介" prop="goods_introduce">
                            <el-input  type="textarea" v-model="ruleForm.goods_introduce" autocomplete="off" />
                        </el-form-item>
                        <el-form-item>
                            <el-button class="submitForm" type="primary" @click="submitForm(ruleFormRef)">确定修改</el-button>
                            <!-- <el-button @click="resetForm(ruleFormRef)">Reset</el-button> -->
                        </el-form-item>
                    </el-form>
                </div>
                <!-- <template #footer>
                    <span class="dialog-footer">
                     
                        <el-button type="primary" @click="definiteModification">
                           关闭窗口
                        </el-button>
                    </span>
                </template> -->
            </el-dialog>


            <div class="paging">
              
                <el-pagination background layout="prev, pager, next" :page-size="state.pageSize" :total="state.total"
                    @size-change="handleSizeChange" @current-change="handleCurrentChange" />



            </div>

        </div>
    </div>
</template>
<script setup>
import { productListApi, outCommodityApi,modifyGoodsApi } from '@/util/request'
import { ArrowRight } from '@element-plus/icons-vue'

import { onMounted, reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { toRaw } from 'vue'

// import { ElMessageBox } from 'element-plus'

const dialogVisible = ref(false)
const dialogVisible1 = ref(false)


const state = reactive({
    pageSize: 3,
    page: 1,
    total: 0,
});

const tableData = ref([])


const handleSizeChange = (val) => {
    state.pageSize = val;
    productList();
};
const handleCurrentChange = (val) => {
    state.page = val;
    
    productList();
};

const productList = async () => {
    await productListApi({ pageNum: state.page, pageSize: state.pageSize }).then(res => {
        console.log('数据', res);
        tableData.value = res.result.list
        state.total = res.result.total
        console.log(state.total);
        console.log('999', state);
    })

  
}


const outCommodity = async (id) => {

    outCommodityApi(id).then(res => {
        console.log('666', id);
        productList()

    })
}

// 表单
const ruleFormRef = ref()



// const validategoods_name = (rule, value, callback) => {
//     if (value === '') {
//         callback(new Error('Please input the password'))

//     } else {
//         callback()
//     }
// }
// const validategoods_price = (rule, value, callback) => {
//     if (value === '') {
//         callback(new Error('Please input the password'))

//     } else {
//         callback()
//     }
// }
// const validategoods_num = (rule, value, callback) => {
//     if (value === '') {
//         callback(new Error('Please input the password'))

//     } else {
//         callback()
//     }
// }
// const validategoods_img = (rule, value, callback) => {
//     if (value === '') {
//         callback(new Error('Please input the password'))

//     } else {
//         callback()
//     }
// }


const ruleForm = ref({
    // id:'',
    // goods_img: 3,
    // goods_num: 1,
    // goods_price: 0,
    // goods_name: 0,

})

const rules = reactive({
    // goods_name: [{ validator: validategoods_name, trigger: 'blur' }],
    // goods_price: [{ validator: validategoods_price, trigger: 'blur' }],
    // goods_num: [{ validator: validategoods_num, trigger: 'blur' }],
    // goods_img: [{ validator: validategoods_img, trigger: 'blur' }],
    goods_name: [{required:true,message:'请填写商品名称', trigger: 'blur' }],
    goods_price: [{required:true,message:'请填写商品价格', trigger: 'blur' }],
    goods_num: [{required:true,message:'请填写商品数量', trigger: 'blur' }],
    goods_img: [{required:true,message:'请填写商品图片地址', trigger: 'blur' }],
    goods_author: [{required:true,message:'请填写作者姓名', trigger: 'blur' }],
    goods_introduce: [{required:true,message:'请填写图书简介', trigger: 'blur' }],
})

// 存储商品id
const id=ref()

const handleClose = (data) => {
    dialogVisible1.value = true
    ruleForm.value = data
    console.log('数据222', data);
    let ids=data.id;
    id.value=ids
    console.log('商品id',id.value);
}
const xgList=ref({
    goods_introduce:'',
    goods_author:'',
     goods_img: '',
    goods_num: '',
    goods_price: '',
    goods_name: '',
})

let shangpin={};

let sp={};

// 点击修改
const submitForm = (formEl) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            xgList.value.goods_img=ruleForm.value.goods_img
            xgList.value.goods_num=ruleForm.value.goods_num
            xgList.value.goods_price=ruleForm.value.goods_price
            xgList.value.goods_name=ruleForm.value.goods_name
            xgList.value.goods_author=ruleForm.value.goods_author
            xgList.value.goods_introduce=ruleForm.value.goods_introduce
            console.log('打印',xgList.value);

            // shangpin=toRaw(xgList.value)
            // console.log(shangpin);

            shangpin=JSON.parse(JSON.stringify(xgList.value))

            sp=JSON.stringify(shangpin)
            
             
           
            
        //    修改商品
            modifyGoodsApi(id.value,sp).then(res=>{
                console.log('修改的数据',res);
            })
            
            ElMessage({
                message: '修改成功',
                type: 'success',
            })

            setTimeout(() => {
                dialogVisible1.value = false
            }, 2000);
            console.log('submit!')
        } else {
            console.log('error submit!')
            return false
        }
    })
}





onMounted(() => {
    productList()
})

</script >

<style scoped>
.dialog-footer button:first-child {
    margin-right: 10px;
}

.submitForm {
    /* margin-left: 100px; */
    margin: 20px 0 0 120px;
    bottom: 0px;
}



.img {
    display: flex;
    width: 50px;
    height: 50xp;
    align-items: center,
}
.max {

padding: 5px 0;
height: 100%;
/* background-color: antiquewhite; */
}
.main {

    margin: 10px;
}

.paging {

    margin: 50px 0;
}
</style>