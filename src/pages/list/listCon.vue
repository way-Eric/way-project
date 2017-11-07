<template>
	<div class="item-con">
        <paginate class="view-list page" ref="paginator" name="listInfo" :list="listInfo" :per="per">
		<div class="list-info" v-for="(item, index) in paginated('listInfo')" :key="item.id">
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
        </paginate>
        <div class="moreinfo">
            <div class="pagination">
                <a @click="prevPage" class="linkPage">上一页</a>
                <span v-if="$refs.paginator" ref="pageNumber" class="page-num" :val="pageNum">
                    {{pageNum}}
                </span>
                <a @click="textPage" class="linkPage">下一页</a>
            </div>
        </div>
	</div>	
</template>
<script>
    import {Paginate, PaginateLinks} from 'vue-paginate'
   
	export default{
       
        methods: {
            prevPage () {

                if (this.$refs.paginator) {
                    var current = this.pageNum;
                    if(current > 1) {
                        this.$refs.paginator.goToPage(this.pageNum-1);
                    }
                }

            },
            textPage () {
                if (this.$refs.paginator) {
                    var num = parseInt(this.listInfo.length/this.per)+1;
                    var current = this.pageNum;
                    if(current < num) {
                        this.$refs.paginator.goToPage(this.pageNum+1);
                    }
                }
                //console.log(this.$refs.paginator.pageItemsCount)
            }
        },
        computed: {
            pageNum: function() {
                return parseInt(parseInt(this.$refs.paginator.pageItemsCount)/this.per)+1
            } 
        },
        props:["listInfo"],
        data () {
            return {
                isAction: this.pre,
                per: 10,
                paginate: ['listInfo']
            }
        }, 
        ready() {
           document.addEventListener('click', (e) => {
               if (!this.$el.contains(e.target)) this.showl = false
           })
        }
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
.moreinfo {
        padding-bottom: .2rem;
        color: #00afc7;
        text-align: center;
        line-height: .7rem;
        background: #f5f5f5;
    }
    .linkPage {
        display: inline-block;
        width: 1.4rem;
        border: .02rem solid #00afc7;
        background: #fff;
        color: #00afc7;
        line-height: .6rem;
        border-radius: .06rem;
    }
    .disablePage {
        background: #bdbdbd;
        color: #fff;
        border: 0;
    }
    .page-num {
        color: #212121;
        line-height: .6rem;
        padding: 0 15px;
    }
    .page-text {
        padding-top: .2rem;
        line-height: .3rem;
        font-size: .3rem;
    }
</style>