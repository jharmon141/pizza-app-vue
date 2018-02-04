<template>
  <div class="columns cart-link">
    <div class="column is-2 is-offset-10">
      <router-link to="/cart">({{ quantity }}) Cart</router-link>
    </div>
  </div>
</template>

<script>
import store from '@/store/index.js'

export default  {
  name: 'CartLink',
  props: [],
  computed: {
    quantity() {
      let total = 0
      this.$store.state.pizzas.forEach(pizza => total += pizza.quantity)

      return total
    }
  }

}
</script>

<style scoped>
.column {
  text-align: right;
  margin-top: 10px;
  padding-right: 20px;
  font-size: 18px;
}

a {
  color: #505050;
}

</style>
