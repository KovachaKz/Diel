import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    
    // {
    //   path: '/products',
    //   name: 'products',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/ProductsView.vue')
    // },
    {
      path: '/product',
      name: 'Product',
      component: () => import('../views/SingleProduct.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/ShoppingCart.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/CheckoutView.vue') 
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login-Register.vue') 
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('../views/CategoriesView.vue') 
    },
  ]
})

export default router
