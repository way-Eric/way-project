<template>
  <div class="home">
    <index-header/>
    <index-banner/>
    <index-entertain/>
    <index-middle/>
    <index-main/>
  </div>
</template>

<script>
import header from "./components/header.vue";
import banner from "./components/banner.vue";
import entertain from "./components/entertain.vue";
import middle from "./components/middle.vue";
import main from "./components/main.vue";
export default {
  components: {
    "index-header" : header,
  	"index-banner" : banner,
    "index-entertain" : entertain,
    "index-middle" : middle ,
    "index-main" : main ,
  }
}
</script>

<style scoped>

</style>
