<template>
    <div class="main">
        <div class="left">

            <div class="box_name">{{ list.goods_name }}</div>
            <div class="box_img">
                <img :src="list.goods_img">
            </div>

        </div>
        <div class="right">


            <div class="right_author">作者:{{ list.goods_author }}</div>
            <div style="display: flex;">

                <div class="right_price">价格:<a style="color:red ;font-size: 20px;cursor:default">￥{{ list.goods_price }}</a>
                </div>

                <div class="right_price">库存：{{ list.goods_num }}</div>
            </div>


            <div class="right_briefing">
                简介:{{ list.goods_introduce }}
            </div>

            <div class="right_button">
                <el-button type="danger" @click="addCarts">加入购物车</el-button>
                <el-button @click="gotoBuy">立即购买</el-button>
            </div>

        </div>
    </div>
</template>


<script setup>
import { upGoodsCartsApi } from '@/util/request'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()

const route = useRoute() //获取到值

const list = route.query;


function ddd() {

    console.log('参数', list.id);
}

function gotoBuy() {

    // router.push({
    //             path: "/orderForm"
    //         })
}
function addCarts() {
   const id=Math.floor(list.id)

    upGoodsCartsApi({goods_id:id}).then(res => {
        console.log('返回的res', res);
    })

    console.log('加入购物车');
}
onMounted(() => {
    ddd()
})
</script >
<style scoped>
img {
    width: 100%;
    height: 100%;
}

.main {
    display: flex;
    justify-content: center;
    background: #F7F7F6;
}

.left {
    margin: 10px 0;
    width: 200px;
    height: 340px;
    padding: 50px;
    background-color: #FFFFFF;
}

.box_img {
    margin: 10px auto;
    width: 160px;
    height: 200px;
    background-color: antiquewhite;
}

.box_name {
    font-size: 30px;
}

.right {
    padding: 70px 0;
    margin: 10px 0;
    width: 600px;
    height: 300px;
    text-align: left;
    background-color: #FFFFFF;
}

.right_author {
    cursor: default;
    margin-top: 30px;

}

.right_price {
    cursor: default;
    flex: 0.5;
    margin-top: 30px;
}

.right_briefing {
    margin-top: 30px;
    width: 100%;
    height: 85px;
    cursor: default;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    /* 可以显示的行数，超出部分用...表示*/
    -webkit-box-orient: vertical;


    /* white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis; */
    /* background-color: aquamarine; */
}

.right_button {
    margin-top: 20px;
}
</style>