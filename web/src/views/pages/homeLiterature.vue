<template>
    <div>文学专业</div>
    <div class="mainbox">

        <div class="box" v-for="item in data" :key="item" @click="goToGoodsDetails(item)">
            <div class="box_img">
                <img :src="item.goods_img" style="width: 100%;height:100%">
            </div>
            <div class="box_name">
                <div>{{ item.goods_name }}</div>
            </div>
            <div class="box_price">价格：<a style="color: red;cursor:default;">￥{{ item.goods_price }}</a></div>
        </div>
        <div class="pager">
            <el-pagination background layout="prev, pager, next" :page-size="state.pageSize" :total="state.total"
                @size-change="handleSizeChange" @current-change="handleCurrentChange" />
        </div>

    </div>
</template>

<script setup>
import { reactive, onMounted, ref } from 'vue'
// import { useRouter } from 'vue-router'
import { productListApi } from '@/util/request'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()

const Route = useRoute() //获取到值
const data = ref({})
const state = reactive({
    pageSize: 8,
    page: 1,
    total: 0,
})


 let j = 0
const productList = async () => {
    await productListApi({ pageNum: state.page, pageSize: state.pageSize }).then(res => {
        // console.log('获取到的数据',res.result.list);
        // console.log('获取到的数据',res.result.list[1].goods_classify);
        console.log(res);
        state.total = res.result.total
        for (let i = 0; i < res.result.list.length; i++) {
           
            if (res.result.list[i].goods_classify == '1') {
                data.value[j++] = res.result.list[i]
            }
        }

      console.log('llll', data.value);
    //  const aa = JSON.parse(JSON.stringify(data.value));
    //  var bb = Object.keys( aa); 
    //     state.total=bb.length
        // console.log('8888', state.total);
        console.log('8888', bb.length);
       
        console.log('筛选的完成的数据', data.value);
        // console.log('999', state);
    })


}

function goToGoodsDetails(item) {
    console.log('iten',item);
    const list = JSON.parse(JSON.stringify(item))
    router.push({
        path: "/goodsDetails",
        query:list
    })
    console.log('点击了',list);
}

onMounted(() => {
    productList()
})


</script>

<style scoped>
.mainbox {
    display: flex;
    width: calc(100%-0.625rem);
    /* width: 100%; */
    min-height: 39.375rem;
    padding-left: 5rem;
    margin: .625rem;
    /* max-height:calc(100% - 3.75rem); */
    background-color: #FFFFFF;
    /* justify-content: center; */
    flex-flow: row wrap;
}

.pager {
    position: absolute;
    margin-top: 36.875rem;
    margin-left: 17.5rem;
}

.box {
    margin: .625rem .9375rem;
    border-radius: .3125rem;
    padding: .625rem;
    width: 160px;
    height: 260px;
    /* background-color:#174359; */
    background-color: #FFFFFF;
    border: 1px solid #DCDFE6;

}

.box_img {
    width: 100%;
    height: 10rem;
    /* background-color: rgb(196, 221, 68); */
}

.box_name {
    cursor: default;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    margin-top: .9375rem;
    background-color: azure;
}

.box_price {
    cursor: default;
    width: 100%;
    margin-top: .9375rem;
    background-color: azure;
}
</style>