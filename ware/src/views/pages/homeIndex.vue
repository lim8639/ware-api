<template>
    <div class="mian">
        <!-- <div class="left">
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                <el-menu-item index="1">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <span>文学专业</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <span>哲学专业</span>
                </el-menu-item>
                <el-menu-item index="3">
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
                    <img src="https://tse3-mm.cn.bing.net/th/id/OIP-C.SBOm_5PJKuVkGT9auvMu8AHaFL?w=282&h=198&c=7&r=0&o=5&dpr=1.9&pid=1.7"/>
                </div>
                <div></div>
                <div class="left_img_a">
                    <img src="https://tse2-mm.cn.bing.net/th/id/OIP-C.YVlKEPLPMdxhxYR4yARb3wHaEl?w=317&h=196&c=7&r=0&o=5&dpr=1.9&pid=1.7"/>
                </div>
                <div></div>
                <div class="left_img_a"> 
                    <img src="https://tse4-mm.cn.bing.net/th/id/OIP-C.IUva0ca7L3RUtuHxlJE7xgHaFx?w=253&h=196&c=7&r=0&o=5&dpr=1.9&pid=1.7"/>
                </div>
               
            </div>
        </div> -->


        <div class="right">
            <div class="block text-center">
                <el-carousel height="18.75rem">
                    <el-carousel-item v-for="item in img" :key="item">
                        <el-image style="width: 100%; height: 100%" :src="item.img" :fit="fit" />
                        <!-- <h3 class="small justify-center" text="2xl">{{ item }}</h3> -->
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="mainbox">

                <div class="box" v-for="item in data" :key="item" @click="goToGoodsDetails(item)">
                    <div class="box_img">
                        <img :src="item.goods_img" style="width: 100%;height:100%">
                    </div>
                    <div class="box_name"><div>{{ item.goods_name }}</div></div>
                    <div class="box_price">价格：<a style="color: red;cursor:default;">￥{{ item.goods_price }}</a></div>
                </div>
                <div class="pager">
                    <el-pagination background layout="prev, pager, next" :page-size="state.pageSize" :total="state.total"
                        @size-change="handleSizeChange" @current-change="handleCurrentChange" />
                </div>

            </div>
        </div>

    </div>
</template>

<script setup>
import { reactive ,onMounted,ref} from 'vue'
// import { useRouter } from 'vue-router'
import { productListApi } from '@/util/request'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()

  const Route = useRoute() //获取到值
const img = [
    {
        img: 'https://img0.kfzimg.com/operation/c1/7c/c17ce9b3a9f3a5c2ab3c30d1f5fb828e.jpg'
    },
    {
        img: 'https://img0.kfzimg.com/operation/c1/7c/c17ce9b3a9f3a5c2ab3c30d1f5fb828e.jpg'
    },
    {
        img: 'https://img0.kfzimg.com/operation/c1/7c/c17ce9b3a9f3a5c2ab3c30d1f5fb828e.jpg'
    },
    {
        img: 'https://img0.kfzimg.com/operation/c1/7c/c17ce9b3a9f3a5c2ab3c30d1f5fb828e.jpg'
    },
]
const data=ref({})

const state = reactive({
    pageSize: 8,
    page: 1,
    total: 0,
})
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
        console.log(res);
        data.value = res.result.list
        state.total = res.result.total
        console.log(state.total);
        console.log('999', state);
    })

  
}

const handleOpen = (key, keyPath) => {
    console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
    console.log(key, keyPath)
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
.demonstration {
    color: var(--el-text-color-secondary);
}
img {
    width: 100%;
    height: 100%;
}
.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 9.375rem;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}


.mian {
    display: flex;
}

/* .left {
    flex: 0.2;
    height: 62.5rem;
    background-color: #FFFFFF;
}

.left_img {
    width: 100%;
    height: 37.5rem;
  
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  
}
.left_img_a{
    width: 90%;
    height: 7.5rem;
    background-color: aqua;
} */

.right {
    background-color: #DCDFE6;
    flex: 1;
}

.mainbox {
    display: flex;
    width: calc(100%-0.625rem);
    /* width: 100%; */
    min-height: 39.375rem;
    padding-left: 5rem;
    margin: .625rem;
    /* max-height:calc(100% - 3.75rem); */
    background-color:#FFFFFF;
    /* justify-content: center; */
    flex-flow: row wrap;
}
.pager{
    position: absolute;
    margin-top: 36.875rem;
    margin-left: 17.5rem;
}
.box {
    margin: .625rem .9375rem;
    border-radius: .3125rem;
    padding: .625rem;
    width:160px;
    height: 260px;
    /* background-color:#174359; */
    background-color:#FFFFFF;
    border: 1px solid  #DCDFE6;

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
    margin-top: 20px;
    background-color: azure;
}
</style>