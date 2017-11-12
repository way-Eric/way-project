<template>
    <div class="head">
      <router-link to="/map" class="head-left iconfont icon-back"></router-link>
      <router-link to="/search"class="head-mid"><span class="iconfont icon-sousuo"></span>输入城市/景点/游玩主题</router-link>
      <router-link to="/city" class="head-right">{{city}}</router-link>
    </div>
</template>


<script>
  import { mapState } from 'vuex'
	export default {
    computed: mapState({
      city (state) {
        return state.home.city;
      }
    }),
    mounted() {
      if(localStorage) {
        this.$store.state.home.city = localStorage.city
      }
    },
    beforeMount() {
      if(localStorage.length == 0) {
        localStorage.city = "北京" 
      }   
    }
  }
</script>


<style scoped>
  .head{
  	display: flex;
  	position: relative;
    display: box;
    width: 100%;
    height: .88rem;
    background: #00bcd4;
    text-align: center;
    color: #fff;
    box-sizing: border-box;
  }
  a {
  	float: left;
  	display:block;
  }
  .head-left{
    width: .4rem;
    line-height: .88rem;
    padding: 0 .2rem;
    color: #fff;
    font-size: .5rem;
    text-align: left;
    font-weight: 700;
  }
  .head-mid{
  	box-sizing: border-box;
    box-flex: 1;
    flex:1;
    position: relative;
    height: .6rem;
    margin: .14rem 0;
    background: #fff;
    line-height: .6rem;
    border-radius: .06rem;
    color:#e4e7ea;
    text-align:left;
  }
  span{
    margin: 0 .1rem;
  }
  .head-right{
    line-height: .88rem;
    margin-right: .04rem;
    color: #fff;
    padding: 0 .5rem 0 .25rem;
    position: relative;
    max-width: 1.2rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .head-right:after{
  	position: absolute;
  	content: "" ;
    width:0; 
    height:0; 
    border-left:.12rem solid transparent;
    border-right:.12rem solid transparent;
    border-top:.12rem solid #fff;
    top:18px;
    right:10px;
   }
</style>