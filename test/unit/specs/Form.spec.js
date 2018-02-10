import Vue from 'vue'
import Vuex from 'vuex'
import Form from '@/components/Form'
import router from '@/router'
import mockData from '../mockData.js'

const store = new Vuex.Store ({
  state: Object.assign( {}, mockData.mockStore.state),
  actions: Object.assign( {}, mockData.mockStore.actions),
  mutations: Object.assign( {}, mockData.mockStore.mutations)
})

const propsData = {
  pizza: mockData.allPizzas[0]
}

describe('Form.vue', () => {
  const Constructor = Vue.extend(Form)
  const vm = new Constructor({ propsData, router, store, }).$mount()

  it('should receive chosen pizza prop data', () => {
    assert.equal(vm.pizza, propsData.pizza)
  })

  it('should initialize with chosen toppings', () => {
    assert.equal(vm.chosenToppings.length, 1)
  })

  it('should initialize with correct size, max toppings, quantity, base total, and grand total', () => {
    assert.equal(vm.quantity, 1)
    assert.equal(vm.chosenToppings.length, 1)
    assert.equal(vm.pizza.maxToppings, 3)
    assert.equal(vm.pizza.basePrice, 9.89)
    assert.equal(vm.grandTotal, 9.99)
  })

  it('should add toppings and update price', () => {
    vm.chosenToppings.push(vm.pizza.toppings[0])
    assert.equal(vm.grandTotal, 10.39)
    vm.chosenToppings.push(vm.pizza.toppings[1])
    assert.equal(vm.grandTotal, 11.28)
  })

  it('should remove toppings and update price', () => {
    vm.chosenToppings.pop()
    assert.equal(vm.grandTotal, 10.39)
    vm.chosenToppings.pop()
    assert.equal(vm.grandTotal, 9.99)
  })

  it('should change quantity and update price', () => {
    vm.quantity = 3
    assert.equal(vm.grandTotal, 29.97)
    vm.quantity = 7 
    assert.equal(vm.grandTotal, 69.93)
    vm.chosenToppings.push(vm.pizza.toppings[0])
    assert.equal(vm.grandTotal, 72.73)
  })

  it('should add pizza to vuex store', () => {
    vm.handleSubmitPizza()
    assert.equal(vm.$store.state.pizzas.length, 4)
  })
})
