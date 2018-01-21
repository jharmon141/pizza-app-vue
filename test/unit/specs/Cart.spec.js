import Vue from 'vue'
import Vuex from 'vuex'
import Cart from '@/components/Cart'
import router from '@/router'

const store = new Vuex.Store ({
  state: {
    pizzas: []
  }
})

describe('Cart.vue', () => {
  const Constructor = Vue.extend(Cart)
  const vm = new Constructor({ router, store }).$mount()

  it('should render empty message and back button when cart is empty', () => {
    assert.equal(vm.$el.querySelector('h1').textContent, 'Your cart is empty')
    assert.equal(vm.$el.querySelector('a').textContent, 'Add pizzas')
  })

  it('should receive pizza cart data from store', () => {
    assert.equal(vm.pizzas.length, 0)
  })


})
