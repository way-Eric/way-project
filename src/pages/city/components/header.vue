<template>
  <div id="head">
    <div class="head">
      <router-link to="/" class="head-left iconfont icon-back"></router-link>
      <div class="area">
        <ul>
          <li @click="handleLeftChange" ref="li1">国内</li>
          <li @click="handleRightChange" ref="li2">海外</li>
        </ul>
      </div>
    </div>
    <div id="main">
      <div class="Ipt">
        <input type="text" placeholder="请输入城市名或拼音" />
      </div>     
    </div>
    <city-domestic v-if="show" :domestic="domestic"/>
    <city-abroad v-if="show2" :abroad="abroad"/>
  </div>
</template>

<script>
  import domestic from "./domestic.vue";
  import abroad from "./abroad.vue";
  import axios from "axios" ;
  import { AJAX_GET_DATA } from "../types.js" 
  export default {
    data() {
      return {
        show:true,
        show2:false
      }
    },
    components: {
      "city-domestic": domestic,
      "city-abroad": abroad
    },
    computed:{
      domestic() {
        return this.$store.state.city.domestic
      },
      abroad() {
        return this.$store.state.city.abroad
      }
    },
    mounted() {
      this.getCityDate();
    },
    methods: {
      handleLeftChange(e){
        this.show = !this.show ;
        this.show2 = !this.show2 ;
        this.$refs.li1.style.background = "#fff" ;
        this.$refs.li1.style.color = "#00bcd4" ;
        this.$refs.li2.style.background = "#00bcd4" ;
        this.$refs.li2.style.color = "#fff" ;
      },
      handleRightChange(e){
        this.show = !this.show ;
        this.show2 = !this.show2 ;
        this.$refs.li1.style.background = "#00bcd4" ;
        this.$refs.li1.style.color = "#fff" ;
        this.$refs.li2.style.background = "#fff" ;
        this.$refs.li2.style.color = "#00bcd4" ;
      },
      getCityDate() {
        this.$store.dispatch(AJAX_GET_DATA);
      }
    }

  }
</script>

<style scoped>
  #head {
    height:1.6rem;
  }

  .head { 
    display: flex;
    position: fixed;
    top:0;
    left:0;
    display: box;
    box-sizing: border-box;
    width: 100%;
    height: .88rem;
    text-align: center;
    color: #fff; 
    background: #00bcd4;  
  }
  .head-left {
    width: .4rem;
    line-height: .88rem;
    padding: 0 .2rem;
    color: #fff;
    font-size: .5rem;
    text-align: left;
    font-weight: 700;
  }
  .area {
    height:100%;
    flex:1;
  }
  .area ul {
    box-sizing: border-box;
    width:70%;
    height:.56rem;
    margin:.15rem auto 0;
    border: 1px solid #fff ;
    border-radius: .05rem ;
    overflow: hidden;
  }
  .area ul li {
    box-sizing: border-box;
    width:50%;
    line-height:.53rem;
    text-align: center;
    color: #fff ;
    float:left ;
  }

  .area ul li:first-child {
    color:#00bcd4;
    background:#fff;
  }

   #main {
    margin-top:.88rem ;
    background: #00bcd4;
  }

  .Ipt {
    padding: 0 .2rem .1rem .2rem;
    font-size: .26rem;
    color: #9e9e9e;
  }

  input {
    display: block;
    width: 100%;
    height: .3rem;
    line-height: .3rem;
    padding: .16rem 0 .16rem .1rem;
    background: #fff;
    border: 0;
    border-radius:.08rem ;
    text-align: center;
  }

</style>