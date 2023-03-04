<template>
    <div class="max">
        <div class="top">
            <div style="font-size: 1.25rem;margin-left: 1.25rem;">购物车(全部<a style="font-weight:bold;">{{ tableData.length
            }}</a>)
            </div>
            <div style="display: flex;">
                <div>
                    <a>已选商品(不包含运费)</a> <a
                        style="font-family: Verdana,Arial;font-size: 1.375rem;color: #FF5000;font-weight: 500; margin-left: .625rem;">￥{{
                            allPrice }}</a>
                </div>
                <div style="margin: 0rem .625rem;">
                    <el-button @click="gotoorderForm">结算</el-button>
                </div>
            </div>

        </div>


        <div class="main">
            <el-table :data="tableData" style="width: 100%" @select="selectL" 
                ref="multipleTable">
                <el-table-column type="selection" width="55" />
                <el-table-column property="" label="商品图片" width="150">
                    <template #default="scope">
                        <div class="img" style="display: flex;width: 6.25rem;,height: 100xp;  align-items: center">
                            <el-image :src="scope.row.goods_img" min-width="4.375rem" height="3.125rem" />
                        </div>
                    </template>
                </el-table-column>
                <el-table-column property="goods_info.goods_name" label="商品名称" width="300">
                    <template #default="scope">
                        <div class="goods_name">
                            <div>{{ scope.row.goods_name }}</div>
                            <div style="margin-top: 1.25rem; font-size: .625rem;">发货时间：现货 付款后48小时内发货</div>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column property="goods_info.goods_price" label="价格" width="120">
                    <template #default="scope">
                        <div class="goods_price">
                            <div style="font-size: 1.25rem; color: red;">￥{{ scope.row.goods_price }}</div>
                        </div>
                    </template>
                </el-table-column>

                <el-table-column label="操作">
                    <template #default="scope">
                        <el-button type="danger" @click="removeCarts(scope.row.id)"> 移除购物车</el-button>
                    </template>

                </el-table-column>


            </el-table>
        </div>
    </div>
</template>

<script setup>

import { getGoodsCartsListApi, removeCartsApi } from '@/util/request'
import { ref, onMounted } from 'vue'
import { ElTable } from 'element-plus'
import { useRouter } from 'vue-router'
import { get } from 'lodash';

const router = useRouter()


const multipleTable = ref()
const allPrice = ref(0)
// const goods_total = ref()
// 已选择商品价格
function selectL(selection, row) {
    // console.log('666', selection);
    // console.log('row', row);
    if (JSON.parse(JSON.stringify(selection)).length === 1) {
        allPrice.value = JSON.parse(JSON.stringify(selection))[0].goods_price * 1;
    } else if (JSON.parse(JSON.stringify(selection)).length === 0) {
        allPrice.value = 0
    } else {
        const index = JSON.parse(JSON.stringify(selection)).findIndex(item => item.id === row.id)

        if (index === -1) {
            allPrice.value = allPrice.value - row.goods_price * 1
        } else {
            allPrice.value += row.goods_price * 1
        }
    }

    // console.log('价格',list);
    // for (var i = 0; i < list.length; i++) {
    //     console.log(list[i]);
    //     // const allPrice = list[i].goods_price * 1
    //     // const num = list[i].goods_num * 1
    //     // console.log('jjj', list[i].goods_price * 1);
    //     // console.log('jjj', list[i].goods_num * 1);
    //     // goods_total.value = price * num
    //     // console.log('一行商品价格',goods_price.value);


    //     allPrice.value += parseInt(list[i].goods_price * 1)
    //     console.log('价格', allPrice.value);

    //     // console.log('总价',allPrice.value);
    //     //     for(let i =1;i<=list.length;i++){
    //     //     allPrice.value +=goods_total
    //     //     console.log('总价',allPrice.value);
    //     // }

    // }



}



function gotoorderForm() {
    router.push({
        path: '/orderForm'
    })
}


const tableData = ref([])
function getGoodsCartsList() {
    getGoodsCartsListApi().then(res => {
        console.log('获取购物车列表', res.result)
        console.log('获取购物车列表222', res)

        let array_data = []
        for (let i = 0; i < res.result.list.length; i++) {
            if (res.result.list[i].goods_info != null) {
                array_data.push(res.result.list[i].goods_info)
                // array_data.push(res.result.list[i])

                // console.log(res.result.list[i].id);
            }
            // array_data[array_data.length] = res.result.list[i].goods_info
        }
        //    console.log('3333',array_data);
        tableData.value = array_data
        // tableData.number = array_data.number

    })

}

function removeCarts(id) {
    console.log('id',id);
   let ids=[]
   ids.push(id)

    removeCartsApi(ids).then(res => {

    })
}




onMounted(() => {
    getGoodsCartsList()
   
})
</script>

<style scoped>
.max {
    background-color: #FFFFCC;
    padding: 1.25rem 0;

}

.top {
    border-radius: .625rem .625rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1.25rem 6.25rem;
    width: calc(100%-0.625rem);
    height: 5rem;
    background-color: aquamarine;
}

.main {
    /* position: absolute; */
    margin: 1.25rem 6.25rem;
    width: calc(100%-0.625rem);
    height: auto;
    background-color: aqua;
}

.goods_name {
    font-size: .9375rem;
}
</style>