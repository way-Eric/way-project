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
import header from "./header.vue";
import banner from "./banner.vue";
import entertain from "./entertain.vue";
import middle from "./middle.vue";
import main from "./main.vue";
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
  .home{
    width: 100%;
    height: 100%;
  }
</style>
