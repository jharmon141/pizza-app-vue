<template>
  <div id="cart">

    <div v-if="pizzas.length == 0" id="empty" class="empty">
      <div class="columns">
        <div class="column is-4 is-offset-4">

          <h1>Your cart is empty</h1>
          <router-link to="/" class="button is-outlined">Add pizzas</router-link>
        </div>

      </div>
    </div>

    <div v-else class="cart">
      <div class="columns">
        <div class="column is-2 is-offset-10 back-link">
          <router-link to="/">Go back</router-link>
        </div>
      </div>

      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h1>Your Cart</h1>
        </div>
      </div>

      <div class="columns">
        <div class="column is-8 is-offset-2">
          <table class="table is-fullwidth">
            <thead>
              <tr>
                <th>Size</th>
                <th>Toppings</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              <cart-item v-for="pizza in pizzas" :key="pizza.id" v-bind="{pizza}"></cart-item>
            </tbody>
          </table>
        </div>
      </div>

      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h3>Order Total: ${{ grandTotal }}</h3>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import store from '@/store/index.js'
import CartItem from './CartItem.vue'

export default  {
  name: 'Cart',
  components: {
    'cart-item': CartItem
  },

  computed: {
    pizzas() {
      return this.$store.state.pizzas
    },

    grandTotal() {
      let total = 0
      this.pizzas.forEach(pizza => {
        total += pizza.pricePerPizza*pizza.quantity
      })
      return total.toFixed(2)
    }
  }
}
</script>


<style scoped>
#empty {
  margin-top: 50px;
}

#empty h1 {
  margin-bottom: 25px;
}

a {
  color: #505050;
}

.back-link {
  text-align: right;
  margin-top: 10px;
  padding-right: 20px;
  font-size: 18px;
}
</style>
