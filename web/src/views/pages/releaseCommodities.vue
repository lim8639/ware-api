<template>
    <div>


        <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/releaseCommodities' }">发布商品</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="box">
            <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px" class="demo-ruleForm">
                <el-form-item label="书籍名称" prop="goods_name">
                    <el-col :span="8"> <el-input v-model="ruleForm.goods_name" /></el-col>
                </el-form-item>
                <el-form-item label="书籍作者" prop="goods_author">
                    <el-col :span="8"> <el-input v-model="ruleForm.goods_author" /></el-col>
                </el-form-item>
                <el-form-item label="书籍分类" prop="goods_classify">
                    <el-col :span="8"> <el-input v-model="ruleForm.goods_classify" /></el-col>
                   
                </el-form-item>

                <el-form-item label="商品价格" prop="goods_price">
                    <el-col :span="8"><el-input v-model.number="ruleForm.goods_price" /></el-col>
                </el-form-item>
                <el-form-item label="商品数量" prop="goods_num">
                    <el-col :span="8"><el-input v-model.number="ruleForm.goods_num" /></el-col>
                </el-form-item>
                <el-form-item label="图片地址" prop="goods_img">
                    <el-col :span="8"><el-input v-model="ruleForm.goods_img" /></el-col>
                </el-form-item>
                <el-form-item label="书籍简介" prop="goods_introduce">
                    <el-col :span="8"><el-input v-model="ruleForm.goods_introduce"  type="textarea" /></el-col>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="submitForm(ruleFormRef)">发布商品</el-button>
                    <!-- <el-button @click="resetForm(ruleFormRef)">Reset</el-button> -->
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>


<script setup>
import { reactive, ref } from 'vue'
import { onCommoditiesApi } from '@/util/request'
import { ElMessage } from 'element-plus'
// import type { FormInstance } from 'element-plus'

const ruleFormRef = ref()

const checkAge = (rule, value, callback) => {
    if (!value) {
        return callback(new Error('Please input the age'))
    }
    setTimeout(() => {
        if (!Number.isInteger(value)) {
            callback(new Error('Please input digits'))
        } else {
            if (value < 18) {
                callback(new Error('Age must be greater than 18'))
            } else {
                callback()
            }
        }
    }, 1000)
}
// const validategoods_name = (rule, value, callback) => {

//     if (value === '') {
//         callback(new Error('请输入商品名称'))
//     } else {
//         if (ruleForm.goods_num !== '') {
//             if (!ruleFormRef.value) return
//             ruleFormRef.value.validateField('goods_num', () => null)
//         }
//         callback()
//     }
// }

// const validategoods_price = (rule, value, callback) => {

//     if (value === '') {
//         callback(new Error('请输入商品价格'))
//     } else {
//         if (ruleForm.goods_price !== '') {
//             if (!ruleFormRef.value) return
//             ruleFormRef.value.validateField('goods_price', () => null)
//         }
//         callback()
//     }
// }

// const validategoods_num = (rule, value, callback) => {

//     if (value === '') {
//         callback(new Error('请输入商品数量'))
//     } else {
       
//         callback()
//     }
// }
// const validategoods_img = (rule, value, callback) => {

//     if (value === '') {
//         callback(new Error('请输入图片地址'))
//     } else {
//         if (ruleForm.goods_img !== '') {
//             if (!ruleFormRef.value) return
//             ruleFormRef.value.validateField('goods_img', () => null)
//         }
//         callback()
//     }
// }



const ruleForm = reactive({
    goods_name: null,
    goods_price: null,
    goods_author: null,
    goods_introduce: null,
    goods_num: null,
    goods_img: null,
    goods_classify: null,
})

const rules = reactive({
    goods_name: [{required:true,message:'请填写书籍名称', trigger: 'blur' }],
    goods_classify: [{required:true,message:'请填写书籍分类', trigger: 'blur' }],
    goods_price: [{required:true,message:'请填写书籍价格', trigger: 'blur' }],
    goods_num: [{required:true,message:'请填写书籍数量', trigger: 'blur' }],
    goods_img: [{required:true,message:'请填写书籍图片地址', trigger: 'blur' }],
    goods_author: [{required:true,message:'请填写作者姓名', trigger: 'blur' }],
    goods_introduce: [{required:true,message:'请填写书籍简介', trigger: 'blur' }],

})



const submitForm = (formEl) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            console.log(888);
            onCommoditiesApi(ruleForm).then(res => {
                console.log('666', res);
                if (res.message == '发布商品成功') {
                    ElMessage({
                        message: '图书发布成功',
                        type: 'success',
                    })
                   
                    ruleForm.goods_name= '',
                    ruleForm.goods_price= '',
                    ruleForm.goods_author= '',
                    ruleForm.goods_introduce= '',
                    ruleForm.goods_num= '',
                    ruleForm.goods_img='',
                    ruleForm.goods_classify=''

                }
                
            })

        } else {
            console.log('error submit!')
            return false
        }
    })
}

</script>

<style>
.box {
    /* position: fixed; */
    /* top: 50%;
    left: 50%; */
    /* transform: translate(-50%, -50%); */
    margin: 10px;
    background-color: aliceblue;
    padding: 30px 10px 30px 0;
    border-radius: 5px;
    background-color: #CCFFFF
}
</style>