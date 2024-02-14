import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import ProfileView from '../views/ProfileView.vue'
import UsersView from '../views/UsersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      component: HomeView
    },
    {
      path: '/login',
      component: LoginView
    },
    {
      path: '/profile',
      component: ProfileView,
    },
    {
      path: '/users',
      component: UsersView
    }
  ]
})

function getAuth (){
  const token = localStorage.getItem('token')
  if(token !== null){
    return true
  } else {
    return false
  }
}

router.beforeEach((to, from, next) => {
  let isAuth = getAuth()
  if (to.path === '/profile' && !isAuth){
    next('/login')
  } else {
    next()
  }
})

export default router
