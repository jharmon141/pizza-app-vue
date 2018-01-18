<template>
  <div id="app">
    <router-view v-bind="{pizzaSizes}"></router-view>
  </div>
</template>

<script>
import gql from 'graphql-tag'

const PizzaQuery = gql`
query pizzaSizes {
    pizzaSizes {
        name
        basePrice
        maxToppings
        toppings {
        defaultSelected
            topping {
                name
                price
            }
        }
    }
}`;

export default {
  name: 'App',
  data: () => ({
    pizzaSizes: false,
  }),
  apollo: {
    pizzaSizes: PizzaQuery
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h2 {
  font-size: 32px !important;
  margin-bottom: 25px !important;
}


</style>
<style src="bulma/css/bulma.css"></style>
