<template>
  <div id="app">

    <router-view v-bind="{ allPizzas }"></router-view>

  </div>
</template>


<script>
import PizzaQuery from './graphQL/queries.js'

export default {
  name: 'App',
  
  data: () => ({
    allPizzas: null,
  }),

  apollo: {
    allPizzas: PizzaQuery
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
  font-size: 30px !important;
  margin-bottom: 25px !important;
}

h1 {
  font-size: 36px !important;
}

h3 {
  font-size: 20px !important;
}

.select select:focus, .select select.is-focused, .select select:active, .select select.is-active {
  border-color: #01bf82 !important;
  box-shadow: 0 0 0 0.125em #01bf8263 !important;
}

</style>
<style src="bulma/css/bulma.css"></style>