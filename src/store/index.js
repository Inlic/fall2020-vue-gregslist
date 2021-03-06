import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import { api } from '../services/AxiosService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cars: [],
    activeCar: {},
    houses: [],
    activeHouse: {},
    jobs: [],
    activeJob: {}
  },
  mutations: {
    setCars(state, cars) {
      state.cars = cars
    },
    addCar(state, car) {
      state.cars.push(car)
    },
    setActiveCar(state, car) {
      state.activeCar = car
    },
    removeCar(state, id) {
      state.cars = state.cars.filter(c => c.id != id)
    },
    setHouses(state, houses) {
      state.houses = houses
    },
    addHouse(state, house) {
      state.houses.push(house)
    },
    setActiveHouse(state, house) {
      state.activeHouse = house
    },
    removeHouse(state, id) {
      state.houses = state.houses.filter(h => h.id != id)
    },
    setJobs(state, jobs) {
      state.jobs = jobs
    },
    addJob(state, job) {
      state.jobs.push(job)
    },
    setActiveJob(state, job) {
      state.activeJob = job
    },
    removeJob(state, id) {
      state.jobs = state.jobs.filter(j => j.id != id)
    }
  },
  actions: {
    async getAllCars({ commit }) {
      try {
        let res = await api.get('cars')
        commit("setCars", res.data.data)
      } catch (error) {
        console.error(error)
      }

    },
    async getCarById({ commit }, id) {
      try {
        let res = await api.get('cars/' + id)
        commit("setActiveCar", res.data.data)
      } catch (error) {
        console.error(error)
      }

    },
    async createCar({ commit }, newCar) {
      try {
        let res = await api.post('cars', newCar)
        //dispatch("getAllCars")
        commit("addCar", res.data.data)
        commit("setActiveCar", res.data.data)
        router.push({ name: "CarDetails", params: { id: res.data.data._id } })
      } catch (error) {
        console.error(error)
      }

    },
    async bid({ commit }, bid) {
      try {
        let res = await api.put('cars/' + bid.id, bid)
        commit("setActiveCar", res.data)
      } catch (error) {
        console.error(error)
      }

    },
    async deleteCar({ commit }, id) {
      try {
        await api.delete('cars/' + id)
        commit("removeCar", id)
        commit("setActiveCar", {})
        // NOTE this will change the active route
        router.push({ name: "Cars" })
      } catch (error) {
        console.error(error)
      }
    },
    async getAllHouses({ commit }) {
      try {
        let res = await api.get('houses')
        commit("setHouses", res.data.data)
      } catch (error) {
        console.error(error)
      }

    },
    async getHouseById({ commit }, id) {
      try {
        let res = await api.get('houses/' + id)
        commit("setActiveHouse", res.data.data)
      } catch (error) {
        console.error(error)
      }

    },
    async createHouse({ commit }, newHouse) {
      try {
        let res = await api.post('houses', newHouse)
        commit("addHouse", res.data.data)
        commit("setActiveHouse", res.data.data)
        router.push({ name: "HouseDetails", params: { id: res.data.data._id } })
      } catch (error) {
        console.error(error)
      }

    },
    async bidHouse({ commit }, bid) {
      try {
        let res = await api.put('houses/' + bid.id, bid)
        commit("setActiveHouse", res.data)
      } catch (error) {
        console.error(error)
      }

    },
    async deleteHouse({ commit }, id) {
      try {
        await api.delete('houses/' + id)
        commit("removeHouse", id)
        commit("setActiveHouse", {})
        // NOTE this will change the active route
        router.push({ name: "Houses" })
      } catch (error) {
        console.error(error)
      }
    },
    async getAllJobs({ commit }) {
      try {
        let res = await api.get('jobs')
        commit("setJobs", res.data.data)
      } catch (error) {
        console.error(error)
      }

    },
    async getJobById({ commit }, id) {
      try {
        let res = await api.get('jobs/' + id)
        commit("setActiveJob", res.data.data)
      } catch (error) {
        console.error(error)
      }

    },
    async createJob({ commit }, newJob) {
      try {
        let res = await api.post('jobs', newJob)
        //dispatch("getAllJobs")
        commit("addJob", res.data.data)
        commit("setActiveJob", res.data.data)
        router.push({ name: "JobDetails", params: { id: res.data.data._id } })
      } catch (error) {
        console.error(error)
      }
    },
    async deleteJob({ commit }, id) {
      try {
        await api.delete('jobs/' + id)
        commit("removeJob", id)
        commit("setActiveJob", {})
        // NOTE this will change the active route
        router.push({ name: "Jobs" })
      } catch (error) {
        console.error(error)
      }
    },
  }
})
