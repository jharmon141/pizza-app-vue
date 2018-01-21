import Vue from 'vue'
import Vuex from 'vuex'
import SizeMenu from '@/components/SizeMenu'
import router from '@/router'

const store = new Vuex.Store ({
  state: {
    pizzas: [{name: 'small'}, {name: 'medium'}, {name: 'large'}]
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

describe('SizeMenu.vue', () => {
  const Constructor = Vue.extend(SizeMenu)
  const vm = new Constructor({ propsData, router, store, }).$mount()

  it('should receive pizza sizes data', () => {
    assert.equal(vm.pizzaSizes.length, 3)
  })

  it('should initialize with selected size small', () => {
    assert.equal(vm.selected, 'small')
  })

  it('should render correct sizes options', () => {
    assert.equal(vm.$el.querySelector('select').length, 3)
    assert.equal(vm.$el.querySelector('select [selected]'), null)
    assert.equal(vm.$el.querySelector('select').selectedIndex, 0)
    assert.equal(vm.$el.querySelector('select')[0].textContent, 'SMALL')
    assert.equal(vm.$el.querySelector('select')[1].textContent, 'MEDIUM')
    assert.equal(vm.$el.querySelector('select')[2].textContent, 'LARGE')
  })

  it('should change selected size data property when new size is chosen', () => {
    const select = vm.$el.querySelector('select')
    select.value = 'medium'
    select.dispatchEvent(new Event('change'))
    assert.equal(vm.selected, 'medium')
  })

})
