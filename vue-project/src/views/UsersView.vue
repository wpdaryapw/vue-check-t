<template>
    <div class="wrapper">
        <div v-for="user in users" :key="user.id">
                <div class="card">
                    <p>{{ user.firstName }}</p>
                    <p>{{ user.lastName }}</p>
                    <p>{{ user.maidenName }}</p>
                    <div class="email">
                        <h3>{{ user.email }}</h3>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            users: []
        }
    },
    methods: {
        async fetchData(){
            const res = await axios.get('https://dummyjson.com/users')
            this.users = res.data.users
        }
    },
    mounted() {
        this.fetchData()
    }
}
</script>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 141px;
    padding-bottom: 17px;
}

.card {
    display: flex;
    flex-direction: row;
    border: 1px solid black;
    width: 530px;
    border-radius: 20px;
    box-shadow: 4px 4px 4px #00000099;
    border: none;
    margin-bottom: 20px;
}

.card > p {
    display: flex;
    justify-content: left;
    text-align: left;
    font-size: 20px;
    color: black;
    padding: 3px; 
}

.email {
    display: flex;
    justify-content: flex-end; 
    margin-left: auto; 
    margin-right: 10px;
    color: #00000099;
}
</style>
