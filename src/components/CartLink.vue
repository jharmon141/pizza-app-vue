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
      const total = this.$store.state.pizzas.reduce((prev, curr) => {
        return prev + curr.quantity
      }, 0)

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
