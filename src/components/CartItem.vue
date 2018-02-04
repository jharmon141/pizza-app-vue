<template>
  <tr>
    <td>{{ pizza.size | Capitalize }}</td>

    <td>
      <ul>
        <li v-for="(topping, index) in pizza.toppings">
          {{ topping.topping.name }}
        </li>
      </ul>
    </td>

    <td>
      <div class="select">
        <select v-model="quantity">
          <option v-for="number in quantityOptions" :value="number">{{number}}</option>
        </select>
      </div>
    </td>

    <td>
      ${{ price }}
    </td>

    <td>
      <span class="delete">X</span>
    </td>

  </tr>
</template>

<script>
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

  },
  computed: {
    price() {
      return this.pizza.pricePerPizza * this.pizza.quantity
    }

  }
}
</script>

<style>
</style>
