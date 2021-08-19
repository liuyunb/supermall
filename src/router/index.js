// import {createApp} from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

// import App from '../App.vue'
const history = createWebHistory();
// const app = createApp(App)


const Home = () => import('../views/home/home.vue')
const Profile = () => import('../views/profile/profile.vue')
const Cart = () => import('../views/cart/cart.vue')
const Category = () => import('../views/category/category.vue')


const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  }
]

const router = createRouter({
  routes,
  history
})


export default router;
