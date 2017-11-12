<template>
  <div class="reserve">
    <index-header/>
    <index-comment/>
    <index-main :items="items"/>
    <index-bottom/>
    <div class="top" ref="top">
      <router-link to="/" class="head-left iconfont icon-back"></router-link>
      <h4>【赠海鲜券】蜈支洲岛纯玩1日游（三亚市区亚龙湾海坡均可接送)</h4>
    </div>
  </div>
</template>

<script>
import header from "./components/header.vue";
import comment from "./components/comment.vue";
import main from "./components/main.vue";
import bottom from "./components/bottom.vue";
import axios from "axios";
import { AJAX_GET_DATA } from "./types.js";
export default {
  components: {
    "index-header" : header,
    "index-comment" : comment,
    "index-main" : main ,
    "index-bottom" : bottom ,
  },
  computed:{
    items() {
      return this.$store.state.reserve.items
    }
  },
  mounted() {
     this.ReserveGetData();
     window.addEventListener("scroll",this.handleScroll.bind(this))
  },
  destoryed() {
    window.removeEventListener("scroll",this.handleScroll.bind(this))
  },
  methods: {
    ReserveGetData() {
      this.$store.dispatch(AJAX_GET_DATA);
    },
    handleScroll() {
      var scrollTop = window.pageYOffste || document.documentElement.scrollTop || document.body.scrollTop;
      var a = scrollTop/500;
      this.$refs.top.style.opacity = a;
    }
  }
}
</script>

<style scoped>
  .top {
    position: fixed;
    width: 100%;
    top: 0px;
    left: 0px;
    display: block;
    opacity: 0;
    height: .88rem;
    background: #00bcd4;
    z-index: 91;
  }
  .head-left {
    width: .4rem;
    line-height: .88rem;
    padding: 0 .2rem;
    color: #fff;
    font-size: .5rem;
    text-align: left;
    font-weight: 700;
    float: left;
  }
  .top h4 {
    overflow: hidden;
    margin: 0 1rem;
    line-height: .88rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: .32rem;
    text-align: center;
    color: #fff;
  }
</style>
