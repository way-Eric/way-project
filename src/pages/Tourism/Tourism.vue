<template>
  <div>
    <index-header />
    <tour-list />
    <tour-details :items="items"/>
    <tour-animate />
  </div>
</template>

<script>
import header from "./header";
import tourlist from "./tourlist";
import details from "./details"; 
import animate from "./animate"
import axios from "axios" ;

export default {
  components: {
    "index-header" : header,
    "tour-list" : tourlist,
    "tour-details" : details,
    "tour-animate" : animate
  },  
  data() {
    return{
        items:[]
    }
  },
  mounted() {
    this.getTourismData()
  },
  methods: {
    getTourismData() {
      axios.get("/static/Tourism-details.json")
      .then(this.handleGetDataSucc.bind(this))
      .catch(this.handleGetDataErr.bind(this))
    },
    handleGetDataSucc(response) {
        this.items = response.data.data.detailList;
    },
    handleGetDataErr(err) {
      console.log(err)
    }
  }
}
</script>

<style scoped>
  
</style>