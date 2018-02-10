import Vue from 'vue'
import Vuex from 'vuex'
import SizeMenu from '@/components/SizeMenu'
import router from '@/router'
import mockData from '../mockData.js'

let store = new Vuex.Store ({
  state: Object.assign( {}, mockData.mockStore.state)
})

const propsData = { 
  allPizzas: mockData.allPizzas
}

describe('SizeMenu.vue', () => {
  const Constructor = Vue.extend(SizeMenu)
  const vm = new Constructor({ propsData, router, store, }).$mount()

  it('should receive pizza sizes data', () => {
    assert.equal(vm.allPizzas.length, 3)
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
