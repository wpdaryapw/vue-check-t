<template>
    <form @submit.prevent="handleSubmit" class="form">
        <h2>Authorization</h2>
        <p style="color: red" v-if="res.message">{{ res.message }}</p>
      <div>
        <div class="item">
          <label>Login</label>
          <input v-model="username"/>
        </div>
        <div class="item">
          <label>Password</label>
          <input type="password" v-model="password"/>
        </div>
        <button class="but">Submit</button>
      </div>
    </form>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        username: '',
        password: '',
        res: {}
      }
    },
    methods: {
      async handleSubmit() {
        try {
          const response = await axios.post('https://dummyjson.com/auth/login', {
            username: this.username,
            password: this.password
          })
          this.res = response.data
  
          if (this.res.token) {
            localStorage.setItem('token', this.res.token)
            this.$router.replace('/profile')
          } else {
            localStorage.removeItem('token')
          }
        } catch (error) {  
          this.res.message = error.response.data.message
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .form {
    width: 335px;
    height: 277px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    filter: drop-shadow(0px 0.25px 3px rgba(0, 0, 0, 0.039))
    drop-shadow(0px 2.75px 9px rgba(0, 0, 0, 0.19));
    border-radius: 15px;
    background-color: white;
    padding: 8px 20px 8px 16px;
    margin: 150px;
  }
  
  
  .item {
    display: flex;
    flex-direction: column;
    padding: 5px;
    
  }
  .but {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-decoration: none;
    background-color: rgb(255, 255, 255);
    padding: 5px;
    border: none;
    cursor: pointer;
  }
  </style>