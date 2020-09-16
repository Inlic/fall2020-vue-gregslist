import Vue from 'vue'
import VueRouter from 'vue-router'
// @ts-ignore
import CarDetails from '../pages/CarDetails.vue'
// @ts-ignore
import Cars from '../pages/Cars.vue'
// @ts-ignore
import HouseDetails from '../pages/HouseDetails.vue'
// @ts-ignore
import Houses from '../pages/Houses.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/cars',
    name: 'Cars',
    component: Cars
  },
  {
    path: '/cars/:id',
    name: 'CarDetails',
    component: CarDetails
  },
  {
    path: '/houses',
    name: 'Houses',
    component: Houses
  },
  {
    path: '/houses/:id',
    name: 'HouseDetails',
    component: HouseDetails
  },
  {
    path: '*',
    redirect: '/cars'
  }
]

const router = new VueRouter({
  routes
})

export default router
