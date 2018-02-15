<template>
  <div id="home">
    <CartLink/>

    <SizeMenu 
      v-if="!sizeChosen" 
      :allPizzas="allPizzas" 
      v-on:submitPizzaSize="submitPizzaSize" />

    <PizzaForm 
      v-else 
      :pizza="pizza" 
      v-on:resetForm="resetForm" />

  </div>
</template>

<script>
import Form from './Form.vue'
import SizeMenu from './SizeMenu.vue'
import CartLink from './CartLink.vue'

export default  {
  name: 'Home',
  components: {
    SizeMenu,
    CartLink,
    "PizzaForm": Form
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

<style scoped>
</style>
