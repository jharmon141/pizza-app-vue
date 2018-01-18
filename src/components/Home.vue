<template>
  <div id="home">
    <cart-link/>

    <div v-if="!pizzaSizes">
      Loading...
    </div>

    <div v-else-if="!sizeChosen">
      <size-menu v-bind="{pizzaSizes, selectPizzaSize}"></size-menu>
    </div>

    <div v-else>
      <pizza-form/>
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
    props: ['pizzaSizes'],

    mounted() {
    },

    data() {
      return {
        sizeChosen: false,
        selectedSize: 'small',
        pizza: {}
      }
    },

    methods: {
      selectPizzaSize(size) {
        this.selectedSize = size
      },

      submitPizzaSize() {
        
      }
    },

    computed: {

    }
}
</script>

<style>
</style>
