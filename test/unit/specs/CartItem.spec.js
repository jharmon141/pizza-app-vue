import Vue from 'vue'
import Vuex from 'vuex'
import CartItem from '@/components/CartItem'
import router from '@/router'
import { mockStore } from '../mockData.js'

const store = new Vuex.Store ({
  state: Object.assign( {}, mockStore.state),
  actions: Object.assign( {}, mockStore.actions),
  mutations: Object.assign( {}, mockStore.mutations)
})

const propsData = { 
  pizza: mockStore.state.pizzas[0]
}

describe('CartItem.vue', () => {
  const Constructor = Vue.extend(CartItem)
  const vm = new Constructor({ propsData, router, store }).$mount()

  it('should receive prop data', () => {
    assert.equal(vm.pizza.size, 'small')
  })

  it('should set quantity on mount', () => {
    assert.equal(vm.quantity, 3)
  })

  it('should calculate price', () => {
    assert.equal(vm.price, 36.51)
  })

  it('should update price when quantity changes', () => {
    vm.quantity = 4
    assert.equal(vm.price, 48.68)
  })


  it('should update store when different quantity is selected', () => {
    vm.quantity = 4
    vm.handleUpdateQuantity()
    assert.equal(vm.$store.state.pizzas[0].quantity, 4)
    vm.quantity = 3
    vm.handleUpdateQuantity()
    assert.equal(vm.$store.state.pizzas[0].quantity, 3)
  })

  it('should update store when pizza is deleted', () => {
    vm.handleDelete()
    assert.equal(vm.$store.state.pizzas.length, 2)
  })
})
