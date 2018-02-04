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
       state.pizzas = state.pizzas.filter(pizza => pizza.id !== params)
     },

     updatePizza:(state, params) => {
       const pizzaIndex = state.pizzas.findIndex(pizza => pizza.id == params.id)
       state.pizzas.splice(pizzaIndex, 1, params)
     }
   },

  actions: {
    handleAddPizza: ({state, commit}, params) => {
      commit('addPizza', params)
    },

    handleRemovePizza: ({state, commit}, params) => {
      commit('removePizza', params)
    },

    handleUpdatePizza: ({state, commit}, params) => {
      commit('updatePizza', params)
    },
  }

})

export default store
