<template>
    <div class="bottom">
      <div class="btn" @click="show = !show">立即预定</div>
       <transition name="fade">
      <div class="booking" v-if="show">
      	<div class="booking-con">
	      	<div class="booking-title">
	      		<h2>
	      			<p>【赠海鲜券】蜈支洲岛纯玩1日游（三亚市区亚龙湾海坡均可接送)</p>
	      		</h2>
	      		<p class="price">
	      			<span class="price-num">&yen;<em>150</em></span>
	      			<span class="price-tit">起/份</span>
	      		</p>
	      	</div>
	  		<h3>日期选择</h3>
	  		<ul class="time">
	  			<li class="today"><em>今天</em><i>11月07日</i></li>
	  			<li class="tomorrow"><em>明天</em><i>11月07日</i></li>
	  			<li class="after"><em>后天</em><i>11月07日</i></li>
	  			<li class="other">其他日期</li>
	  		</ul>
	  		<h3>人群</h3>
	  		<div class="crowd">
	  			<strong>成人</strong>
	  			<strong>儿童</strong>
	  		</div>
	  		<h3>用餐</h3>
	  		<div class="meal">
	  			<strong>不含餐</strong>
	  			<strong>含餐</strong>
	  		</div>
	  		<h3>发车时间</h3>
	  		<div class="btm-time">
	  			<strong>07:00</strong>
	  			<strong>08:00</strong>
	  			<strong>09:00</strong>
	  		</div>
	  		<div class="close iconfont icon-close" @click="show = !show"></div>
  		</div>
  		<div class="btn1">立即预定</div>
  		</div>
  		</transition>
    </div>
</template>


<script>
  export default {
    data() {
    	return {
    		show:false
    	}
    }
  }
</script>


<style scoped>

  .fade-enter-active, .fade-leave-active {
	  transition: all .8s ease;
   }
  .fade-enter, .fade-leave-to {
	  transform: translateY(10rem);
   }

  .bottom {
  	position: relative;
  }
  .btn {
    width: 100%;
    border: 0 none;
    background: #ff9800;
    color: #fff;
    font: normal .36rem/1rem Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif;
    text-align: center;
  }
  .btn1 {
    width: 100%;
    border: 0 none;
    background: #ff9800;
    color: #fff;
    font: normal .36rem/1rem Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif;
    text-align: center;
  }
  .booking {
  	width:100%;
  	position: absolute;
  	left:0;
  	bottom: 0;
  	overflow: hidden;
  }
  .booking-con {
  	background: #fff;
  	padding: 0 .2rem;
  	position: relative;
  }
  h2 {
  	margin-right: .6rem;
    padding: .3rem 0 .1rem 0;
    font-size: .34rem;
    line-height: .4rem;
  }
  h2 p {
  	overflow: hidden;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .price {
  	color: #9e9e9e;
    font-size: .24rem;
    line-height: .48rem;
  }
  .price .price-num {
  	color: #ff8300;
  }
  .price-num em {
  	margin-left: .06rem;
    font-size: .36rem;
  }
  .price .price-tit {
  	color: #9e9e9e;
    font-size: .24rem;
    line-height: .48rem;
  }
  h3 {
  	padding-top: .1rem;
    line-height: .66rem;
    color: #333;
    font-size: .26rem;
  }
  ul li {
  	box-sizing: border-box;
    float: left;
    width: 22.5%;
    height: .86rem;
    overflow: hidden;
    min-width: 1.2rem;
    min-height: .82rem;
    border: .02rem solid #bdbdbd;
    border-radius: .1rem;
    margin-left: .18rem;
    text-align: center;
  }
  .today {
  	margin-left: 0;
  }
  ul li em {
  	display: block;
  	line-height: .4rem;
  }
  .other {
  	line-height: .8rem;
  }
  ul li i {
  	color: #888;
  }
  .today i {
  	color: #dedede;
  }
  strong {
  	position: relative;
    border: .02rem solid #c7ced4;
    color: #212121;
    overflow: hidden;
    display: inline-block;
    margin-right: .2rem;
    margin-top: .15rem;
    padding: 0 .2rem;
    line-height: .53rem;
    font-size: .28rem;
    border-radius: .1rem;
  }
  .btm-time {
  	margin-bottom: .3rem;
  }
  .close {
  	position: absolute;
    top: .2rem;
    right: .15rem;
    width: .4rem;
    height: .4rem;
    color: #9e9e9e;
    font-size: .3rem;
    line-height: .5rem;
    text-align: center;
    border: 2px solid #888;
    border-radius: 50%;
  }
</style>