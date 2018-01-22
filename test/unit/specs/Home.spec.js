import Vue from 'vue'
import Vuex from 'vuex'
import Home from '@/components/Home'
import router from '@/router'

const store = new Vuex.Store ({
  state: {
    pizzas: []
  }
})

const propsData = { 
  pizzaSizes: [
    {
      "name": "small",
      "basePrice": 9.89,
      "maxToppings": 3,
      "__typename": "pizzaSize"
    },
    {
      "name": "medium",
      "basePrice": 10.89,
      "maxToppings": 5,
      "__typename": "pizzaSize"
    },
    {
      "name": "large",
      "basePrice": 13.49,
      "maxToppings": null,
      "__typename": "pizzaSize"
    }
  ]
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
