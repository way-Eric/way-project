<template>
<<<<<<< HEAD
    <div class="head">
      <a href="#" class="head-left"><</a>
      <a href="#" class="head-mid"><span></span>输入城市/景点/游玩主题</a>
      <a href="#" class="head-right">北京</a>
    </div>
</template>


<script>
	
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
    font-size: .36rem;
    text-align: left;
    
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
  }
  .head-right{
    line-height: .88rem;
    margin-right: .04rem;
    color: #fff;
    padding: 0 .45rem 0 .4rem;
    position: relative;
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
    right:4px;
   }
=======
  <header class="header">
  	<a href="" class="headerLeft"><</a>
  	<div class="headerTitle">
  		<a href="">
  			输入城市/景点/游玩主题
  		</a>
  	</div>
  	<div class="headerRight">
  		<a href=""><span class="city">北京</span></a>
  	</div>
  </header>
</template>

<script>

export default {
  data () {
    return {
      msg: 'header'
    }
  }
}
</script>

<style scoped>
	.header{
		display: box;
		width: 100%;
		height: .88rem;
		background: #00bcd4;
		display: flex;
	}
	.headerLeft{
		display: inline-block;
		width: .4rem;
		line-height: .88rem;
		padding: 0 .2rem;
		color: #fff;
		font-size: .4rem;
	}
	.headerTitle{
		display: inline-block;
	    box-sizing: border-box;
	    flex: 1;
	    position: relative;
	    height: .6rem;
	    margin: .14rem 0;
	    background: #fff;
	    line-height: .7rem;
	    border-radius: .06rem;
	}
	.headerTitle a{
    	color: #e4e7ea;
	}
	.headerRight{
		display: inline-block;
		height: 100%;
		margin-right: .3rem;	
	}
	.headerRight a{
		display: inline-block;
	    line-height: .88rem;
	    color: #fff
	}
	.city{
		padding: 0 .22rem;
		position: relative;
	}
	.city:after{
		content: "";
		width: 0;
		height: 0;
		border-left: .12rem solid transparent;
		border-right: .12rem solid transparent;
		border-top:.12rem solid #fff;
		position: absolute;
		top: .1rem;
	}
>>>>>>> 147fef6dc062474905e4d48781722b5f29013a96
</style>
