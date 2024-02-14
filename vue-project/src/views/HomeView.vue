<script>
import {RouterLink} from 'vue-router'

</script>



<template>

    <h1 class="main_text">Home page</h1>

    <p class="text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br/> sint. Velit officia consequat duis enim velit mollit. Exercitation veniam <br/> consequat sunt nostrud amet.</p>

    <router-link to="/login">
        <button class="but">Authorization</button>
    </router-link>

    <img src="../assets/tools 1.png" class="img"/>

</template>



<style scoped>
    .main_text{
        position: absolute;
        width: 506px;
        height: 85px;
        left: 148px;
        top: 143px;

        font-family: 'Heebo';
        font-style: normal;
        font-weight: 700;
        font-size: 44px;
        line-height: 60px;
        color: #21243D;
    }

    .text{
        position: absolute;
        width: 497px;
        height: 66px;
        left: 148px;
        top: 251px;

        font-family: 'Heebo';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #21243D;
    }

    .but{
        position: absolute;
        width: 208px;
        height: 43px;
        left: 148px;
        top: 359px;
        background: #FF6464;
        border-radius: 2px;
        border: none;


        font-family: 'Heebo';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 29px;
        color: #FFFFFF;
    }

    .img{
        position: absolute;
        width: 301px;
        height: 290px;
        left: 765px;
        top: 143px;
    }

</style>