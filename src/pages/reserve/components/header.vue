<template>
	<div id="head">
	    <div class="head">
			<a class="head-con" href="#">
				<img class="head-img" src="https://imgs.qunarzz.com/p/tts4/1707/32/a2285e5934d06e02.jpg_640x360_9a11a850.jpg" alt="风景图">
			</a>
			<router-link to="/" class="back">
				<span class="back-bg"></span>
				<span class="bcak-icon iconfont icon-back"></span>
			</router-link>
			<div class="head-title">
				<span class="head-title-left">出发地：三亚</span>
				<span class="head-title-right">三亚海岛风情旅...</span>
			</div>
	    </div>
	    <div class="abstract">
			<h2 class="abstract-name">【赠海鲜券】蜈支洲岛纯玩1日游（三亚市区亚龙湾海坡均可接送)</h2>
			<div class="ab-mid">
				<span class="mid-span mid-priceicon">&yen;</span>
				<em class="mid-price">150</em>
				<span class="mid-span mid-gay">起</span>
				<span class="mid-span mid-date">可订11月18号</span>
				<span class="mid-span mid-num">已售4082</span>
			</div>	
			<ul class="ab-tag">
				<li class="explain">
					<span class="icon iconfont icon-dui"></span>条件退
				</li>
				<li class="explain">
					<span class="icon iconfont icon-dui"></span>铁定成团
				</li>
				<li class="explain">
					<span class="icon iconfont icon-dui"></span>无购物
				</li>
			</ul>
		</div>
	</div>
</template>


<script>
	export default {

  }
</script>


<style scoped>
  .head {
  	overflow: hidden;
  	position: relative;
  	height: 4rem;
  }
  .head-con {
  	display: block;
  	width: 100%;
  	height: 0;
  	padding-bottom: 4rem;
  }
  .head-img {
  	width: 100%;
  	min-height: 4rem;
  }
  .back {
  	position: absolute;
  	top: 0.1rem;
  	left: 0.1rem;
  	width: 0.72rem;
  	height: 0.72rem;
  	border-radius: 50%;
  	overflow: hidden;
    font-size: .36rem;
    color: #fff;
    text-align: center;
  }
  .back-bg {
  	display: block;
  	width:0.72rem;
  	height: 0.72rem;
  	background-color: rgba(0,0,0,.5);
  }
  .bcak-icon {
  	position: absolute;
  	top: 0;
  	left: 0;
  	font-size: .6rem;
  	width: 0.72rem;
  	line-height: 0.85rem;
  	font-weight: 600;
  }
  .head-title {
  	position: absolute;
  	left: 0;
  	bottom: 0;
  	width: 100%;
  	height: .93rem;
  	color: #fff;
  	line-height: 1.2rem;
  	background: linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0));
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
    background-position-x: initial;
    background-position-y: initial;
    background-size: initial;
    background-repeat-x: initial;
    background-repeat-y: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: initial;
    font-size: .15rem;
  }
  .head-title-left {
  	margin-left: .2rem;
  }
  .head-title-right {
  	float: right;
  	margin-right: .2rem;
  }
  .abstract {
  	position: relative;
  	margin-top:-.1rem;
  	overflow: hidden;
  	border-radius: .15rem .15rem 0 0;
  	background-color: #fff;
  	padding: .2rem .2rem 0rem .2rem;
  }
  .abstract-name {
  	overflow: hidden;
  	color: #212121;
  	font-size: 0.36rem;
	line-height: .44rem;
	text-overflow: ellipsis;
  }
  .ab-mid {
	overflow: hidden;
	margin: .16rem 0;
	font-size: 0;
  }
  .mid-span {
  	font-size: .24rem;
  }
  .mid-priceicon {
  	color: #ff8300;
  }
  .mid-price {
  	font-size: .48rem;
  	color: #ff8300;
  }
  .mid-gay {
  	color: #9e9e9e;
  }
  .mid-date {
  	color: #616161;
    margin-left: .2rem;
  }
  .mid-num {
  	color: #616161;
    float: right;
    height: .24rem;
    margin-top: .2rem;
  }
  .ab-tag {
  	overflow: hidden;
  	padding-bottom: .2rem;
  	font-size: 0;
  }
  .explain {
  	float: left;
  	height: .34rem;
    font-size: .24rem;
    line-height: .34rem;
    margin-right: .24rem;
  }
  .icon {
  	margin-right: .04rem;
    color: #00afc7;
    font-size: .28rem;
    vertical-align: -.02rem;
  }
</style>