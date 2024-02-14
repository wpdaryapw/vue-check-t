<template>
    <div>
      <div class="info">
        <div class="profile">
          <h2>My profile</h2>
          <p class="item">Username: {{ this.response.username }}</p>
          <p class="item">Name: {{ this.response.firstName }}</p>
          <p class="item">LastName: {{ this.response.lastName }}</p>
          <p class="item">Gender: {{ this.response.gender }}</p>
          <p class="item">Email: {{ this.response.email }}</p>
        </div>
        <img :src="this.response.image"/>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        response: {},
        error: ''
      }
    },
    mounted() {
      axios.get('https://dummyjson.com/auth/me', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then((response) => {
            const data = response.data
            this.response = data
        })
        .catch((error) => {
          console.error(error)
          this.res.message = error.response.data.message
        })
    }
  }
  </script>
  
  <style scoped>
  .info {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 50px 50px;
  }
  
  img {
    width: 243px;
    height: 243px;
    border-radius: 50%;
  }
  
  .profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 50px;
  }
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    isolation: isolate;
    width: 248px;
    height: 40px;
    left: 311px;
    top: 457px;
    filter: drop-shadow(0px 0.25px 3px rgba(0, 0, 0, 0.039)) drop-shadow(0px 2.75px 9px rgba(0, 0, 0, 0.19));
    border-radius: 10px;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    background: #FFFFFF;
  }
  </style>

