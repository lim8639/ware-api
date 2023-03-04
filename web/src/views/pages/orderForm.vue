<template>
    <div class="main">
        <div class="main_top">
            <div class="main_top_top" style="width: 320px; ">商品信息</div>
            <div class="main_top_top">单价</div>
            <div class="main_top_top">数量</div>
            <div class="main_top_top">小计</div>
           
        </div>
        <div class="main_box">
          
            <div class="main_box_img">
                <img
                    src="https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/2/8188/81880232995f011046dbfa2fe1af9093_0_2_140_140.jpg">
            </div>
            <div class="main_box_name">
                <div class="aa">启蒙运动的生意</div>
                <div class="bb">发货时间：现货 付款后48小时内发货</div>
            </div>
            <div class="main_box_price">
                <div class="cc">8338</div>
            </div>
            <div class="main_box_num">
                <div class="dd">877</div>
            </div>
            <div class="main_box_subtotal">
                <div class="ee">44</div>
                
            </div>
        </div>
        <div class="pay_button">
            <el-button type="danger">立即支付</el-button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const orderForm = ref({})
</script>

<style scoped>
img {
    width: 100%;
    height: 100%;
}

.main {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    align-items: center;
    margin-right: 50px;
    background-color: #F2F7FF;
  
   
}
.main_top{
   margin-top: 5px;
    display: flex;
    width: 920px;
   
}
.main_top_top{
    width: 200px;
    margin: 1px;
    border-bottom: 2px solid #B2D1FF;
}
.main_box {
    display: flex;
    width: 920px;

    height: 150px;
    border-radius: 5px;
    margin: 20px;
    background-color: #FFFFFF;
}

.main_box_img {
    width: 120px;
    height: 140px;
}

.main_box_name {

    width: 200px;
    /* background-color: aqua; */
}

.aa {
    text-align: left;
    margin: 30px 10px;
    font-size: 20px;
}

.bb {
    text-align: left;
    margin: 10px;
    font-size: 5px;
}
.main_box_price{
    display: flex;
    width: 200px;
    justify-content: center;

   
}
.cc{
  
    margin: 30px 10px;
    font-size: 25px;

}
.main_box_num{
    justify-content: center;

    display: flex;
    width: 200px;
}
.dd{
    text-align: center;
    
    margin: 30px 10px;
    font-size: 25px;

}
.main_box_subtotal{
    display: flex;
    width: 200px;
    justify-content: center;

  
}
.ee{
    text-align: center;
    color: red;
   
    margin: 30px 10px;
    font-size: 25px;
}
.pay_button{
   margin-left: 830px;
}
</style>