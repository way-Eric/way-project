<template>
    <div id="head">
      <a href="#" class="head-left iconfont icon-back"></a>
      <router-link to="/search"class="head-mid iconfont icon-sousuo"><input class="Ipt" value="输入城市/景点/游玩主题" /></router-link>
      <a href="#" class="head-right">北京</a>
    </div>
</template>


<script>
	
</script>

<style scoped>
  #head{
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
    color: #e4e7ea ;
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
    padding-left:2%;
  }
  .head-mid .Ipt{
    border:0 ;
    width: 89% ;
    margin-left: 2% ;
    line-height: .6rem ;
    font-size: .27rem ;
    color: #e4e7ea ;
  }
  .head-right{
    line-height: .88rem ;
    margin-right: .04rem ;
    color: #fff ;
    padding: 0 .5rem 0 .25rem ;
    position: relative ;
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