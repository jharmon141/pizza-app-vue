<template>
  <div id="home">
    <cart-link/>

    <div v-if="!allPizzas">
      Loading...
    </div>

    <div v-else-if="!sizeChosen">
      <size-menu :allPizzas="allPizzas" v-on:submitPizzaSize="submitPizzaSize"></size-menu>
    </div>

    <div v-else>
      <pizza-form :pizza="pizza" v-on:resetForm="resetForm"></pizza-form>
    </div>

  </div>
</template>

<script>
import Form from './Form.vue'
import SizeMenu from './SizeMenu.vue'
import CartLink from './CartLink.vue'

export default  {
  name: 'Home',
  components: {
    'size-menu': SizeMenu,
    'cart-link': CartLink,
    'pizza-form': Form
  },
  props: ['allPizzas'],

  data: () => ({
      sizeChosen: false,
      selectedSize: '',
      pizza: {}
  }),

  methods: {
    submitPizzaSize(size) {
      this.selectedSize = size
      this.pizza = this.allPizzas.find(pizza => {
        return pizza.name == size
      })
      this.sizeChosen = true
    },

    resetForm(){
      this.sizeChosen = false
      this.pizza = {}
    }
  }
}
</script>
