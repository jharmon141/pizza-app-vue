import Vue from 'vue'
import Vuex from 'vuex'
import Home from '@/components/Home'
import router from '@/router'
import { allPizzas } from '../mockData.js'

let store = new Vuex.Store ({
  state: {
    pizzas: []
  }
})

const propsData = { 
  allPizzas: allPizzas
}

describe('Home.vue', () => {
  const Constructor = Vue.extend(Home)
  const vm = new Constructor({ propsData, router, store, }).$mount()

  it('should render the correct form', () => {
    assert.equal(vm.$el.querySelector('h2').textContent, 'Choose a size:')
  })

  it('should handle size selection', () => {
    vm.submitPizzaSize('large')
    assert.equal(vm.selectedSize, 'large')
  })

  it('should reset form', () => {
    vm.resetForm()
    assert.equal(vm.sizeChosen, false)
  })

})
