<template>
  <div id="form">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <h1 id="size">Size: {{pizza.name.toUpperCase()}}</h1>

        <h3 id="base-price">Base price: ${{pizza.basePrice.toFixed(2)}}</h3>
        <h3 id="max-toppings">Max number of toppings: {{maxToppingDisplay}}</h3>
      </div>
    </div>

    <div class="columns">
      <div class="column is-3 is-offset-3">
        <h4>Select your toppings:</h4>
      </div>
      
      <div class="column is-3">
        <div id="toppings">
          <div v-for="topping in pizza.toppings">
            <input 
              v-if="maxToppingsNotReached || chosenToppings.includes(topping)" 
              type="checkbox" 
              :id="topping.topping.name" 
              :value="topping" 
              :checked="topping.defaultSelected" 
              v-model="chosenToppings">
            <input 
              v-else 
              type="checkbox" 
              disabled>
            <label :for="topping.topping.name">{{topping.topping.name}} (${{topping.topping.price.toFixed(2)}})</label>
          </div>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column is-4 is-offset-4">
        Quantity: 
        <div class="select">
          <select v-model="quantity">
            <option v-for="number in quantityOptions" :value="number">{{number}}</option>
          </select>
        </div>
      </div>
    </div>

    <div class="columns total">
      <div class="column is-4 is-offset-4">
        Total: ${{grandTotal.toFixed(2)}}
      </div>
    </div>

    <div class="columns">
      <div class="column is-4 is-offset-4">
        <span v-on:click="handleResetForm" class="button is-outlined">Go back</span>
        <span v-on:click="handleSubmitPizza" class="button is-outlined">Add to cart</span>
      </div>
    </div>

  </div>
</template>

<script>
import store from '@/store/index.js'

export default  {
  name: 'Form',
  props: ['pizza', 'resetForm'],

  mounted() {
    const initialToppings = this.pizza.toppings.forEach(topping => {
      if (topping.defaultSelected) {
        this.chosenToppings.push(topping)
      }
    })
  },

  data: () => ({
    chosenToppings: [],
    quantityOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    quantity: 1,
  }),

  methods: {
    handleResetForm() {
      this.resetForm()
    },

    handleSubmitPizza() {
      const pizza = {
        toppings: this.chosenToppings,
        size: this.pizza.name,
        pricePerPizza: this.pricePerPizza,
        quantity: this.quantity
      }

      this.$store.dispatch('handleAddPizza', pizza)
      this.$router.push({ name: 'Cart'})
    }
  },

  computed: {
    maxToppingDisplay() {
      if (this.pizza.maxToppings === null) {
        return "Unlimited!"
      } 
      return this.pizza.maxToppings
    },

    maxToppingsNotReached() {
      if (this.pizza.maxToppings === null) {
        return true
      }
      return this.pizza.maxToppings > this.chosenToppings.length
    },

    pricePerPizza(){
      const basePrice = this.pizza.basePrice
      const toppingsTotal = this.chosenToppings.reduce((prev, curr) => {
        return prev + curr.topping.price
      }, 0)

      return (toppingsTotal + basePrice).toFixed(2)
    },

    grandTotal() {
      return this.pricePerPizza * this.quantity
    }

  }
}
</script>

<style scoped>

h1 {
  margin-bottom: 20px;
}

#toppings {
  text-align: left;
}

.total {
  margin-top: 20px;
  margin-bottom: 20px;
}

</style>
