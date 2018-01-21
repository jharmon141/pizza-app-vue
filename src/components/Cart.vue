<template>
  <div id="cart">
    
    <div v-if="pizzas.length == 0" id="empty" class="empty columns">
      <div class="column is-4 is-offset-4">

        <h1>Your cart is empty</h1>

        <router-link
          to="/"
          class="button is-outlined">
          Add pizzas
        </router-link>

      </div>
    </div>

    <div v-else class="cart columns">
    </div>

  </div>
</template>

<script>
import store from '@/store/index.js'

  export default  {
    name: 'Cart',
    props: [],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {
      pizzas() {
        return this.$store.state.pizzas
      }
    }
}
</script>

<style scoped>

#empty {
  margin-top: 50px;
}

</style>
