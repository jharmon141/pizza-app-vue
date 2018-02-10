import Vue from 'vue'
import Vuex from 'vuex'
import CartLink from '@/components/CartLink'
import router from '@/router'
import mockData from '../mockData.js'

const store = new Vuex.Store ({
  state: Object.assign( {}, mockData.mockStore.state)
})

describe('CartLink.vue', () => {
  const Constructor = Vue.extend(CartLink)
  const vm = new Constructor({ router, store }).$mount()

  it('should compute pizzas.length', () => {
    assert.equal(vm.quantity, 12)
  })

  it('should render correct contents', () => {
    assert.equal(vm.$el.querySelector('.cart-link a').textContent, '(12) Cart')
  })
})
