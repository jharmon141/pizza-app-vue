<template>
  <div id="size-menu" class="columns">
    <div class="column is-4 is-offset-4">

      <h2>Choose a size:</h2>
      <div class="select">
        <select v-model="selected">
          <option v-for="pizza in pizzaSizes" v-bind:value="pizza.name">
            {{ pizza.name.toUpperCase() }}
          </option>
        </select>

        <a 
          v-on:click="handleSubmitPizza"
          class="button is-outlined">
          Submit
        </a>

      </div>
    </div>

  </div>
</template>

<script>
  export default  {
    name: 'SizeMenu',
    props: ['pizzaSizes', 'submitPizzaSize'],

    data() {
      return {
        selected: 'small'
      }
    },

    methods: {
      handleSubmitPizza() {
        this.submitPizzaSize(this.selected)
      }
    }
}
</script>

<style scoped>

select {
  width: 175px;
}

.button {
  width: 175px !important;
  margin-top: 25px !important;
}
</style>
