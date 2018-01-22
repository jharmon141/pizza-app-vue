import Vue from 'vue'
import Vuex from 'vuex'
import Form from '@/components/Form'
import router from '@/router'

const store = new Vuex.Store ({
  state: {
    pizzas: []
  }
})

const propsData = {
  pizza: {
    "name": "small",
    "basePrice": 9.89,
    "maxToppings": 3,
    "toppings": [
      {
        "defaultSelected": false,
        "topping": {
          "name": "pepperoni",
          "price": 0.4,
          "__typename": "topping"
        },
        "__typename": "pizzaToppingConnection"
      },
      {
        "defaultSelected": false,
        "topping": {
          "name": "bannana peps",
          "price": 0.89,
          "__typename": "topping"
        },
        "__typename": "pizzaToppingConnection"
      },
      {
        "defaultSelected": false,
        "topping": {
          "name": "sausage",
          "price": 1.29,
          "__typename": "topping"
        },
        "__typename": "pizzaToppingConnection"
      },
      {
        "defaultSelected": false,
        "topping": {
          "name": "onion",
          "price": 0.29,
          "__typename": "topping"
        },
        "__typename": "pizzaToppingConnection"
      },
      {
        "defaultSelected": false,
        "topping": {
          "name": "green olives",
          "price": 0.39,
          "__typename": "topping"
        },
        "__typename": "pizzaToppingConnection"
      },
      {
        "defaultSelected": true,
        "topping": {
          "name": "cheese",
          "price": 0.1,
          "__typename": "topping"
        },
        "__typename": "pizzaToppingConnection"
      },
      {
        "defaultSelected": false,
        "topping": {
          "name": "bell peps",
          "price": 0.22,
          "__typename": "topping"
        },
        "__typename": "pizzaToppingConnection"
      }
    ],
    "__typename": "pizzaSize"
  }
}

describe('Form.vue', () => {
  const Constructor = Vue.extend(Form)
  const vm = new Constructor({ propsData, router, store, }).$mount()

  it('should receive chosen pizza prop data', () => {
    assert.equal(vm.pizza, propsData.pizza)
  })

  it('should add and remove toppings', () => {
  })

  it('should update total when toppings and quantity change', () => {
  })

  it('should add the pizzas to the vuex store cart', () => {
  })
})
