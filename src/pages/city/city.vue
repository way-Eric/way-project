<template>
  <div id="city">
    <index-header/>
  </div>
</template>

<script>
import header from "./components/header.vue" ;
export default {
  components: {
    "index-header" : header 
  }
}
</script>

<style scoped>
  #city {
    display:flex;
    flex-direction: column;
  }

</style>
