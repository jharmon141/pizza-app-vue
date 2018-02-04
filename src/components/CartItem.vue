<template>
  <tr>
    <td>{{ pizza.size }}</td>

    <td>
      <ul>
        <li v-for="(topping, index) in pizza.toppings">
          {{ topping.topping.name }}
        </li>
      </ul>
    </td>

    <td>
      <div class="select">
        <select v-on:change="handleUpdateQuantity" v-model="quantity">
          <option  v-for="number in quantityOptions" :value="number">{{number}}</option>
        </select>
      </div>
    </td>

    <td>
      ${{ price }}
    </td>

    <td>
      <span v-on:click="handleDelete" class="delete">X</span>
    </td>

  </tr>
</template>

<script>
import store from '@/store/index.js'

export default  {
  name: 'CartItem',
  props: ['pizza'],
  data: () => ({
    quantity: null,
    quantityOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }),

  mounted(){
    this.quantity = this.pizza.quantity
  },

  filters: {
    Capitalize(val) {
      return val.charAt(0).toUpperCase() + val.slice(1)
    }
  },

  methods: {
    handleDelete(){
      const pizzaId = this.pizza.id
      this.$store.dispatch('handleRemovePizza', pizzaId)
    },

    handleUpdateQuantity() {
      const pizza = {
        id: this.pizza.id,
        toppings: this.pizza.toppings,
        size: this.pizza.size,
        pricePerPizza: this.pizza.pricePerPizza,
        quantity: this.quantity
      }

      this.$store.dispatch('handleUpdatePizza', pizza)
    }

  },
  computed: {
    price() {
      return this.pizza.pricePerPizza * this.quantity
    }

  }
}
</script>

<style>
</style>
