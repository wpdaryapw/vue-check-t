<script>
import {RouterView} from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
    components: {Header, Footer}
}

</script>



<template>
<Header></Header>
<router-view></router-view>
<Footer></Footer>
</template>



<style>
@import url('https://fonts.googleapis.com/css2?family=Heebo&display=swap');

*{
    margin: 0;
    padding: 0;
    max-width: 1152px;
  }

</style>