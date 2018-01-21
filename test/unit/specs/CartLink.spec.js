import Vue from 'vue'
import Vuex from 'vuex'
import CartLink from '@/components/CartLink'
import router from '@/router'

const store = new Vuex.Store ({
  state: {
    pizzas: [{name: 'small'}, {name: 'medium'}, {name: 'large'}]
  }
})

describe('CartLink.vue', () => {
  const Constructor = Vue.extend(CartLink)
  const vm = new Constructor({ router, store }).$mount()

  it('should compute pizzas.length', () => {
    assert.equal(vm.quantity, 3)
  })

  it('should render correct contents', () => {
    assert.equal(vm.$el.querySelector('.cart-link a').textContent, '(3) Cart')
  })
})
