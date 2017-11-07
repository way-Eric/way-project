<template>
	<div class="item-con">
		<div class="list-info" v-for="item in listInfo" :key="item.id">
			<div class="list-info-con">
				<div class="list-info-title">
					<div class="title-left">
						<img :src="item.imgUrl">
					</div>
					<div class="title-right">
						<div class="right-name">
							<div class="right-name-con">{{item.name}}</div>
							<span :class="item.hot">{{item.hotCon}}</span>
							<div class="price"><span>¥{{item.price}}</span>起</div>	
						</div>
						<div class="star-leavel">
                            <em>★★★★★</em> 
							<span>{{item.comment}}</span><span>评论</span>
						</div>
						<div class="location">
							<span>{{item.location}}</span>
						</div>	
					</div>
				</div>
			</div>	
				<div class="ticket-fir-con">
					<h4>{{item.ticketFir}}</h4>
					<span>&yen; <em>{{item.priceFir}}</em></span>
				</div>
				<div class="ticket-sec-con">
					<h4>{{item.ticketSec}}</h4>
					<span>&yen; <em>{{item.priceSec}}</em></span>
				</div>
		</div>
	</div>	
</template>
<script>
    import {Paginate, PaginateLinks} from 'vue-paginate'
	export default{
        props:["listInfo"],
            
    }
</script>
<style scoped>
.item-con{
    background:#f1f1f1;
}
.list-info{
	margin-bottom: .2rem;
   	 background: #fff;
   	 border-top:1px solid #ccc;
   	 border-bottom:1px solid #ccc;
}
.list-info-con{
	position:relative;
	height: 1.6rem;
	padding: .2rem;
	border:0;
}
.title-left{
	float:left;
}
.title-left img{
	height:1.6rem;
}
.title-right{
	float:left;
	padding-left: .2rem;
    height: 1.6rem;
}
.right-name{
	height: .36rem;
	width:100%;
}
.right-name-con{
	float:left;
	overflow: hidden;
    color: #212121;
    font-size: .32rem;
    line-height: .36rem;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.right-hot{
	display: inline-block;
    margin-left: .06rem;
    width: .3rem;
    height: .3rem;
    background: #ff1200;
    color: #fff;
    font-size: .24rem;
    line-height: .3rem;
    text-align: center;
}
.price{
	position: absolute;
    top: .2rem;
    right: .2rem;
    height: .36rem;
    color: #ff8300;
    font-size: .2rem;
}
.price span{
	color: #ff8300;
    font-size: .36rem;
    line-height: .36rem ;
}
.star-leavel{
	margin-top: .38rem;
    height: .64rem;
    line-height: .64rem;
}
.star-leavel span{
    margin-left: .06rem;
    color: #9e9e9e;
    font-size: .24rem;
}
.star-leavel em{
    color:#00bcd4;
    font-size:.2rem
}
.location{
    color: #9e9e9e;
    white-space: nowrap;
}
.location span {
	color: #9e9e9e;
    font-size: .24rem;
    white-space: nowrap;
}
.ticket-fir-con{
	position: relative;
    height: .9rem;
    margin: 0 .2rem;
    border-top:1px dashed #ccc;
}
.ticket-fir-con h4{
	overflow: hidden;
    margin-right: 1.2rem;
    color: #212121;
    font-size: .28rem;
    line-height: .9rem;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.ticket-fir-con span{
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    width: 1.2rem;
    height: .9rem;
    color: #ff8300;
    font-size: .2rem;
    line-height: .9rem;
    text-align: right;
}
.ticket-fir-con span em{
	font-size: .36rem;
}

.ticket-sec-con{
    position: relative;
    height: .9rem;
    margin: 0 .2rem;
    border-top:1px dashed #ccc;
}
.ticket-sec-con h4{
    overflow: hidden;
    margin-right: 1.2rem;
    color: #212121;
    font-size: .28rem;
    line-height: .9rem;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.ticket-sec-con span{
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    width: 1.2rem;
    height: .9rem;
    color: #ff8300;
    font-size: .2rem;
    line-height: .9rem;
    text-align: right;
}
.ticket-sec-con span em{
    font-size: .36rem;
}
</style>