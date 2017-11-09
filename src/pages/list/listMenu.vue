<template>
	<div>
		<div class="box">
		<div class="list-menu" ref="menu" :class="{active:isActive}">
			
			<div class="menu-con">
				<div class="menu-left" v-on:click="handleClickMenuLeft">全部分类</div>
				<div class="menu-right" v-on:click="handleClickMenuRight">人气最高</div>

				<div class="menu-sort"  v-if="showl">
					<ul class="menu-sort-con">
						<li class="first"><img src="https://img1.qunarzz.com/piao/fusion/1509/9d/0ee9e4808773f.png">全部分类<span>2444</span></li>
						<li><img src="http://img1.qunarzz.com/piao/fusion/1608/73/0c8e23368dceac02.png">文化古迹<span>449</span></li>
						<li><img src="http://img1.qunarzz.com/piao/fusion/1608/a5/9254bfcb77931f02.png">农家度假<span>426</span></li>
						<li><img src="http://img1.qunarzz.com/piao/fusion/1608/3e/d07407699d56c202.png">游乐场<span>203</span></li>
						<li><img src="http://img1.qunarzz.com/piao/fusion/1608/f8/799d67d22404c602.png">自然风光<span>185</span></li>
						<li class="last-li"><img src="http://img1.qunarzz.com/piao/fusion/1608/70/a7a71fb69cc7d902.png">公园<span>178</span></li>
						<li><img src="http://img1.qunarzz.com/piao/fusion/1608/73/0c8e23368dceac02.png">文化古迹<span>449</span></li>
						<li><img src="http://img1.qunarzz.com/piao/fusion/1608/a5/9254bfcb77931f02.png">农家度假<span>426</span></li>
						<li><img src="http://img1.qunarzz.com/piao/fusion/1608/3e/d07407699d56c202.png">游乐场<span>203</span></li>
						<li><img src="http://img1.qunarzz.com/piao/fusion/1608/f8/799d67d22404c602.png">自然风光<span>185</span></li>
						<li class="last-li"><img src="http://img1.qunarzz.com/piao/fusion/1608/70/a7a71fb69cc7d902.png">公园<span>178</span></li>
						<li><img src="http://img1.qunarzz.com/piao/fusion/1608/73/0c8e23368dceac02.png">文化古迹<span>449</span></li>
						<li><img src="http://img1.qunarzz.com/piao/fusion/1608/a5/9254bfcb77931f02.png">农家度假<span>426</span></li>
						<li><img src="http://img1.qunarzz.com/piao/fusion/1608/3e/d07407699d56c202.png">游乐场<span>203</span></li>
						<li><img src="http://img1.qunarzz.com/piao/fusion/1608/f8/799d67d22404c602.png">自然风光<span>185</span></li>
						<li class="last-li"><img src="http://img1.qunarzz.com/piao/fusion/1608/70/a7a71fb69cc7d902.png">公园<span>178</span></li>
						<li><img src="http://img1.qunarzz.com/piao/fusion/1608/73/0c8e23368dceac02.png">文化古迹<span>449</span></li>
						<li><img src="http://img1.qunarzz.com/piao/fusion/1608/a5/9254bfcb77931f02.png">农家度假<span>426</span></li>
						<li><img src="http://img1.qunarzz.com/piao/fusion/1608/3e/d07407699d56c202.png">游乐场<span>203</span></li>
						<li><img src="http://img1.qunarzz.com/piao/fusion/1608/f8/799d67d22404c602.png">自然风光<span>185</span></li>
						<li class="last-li"><img src="http://img1.qunarzz.com/piao/fusion/1608/70/a7a71fb69cc7d902.png">公园<span>178</span></li>
					</ul>
				</div>
				<div class="menu-popular" v-if="showr">
					<ul class="menu-popular-con">
						<li>排序推荐</li>
						<li>离我最近</li>
						<li class="last-li">人气最高</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
		
	</div>
</template>
<script>
	export default{
		data(){
			return{
				'showr':false,
				'showl' : false,
				'isActive':false
			}
		},
		methods: {
			handleClickMenuLeft(){
				this.showr = false
				if(this.showl){
					this.showl = false
				} else{
					this.showl = true
				}

			},
			handleClickMenuRight(){
				this.showl = false
				if(this.showr){
					this.showr = false
				} else{
					this.showr = true
				}
			},
			// handleWindowClick(){
			// 	this.showl = false,
			// 	this.showr = false		 
			// },
			handleScroll () {
			  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
			  //console.log(scrollTop)
			  if(scrollTop >= 45){
			  		this.isActive = true
			  }
			  if(scrollTop < 45){
			  	this.isActive = false
			  }
			 
			}
		},
		mounted(){
			window.addEventListener('scroll', this.handleScroll);
			document.addEventListener('click',this.handleWindowClick)
		},
		destroyed () {
		    window.removeEventListener('scroll', this.handleScroll)
		},
	}
</script>
<style scoped>
.box{
	height:.8rem;
}
.active{
	position:fixed;
	top:0;
	left:0;
	height: .8rem;
    background-color: #fff;
    width: 100%;
    z-index: 1;
    border-bottom:1px solid #f1f1f1;
}
.list-menu{
	height: .8rem;
    background-color: #fff;
    width: 100%;
}

.menu-left{
	position:relative;
	box-sizing: border-box;
	height:.8rem;
	width:50%;
	float:left;
	border-right:1px solid #ccc;
	text-align:center;
	line-height: .8rem;
	font-size: .28rem;
}
.menu-right{
	box-sizing: border-box;
	height:.8rem;
	width:50%;
	float:left;
	text-align:center;
	line-height: .8rem;
	font-size: .28rem;
}
.menu-con{
	position:relative;
}
.menu-sort{
	position:absolute;
	top:.8rem;
	z-index: 999;
	width:100%;
	min-height:4.8rem;
	background:#f1f1f1;
}
.menu-sort-con{
	height:4.8rem;
	width:50%;
	background:#fff;
	overflow: auto
}
.menu-sort-con li{
	box-sizing: border-box;
	padding-left:.3rem;
    line-height: .8rem;
    height: .8rem;
    overflow: hidden;
    text-align: left;
    color: #212121;
    border-top:1px solid #ccc;
}
.menu-sort-con li img{
	width: .3rem;
    height: .3rem;
    vertical-align: middle;
    margin-right: .1rem;
}
.menu-sort-con li span{
    float: right;
    margin-right: .2rem;
    font-size: .24rem;
    color: #9e9e9e;
}
.menu-popular{
	position:absolute;
	top:.8rem;
	z-index: 999;
	width:100%;
}
.menu-popular-con li{
	box-sizing: border-box;
	height:.8rem;
	width:100%;
	background:#fff;
	border-top:1px solid #ccc;
	text-align: center;
	line-height: .8rem;
}
.last-li{
	border-bottom:1px solid #ccc;
}
</style>