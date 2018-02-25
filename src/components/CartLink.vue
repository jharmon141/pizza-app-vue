<template>
  <div class="columns cart-link">
    <div class="column is-2 is-offset-10">
      <router-link to="/cart">({{ $store.getters.totalNumberOfPizzas }}) Cart</router-link>
    </div>
  </div>
</template>


<script>
export default  {
  name: 'CartLink',
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

</style>
