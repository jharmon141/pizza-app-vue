<template>
  <div id="cart-link" class="columns">
    <div class="column is-2 is-offset-10">
      <router-link
        to="/cart">
        ({{ quantity }}) Cart
      </router-link>
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
        return this.$store.state.pizzas.length
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

a:hover {
  color: #23527c;
  text-decoration: underline;
}
</style>
