import Vue from 'vue'
import Vuex from 'vuex'
import Cart from '@/components/Cart'
import router from '@/router'
import { mockStore } from '../mockData.js'

let store = new Vuex.Store ({
  state: {
    pizzas: []
  }
})

describe('Cart.vue', () => {
  const Constructor = Vue.extend(Cart)
  const vm_empty= new Constructor({ router, store }).$mount()

  it('should render empty message and back button when cart is empty', () => {
    assert.equal(vm_empty.$el.querySelector('h1').textContent, 'Your cart is empty')
    assert.equal(vm_empty.$el.querySelector('a').textContent, 'Add pizzas')
  })

  store = new Vuex.Store (mockStore)

  const vm = new Constructor({ router, store }).$mount()

  it('should receive pizza cart data from store', () => {
    assert.equal(vm_empty.pizzas.length, 0)
    assert.equal(vm.pizzas.length, 3)
  })

  it('should calculate grand total', () => {
    assert.equal(vm.$store.getters.grandTotal, 164.37)
  })

})
