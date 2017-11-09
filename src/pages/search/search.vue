<template>
  <div class="search">
    <index-header/>
    <index-main/>
  </div>
</template>

<script>
import header from "./header.vue" ;
import main from "./main.vue" ;
import axios from "axios" ;
export default {
  components: {
    "index-header" : header,
    "index-main" : main 
  },
  data() {
  	
  }
}
</script>

<style scoped>

</style>
