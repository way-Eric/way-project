<template>
    <div class="main">
      <div class="Trip">
      	<ul id="Trip" class="mian-head" :class="{active:isActive}">
      		<li @click="handleTripScroll" :class="{active1:isActive1}"><a href="#Trip">行程介绍</a></li>
      		<li :class="{active1:isActive2}"><a href="#Highlights">费用说明</a></li>
      		<li :class="{active1:isActive3}"><a href="#arrange">使用说明</a></li>
      	</ul>
      </div>
		<div class="Highlights">
			<div class="bg-gay">
				<div class="bg-gay-con">
					<p><span class="iconfont icon-jiaotong"></span><em>交通</em>汽车往返</p>
					<p><span class="iconfont icon-yongcan"></span><em>用餐</em>可选餐食</p>
				</div>
			</div>
			<h3 id="Highlights">行程亮点</h3>
			<div class="activty">
				<p>
	                活动1： 赠送蜈支洲岛潜水代金券20元/人，需要请加微信索取：13807522496
	                <br>
	                活动2： 赠送三亚海棠湾cdf免税店班车，提前一天16:00前致电预约：010-89930286，并把每位出游人的姓名，身份证，航班信息等告知我们。
                </p>
            </div>
		</div>
		<div class="arrange">
			<h3 id="arrange">行程安排</h3>
			<ul class="arrange-con">
				<li class="arrange-list" v-for="item in items" :key="item.id">
					<div class="list-top">
						<span class="list-time">{{item.time}}</span>
						<span class="list-icon iconfont" :class="item.icon"></span>
						<span class="list-area" :class="item.add">{{item.area}}</span>
					</div>
					<p class="list-detail">{{item.title}}</p>
				</li>
			</ul>
		</div>
    </div>
</template>


<script>
	export default {
		props:['items'],
    data() {
      return {
        isActive:false,
        isActive1:true,
        isActive2:false,
        isActive3:false
      }
    },
    mounted() {
      window.addEventListener("scroll",this.handleScroll.bind(this))
    },
    destoryed() {
      window.removeEventListener("scroll",this.handleScroll.bind(this))
    },
    methods: {
      handleScroll() {
        var scrollTop = window.pageYOffste || document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop <= 446) {
          this.isActive = false
        }else {
          this.isActive = true
        }
        if(scrollTop > 470 && scrollTop <= 730) {
          this.isActive1 = false;
          this.isActive2 = true;
          this.isActive3 = false;
        }else if(scrollTop > 730) {
          this.isActive1 = false;
          this.isActive2 = false;
          this.isActive3 = true;
        }else {
          this.isActive1 = true;
          this.isActive2 = false;
          this.isActive3 = false;
        }
      },
      handleTripScroll() {
        window.scrollTo(615,446)
      }
    }
	}
</script>


<style scoped>
  .main {
  	margin-top: .2rem;
    padding: .01rem 0.2rem;
    background-color: #fff;
  }
  .mian-head {
  	overflow: hidden;
    margin-bottom: -.2rem;
    border-bottom: 1px solid #ccc;
  }
  .mian-head li {
  	width: 33.33%;
  	position: relative;  
    height: .4rem;
    padding: .2rem 0;
    font-size: .28rem;
    line-height: .4rem;
    text-align: center;
    float: left;
    background: #fff;
  }
  .active1 {
  	border-bottom: .04rem solid #00afc7;
  }
  .mian-head li a {
	color: #616161;
  }
  .mian-head li:first-child a {
  	color: #00afc7;
  }
  .Highlights {
  	margin-top: .2rem;
    background-color: #fff;
    overflow: hidden;
  }
  .bg-gay {
  	padding: .24rem 0;
  }
  .bg-gay-con {
  	background-color: #f5f5f5;
    border-radius: .1rem;
    padding: .2rem;
  }
  .bg-gay-con p {
  	position: relative;
    zoom: 1;
    overflow: hidden;
    margin-bottom: .2rem;
  }
  .bg-gay-con p span {
  	color: #919191;
    margin-right: .1rem;
  }
  .bg-gay-con p em {
  	color: #212121;
  	margin-right: .3rem;
  }
  .Highlights h3 {
  	color: #616161;
    font-size: .4rem;
  }
  .Highlights .activty {
  	padding: .24rem 0 .3rem 0;
    border-bottom: 1px dashed #dadada;
  }
  .activty p {
  	color: #616161;
    font-size: .28rem;
    line-height: .44rem;
    max-height: 1.32rem;
    overflow: hidden;
  }
  .arrange h3 {
	color: #616161;
    font-size: .4rem;
    margin: .3rem 0 0 0;
  }
  .arrange .arrange-con {
  	padding: .2rem 0;
  }
  .arrange-list {
  	padding-bottom: .14rem;
  	position: relative;
  }
  .list-top .list-time {
	overflow: hidden;
    width: .72rem;
    height: .44rem;
    white-space: nowrap;
  }
  .list-icon {
  	color: #00afc7;
    font-size: .28rem;
    margin-left: .2rem;
  }
  .list-area {
  	margin-left: .2rem;
    font-size: .28rem;
    padding-bottom: .1rem;
    color: #00afc7;
  }
  .list-detail {
  	margin-left: 1.5rem;
  	margin-top: .1rem;
  	color: #616161;
    font-size: .28rem;
    padding-bottom: .1rem;
    line-height: .4rem;
    position: relative;
  }
  .list-detail:after {
  	content: '';
    position: absolute;
    bottom: 0;
    left: -.68rem;
    width: 1px;
    height: 100%;
    margin-left: .3rem;
    border-radius: 3px;
    background-color: rgba(217,217,217,0.7);
  }
  .add {
  	color: #212121;
  }
  .active {
    position: fixed;
    top: .88rem;
    left: 0;
    width: 100%;
    z-index: 2;
  }
  .Trip {
    height:0.86rem;
  }
</style>