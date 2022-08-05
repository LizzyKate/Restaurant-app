import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import AddRestaurant from './components/Add-Restaurant.vue'
import UpdateRestaurant from './components/Update-Restaurant.vue'

const routes = [
    { path: '/', component: Home, name:"HomeVue" },
    { path: '/signup', component: SignUp, name:"SignUpVue" },
    { path: '/login', component: Login, name:"LoginVue" },
    { path: '/add-restaurant', component: AddRestaurant, name:"AddRestaurantVue" },
    { path: '/update-restaurant/:id', component: UpdateRestaurant, name:"UpdateRestaurantVue" }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router