<template>

  <transition tag="div" class="size-menu-slide" name="component-slide" >
    <div id="size-menu" >

      <div class="columns">
        <div class="column is-4 is-offset-4">

          <h2>Choose a size:</h2>

          <div v-if="!allPizzas">
            Loading...
          </div>

          <div v-else class="select">
            <select v-model="selected">
              <option 
                v-for="pizza in allPizzas" 
                :value="pizza.name" 
                :key="pizza.name">{{ pizza.name.toUpperCase() }}</option>
            </select>

            <a 
              v-on:click="$emit('submitPizzaSize', selected)" 
              class="button is-outlined">Submit</a>

          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

export default  {
  name: 'SizeMenu',
  props: ['allPizzas', 'submitPizzaSize'],

  data: () => ({
    selected: 'small'
  })
}
</script>


<style scoped>
.component-slide-leave-active, .component-slide-enter-active {
  transition: 1s;
}
.component-slide-enter {
  transform: translate(-100%, 0);
}
.component-slide-leave-to {
  transform: translate(-100%, 0);
}

.size-menu-slide {
  overflow: hidden;
  position: relative;
}

#size-menu {
  position: absolute;
  top: 100px;
  left: 0;
  bottom: 0;
  right:0;
}

select {
  width: 175px;
}

.button {
  width: 175px !important;
  margin-top: 25px !important;
}
</style>
