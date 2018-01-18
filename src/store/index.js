import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({

   state: {
     pizzas: [],
     nextPizzaId: 1
   },

   mutations: {
     addPizza: (state, params) => {
       const newPizza = Object.assign({}, params, { id: state.nextPizzaId })
       state.nextPizzaId += 1
       state.pizzas.push(newPizza)
     },

     removePizza: (state, params) => {
     },

     updatePizza:(state, params) => {
     }
   },

   actions: {
     handleAddPizza: ({state, commit}) => {
       commit('addPizza')
     },

     handleRemovePizza: ({state, commit}) => {
       commit('removePizza')
     },

     handleUpdatePizza: ({state, commit}) => {
       commit('updatePizza')
     },
   }

})

export default store
