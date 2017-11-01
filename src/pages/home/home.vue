<template>
  <div class="hello">
    <indexheader/>
  </div>
</template>

<script>
import header from "./header.vue";
export default {
	name:'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
  	indexheader : header
  }
}
</script>

<style scoped>

</style>
