<script>
import {RouterView, RouterLink} from 'vue-router'

</script>



<template>

<ul>
    <router-link to="/home">
            <li>Home</li>
        </router-link>

        <router-link to="/users">
            <li>Users</li>
        </router-link> 

        <router-link to="/profile">
            <li>Profile</li>
        </router-link> 
</ul>

</template>



<style scoped>

  ul{
    display: flex;
    gap: 30px;
    list-style-type: none;
    position: absolute;
    width: 57px;
    height: 43px;
    left: 796px;
    top: 27px;

    font-family: 'Heebo';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
    text-align: right;
    color: #000000;
}

  a{
    text-decoration: none;
    color: black;
  }


</style>