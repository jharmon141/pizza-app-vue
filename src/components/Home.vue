<template>
  <div id="home">
    <CartLink/>

    <Loading v-if="!allPizzas" />

    <SizeMenu 
      v-else-if="!sizeChosen"
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
import Loading from './Loading.vue'

export default  {
  name: 'Home',
  components: {
    SizeMenu,
    CartLink,
    "PizzaForm": Form,
    Loading
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
