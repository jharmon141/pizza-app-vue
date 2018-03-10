import Vue from 'vue'
import Vuex from 'vuex'
import CartLink from '@/components/CartLink'
import router from '@/router'
import { mockStore } from '../mockData.js'

const store = new Vuex.Store (mockStore)

describe('CartLink.vue', () => {
  const Constructor = Vue.extend(CartLink)
  const vm = new Constructor({ router, store }).$mount()

  it('should compute number of pizzas in cart', () => {
    assert.equal(vm.$store.getters.totalNumberOfPizzas, 12)
  })

  it('should render correct contents', () => {
    assert.equal(vm.$el.querySelector('.cart-link a').textContent, '(12) Cart')
  })
})
