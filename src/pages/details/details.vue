<template>
<div class="mp-page" id="main-page">
    <transition name="fade"> 
        <div class="mp-header" v-show="show" ref="top">
            <router-link to="/" mp-role="left" class="mp-header-left iconfont icon-back">
            </router-link>
            <h1 mp-role="title" class="mp-header-title">故宫</h1>
        </div>
    </transition>
    <div class="mp-main">
        <div class="mp-headfigure">
            <div class="mp-headfigure-wrap">
                <img class="mp-headfigure-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" alt="故宫">
            </div>
            <div class="mp-headfeagure-info">
                <div class="mp-headfeagure-title">
                    故宫(AAAAA景区)
                </div>
                <div class="mp-imgswipeicon">
                    <span class=" iconfont icon-tupian">

                    </span>
                    <em class="mp-imgswipeicon-number">10</em>
                </div>
            </div>
        </div>
        <div class="mp-baseinfo">
            <div class="mp-baseinfo-address" id="card-adress">
                <p class="mp-baseinfo-address-txt">
                    <span class="iconfont icon-dingwei"></span>
                    北京市东城区景山前街4号
                    <span class="iconfont icon-jiantouyou"></span>
                </p>
                <a class="mp-baseinfo-intro mp-border-top" href="//touch.piao.qunar.com/touch/sight/introduction.htm?sightId=989946426">
                    <p class="mp-baseinfo-intro-txt">
                        <span class="iconfont icon-tupian"></span>
                        查看景点简介及开放时间
                        <span class="iconfont icon-jiantouyou"></span>
                    </p>
                </a>
            </div>
        </div>
        <div class="mp-commentsinfo-con">
            <span class="mp-comment-icon"></span>
            <span class="mpf-starlevel">
                <i class="mpf-starlevel-gain">★★★★★</i>
                <span class="mp-comments-tagscore">5.0分</span>
            </span>
            <a class="mp-comments-total" mp-role="commentLink" href="//touch.piao.qunar.com/touch/sight/comment.htm?sightId=989946426&amp;cat=from_area%3Dts_hot_recommend%26from_index%3D0%26from_value%3D%25E6%2595%2585%25E5%25AE%25AB%26dist_city%3D%25E5%258C%2597%25E4%25BA%25AC">
                <span class="mp-comments-totalnum">
                153582评论&nbsp;
                <span class="iconfont icon-jiantouyou"></span>
                </span>
            </a>
        </div>
        <div class="mp-announce-con" id="mp-announce-con">
            <div class="mp-announce-inner">
                <span class="iconfont icon-laba"></span>
                因重要活动需要，故宫博物院11月8日（周三）临时闭馆一天，11月9日（周四）正常开放。敬请谅解。
                <span class="iconfont icon-jiantouyou"></span>
            </div>
        </div>
        <div class="list-container">
            <div class="mp-ticket-container">
                <div class="mp-promot" mp-role="promoteArea">
                    <h3 class="mp-ticket-type mp-border-bottom">
                        去哪儿推荐
                    </h3>
                    <div class="mp-ticket-item mp-flexbox mp-border-top" data-tickettype="TicKET" mp-role="TicketItem" v-for="item in items">
                        <div class="mp-ticket-main mp-flexbox-layout" mp-role="TicketMainZone" data-click="true" data-clicl-value="t_mini_window_bc">
                            <div>
                                <h6 class="mp-ticket-title mp-ellipsis2">
                                    {{item.title}}
                                </h6>
                                <ul class="mp-ticket-light"></ul>
                                <ul class="mp-ticket-light">
                                    <span class="mp-ticket-desctag">
                                        <span class="iconfont icon-shijianzhongbiao"></span>
                                        {{item.time}}
                                    </span>
                                    <span class="mp-ticket-desctag">
                                        <span class="iconfont icon-dui"></span>
                                        {{item.term}}
                                    </span>
                                    <span class="mp-ticket-desctag" :class="item.add">
                                        <span class="iconfont icon-dui"></span>
                                        {{item.form}}
                                    </span>
                                </ul>
                            </div>                           
                        </div>
                        <div class="mp-ticket-side mp-flexbox-layout mp-border-left">
                            <a href="/touch/order/form.htm?pid=3676234718&amp;priceId=3319191727&amp;classify=1&amp;supplierId=15363&amp;isTuan=false&amp;sid=38170&amp;tuanId=&amp;cat=from_area%3Dts_hot_recommend%26from_index%3D0%26from_value%3D%25E6%2595%2585%25E5%25AE%25AB%26dist_city%3D%25E5%258C%2597%25E4%25BA%25AC%26pIndex%3D2" data-pid="3676234718" data-type="ticket" data-inactivity="false" data-redid="" data-hasmob="" data-suppliertype="3" data-supplierid="15363" data-suppliername="北京直营" data-teamtype="0" class="mp-ticket-link" mp-role="TicketLink" title="故宫门票">
                                <strong class="mp-ticket-sale mp-price">
                                    ¥
                                    <em class="mp-price-num">
                                        {{item.money}}
                                    </em>
                                </strong>
                                <em mp-role="downloadAppBtn" class="mp-ticket-btn mp-promote-ablebtn">
                                    预订
                                </em>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="mp-ticket-group mp-border-bottom" v-for="piao in piaos">
                    <h3 class="mp-ticket-type">
                        <span class="mp-tickettype-ticket"></span>
                        {{piao.name}}
                    </h3>
                    <div class="mp-ticket-list" v-for="msg in play">
                        <div class="mp-ticket-type-info">
                            <h5 class="mp-ticket-type-name">
                                {{msg.time}}
                                <span class="mp-ticket-type-subname">
                                    {{msg.form}}
                                </span>
                            </h5>
                            <div class="mp-ticket-type-price">
                                ¥
                                <em class="mp-price-num">{{msg.money}}</em>
                                <span class="mp-ticket-numword">起</span>
                            </div>
                            <div class="mp-ticket-type-extend iconfont icon-down-trangle"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mp-recommend-container">
                <h3 class="mp-recommend-title">
                    看了该景点的人还看了
                </h3>
                <div class="mp-recommend-list">
                    <a href="//touch.piao.qunar.com/touch/detail.htm?id=4194325354&amp;cat=from_area%3Dts_hot_recommend%26from_index%3D0%26from_value%3D%25E6%2595%2585%25E5%25AE%25AB%26dist_city%3D%25E5%258C%2597%25E4%25BA%25AC" mp-role="sightLink">
                        <div class="mp-recommend-item" v-for="last in lasts">
                            <img class="mp-recommend-img" mp-role="lazyLoadImg" :data-original-src="last.img" :src="last.img">
                            <div class="mp-recommend-info mp-border-bottom">
                                <div class="mp-recommend-sight">
                                    {{last.name}}
                                    <span class="mp-recomment-sightstar">
                                        {{last.grade}}
                                    </span>
                                </div>
                                <div class="mp-recommend-price mp-price">
                                    ¥
                                    <em class="mp-price-num">{{last.money}}</em>
                                    <span class="mp-recommend-flag">起</span>
                                </div>
                                <div class="mp-recommend-comment">
                                    <span>
                                        <i data-score="4.44" style="width:100.0%">★★★★★</i>
                                    </span>
                                    <span class="mp-recommend-commentnum">{{last.sum}}</span>
                                </div>
                                <div class="mp-recommend-position">
                                    <span class="mp-recommend-subposition mp-border-left">{{last.position}}</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>  
    <div class="qu_footer" id="qunarFooter">
        <div class="main_nav_wrapper">
            <ul class="main_nav" id="qunarFooterUL"> 
                <li>
                    <a href="//touch.qunar.com/h5/flight/">
                        <div class="nav-icon" style="background-position: 0 0;"></div>
                        <span class="title">机票</span>
                    </a>
                </li>
                <li>
                    <a href="//touch.qunar.com/h5/flight/">
                        <div class="nav-icon" style="background-position: -25px 0;"></div>
                        <span class="title">酒店</span>
                    </a>
                </li>
                <li>
                    <a href="//touch.qunar.com/h5/flight/">
                        <div class="nav-icon" style="background-position: -150px 0;"></div>
                        <span class="title">公寓</span>
                    </a>
                </li>
                
                <li>
                    <span class="tag">更多</span>
                </li>
            </ul>
        </div>
        <ul class="footer_nav clearfix" id="qunarFooterBottom">
            <li>
                <a href="//touch.qunar.com/h5/user/login">登录</a>
            </li>
            <li>
                <a href="//touch.qunar.com/h5/user/usercenter">我的订单</a>
            </li>
            <li style="display: none;">
                <a href="//touch.qunar.com/h5/user/usercenter">个人中心</a>
            </li>
            <li>
                <a href="//touch.qunar.com/h5/recent">最近浏览</a>
            </li>
            <li>
                <a href="//touch.qunar.com/h5/about">关于我们</a>
            </li>
        </ul>
        <ul class="mobile_pc clearfix">
            <li class="active">
                <a href="//touch.qunar.com/h5/">触屏版</a>
            </li>
            <li>
                <a href="http://www.qunar.com/index.htm?from=mobile&amp;qn163=1" onclick="computer()">电脑版</a>
            </li>
        </ul>
        <div class="copyright">
            <span>Qunar 京ICP备05021087</span>
            <a class="qn_ml25" href="//touch.qunar.com/h5/feedback">意见反馈</a>
        </div>
    </div>
    <a class="mp-header-back mpg-iconfont" href="" v-show="show2">
        <span class="mp-headerback-bg"></span>
        <span class="iconfont  icon-back"></span>
    </a> 
</div>
   
</template>

<script>
import axios from "axios";

export default {
  components: {

  },
  data() {
    return{
        show2:true,
        show: false,
        items:[],
        piaos:[],
        play:[],
        lasts:[]
    }
  },
  mounted() {
    this.getDetailsData();
    this.$nextTick(function() {
        window.addEventListener('scroll',this.onScroll)
    })
  },
  methods: {
    onScroll () {
        let scrolled = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrolled >= 1) {
            this.show = true
            this.show2 = false
        }else {
            this.show = false
            this.show2 = true
        }
         var a = scrolled/300;
      this.$refs.top.style.opacity = a;
    },
    destroyed () {
        window.removeEventListener('scroll',this.onScroll)
    },

    getDetailsData() {
      axios.get("/static/details.json")
      .then(this.handleGetDataSucc.bind(this))
      .catch(this.handleGetDataErr.bind(this))
    },
    handleGetDataSucc(response) {
        this.items = response.data.data.details
        this.piaos = response.data.data.type;
        this.play = response.data.data.play;
        this.lasts = response.data.data.last;
    },
    handleGetDataErr(err) {
      console.log(err)
    }
  }
}
    
</script>


<style scoped>
.mp-page {
    width:100%;
    min-height:100%;
    background:#f9f9f9;
}
.mp-header {
    position: fixed;
    width: 100%;
    top: 0px;
    left: 0px;
    height: .88rem;
    opacity: 0;
    background: #00bcd4;
    z-index: 91;
}
.mp-header-left {
    left: 0;
    top: 0;
    width: .8rem;
    height: .88rem;
    line-height: .88rem;
    
}
.mp-header-left, .mp-header-back {
    position: absolute;
    font-size: .56rem;
    color: #fff;
    text-align: center;
}
.mp-header-title {
    position: absolute;
    left:3.4rem;
    overflow: hidden;
    line-height: .88rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: .32rem;
    text-align: center;
    color: #fff;
}
.mp-headfigure {
    position: relative;
}
.mp-headfigure-wrap {
    overflow: hidden;
    height: 0;
    width: 100%;
    padding-bottom: 55%;
}
.mp-headfigure-img {
    width: 100%;
    vertical-align: top;
}
.mp-headfeagure-info {
    position: absolute;
    right: .2rem;
    bottom: .2rem;
    left: .2rem;
    min-height: .4rem;
}
.mp-headfeagure-title {
    position: relative;
    z-index: 1;
    margin-right: 1.4rem;
    line-height: .4rem;
    color: #fff;
    font-size: .28rem;
    text-shadow: 0 1px 2px rgba(0,0,0,0.70)
}
.mp-imgswipeicon {
    position: absolute;
    right: 0;
    top: 0;
    width: 1.2rem;
    height: .3rem;
    background: rgba(0,0,0,.5);
    border-radius: .22rem;
    font-size: .2rem;
    color: #fff;
    line-height: .3rem;
    text-align: center;
}
.icon-tupian {
    position: relative;
    top: .02rem;
    font-size: .22rem;
}
.mp-imgswipeicon-number {
    margin-left: .1rem;
}
.mp-headfigure::after {
    content: " ";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    min-height: .6rem;
    background-color: transparent;
    background-image: -webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,0)),to(rgba(0,0,0,.8)));
    background-image: -webkit-linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8));
    background-image: -moz-linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8));
    background-image: -o-linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8));
    background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.8));
}
.mp-baseinfo {
    position: relative;
    top: -.1rem;
    padding: .1rem .2rem 0 .2rem;
    margin-bottom: .1rem;
    background: #fff;
    -webkit-border-radius: .1rem .1rem 0 0;
    -moz-border-radius: .1rem .1rem 0 0;
    border-radius: .1rem .1rem 0 0;
}
.mp-baseinfo-opentime, .mp-baseinfo-address, .mp-baseinfo-intro {
    display: block;
    position: relative;
    color: #212121;
    line-height: .88rem;
}
.mp-baseinfo-address-txt, .mp-baseinfo-intro-txt {
    overflow: hidden;
    padding-right: .56rem;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.icon-dingwei {
    margin-right: .2rem;
    color: #9e9e9e;
}
.icon-jiantouyou{
    position: absolute;
    right: 0;
    top: 0;
    color: #b9b9b9;
}
.mp-baseinfo-opentime::before, .mp-baseinfo-address::before, .mp-baseinfo-intro::before {
    border-top: 1px solid #f0f0ef;
}
.mp-baseinfo-intro-txt .icon-tupian{
    position: relative;
    top: .02rem;
    margin-right: .2rem;
    color: #9e9e9e;
}
.mp-commentsinfo-con {
    margin-bottom: .2rem;
    background-color: #fff;
    height: .8rem;
    line-height: .8rem;
}
.mp-comment-icon {
    position: relative;
    top: .08rem;
    display: inline-block;
    width: .36rem;
    height: .36rem;
    background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -1.35rem no-repeat;
    margin-left: .2rem;
    margin-right: .1rem;
    background-size: .4rem 3rem;
}
.mpf-starlevel {
    display: inline;
    position: relative;
    top: .04rem;
    width: 1.4rem;
    height: .28rem;
}
.mpf-starlevel-gain {
    display: inline;
    width:100%;
    color: #00bcd4;
    font-size: .35rem;
}
.mp-comments-tagscore {
    display: inline;
    margin-left: .1rem;
    color: #00afc7;
}
.mp-comments-total {
    float: right;
    display: block;
    margin-bottom: .2rem;
}
.mp-comments-totalnum {
    display: inline-block;
    line-height: .28rem;
    font-size: .28rem;
    margin-left: .16rem;
    margin-right: .2rem;
    color: #9e9e9e;
}
.mp-comments-totalnum .icon-jiantouyou{
    position: relative;
    top: .02rem;
}
.mp-announce-con {
    background-color: #fdeede;
    color: #f1441a;
    margin-bottom: .2rem;
    height: .88rem;
    line-height: .88rem;
    padding-left: .23rem;
}
.mp-announce-inner {
    padding-right: .6rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative
}
.icon-laba {
    color: #f67353;
    margin-right: .1rem;
}
.mp-announce-inner .icon-jiantouyou {
    right: .2rem;
    position: absolute;
    top: 0;
    color: #c7bcaf;
}
.mp-ticket-container {
    position: relative;
}
.mp-promot {
    position: relative;
    background: #fff;
    margin-bottom: .2rem;
}
.mp-ticket-type {
    overflow: hidden;
    position: relative;
    z-index: 4;
    margin-bottom: -.02rem;
    padding: 0 .2rem;
    height: .88rem;
    background: #fff;
    color: #333;
    font-size: .32rem;
    line-height: .88rem;
    text-indent: .4rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAflBMV…U8s5o0YxZvPrXdTx0on40sfih+Nnb5wT7x6fDR42Ty8+cXnHyOvDgQEbUAAAAASUVORK5CYII=);
    background-repeat: no-repeat;
    background-size: .5rem .5rem;
    background-position: .2rem center;
    text-indent: .7rem;
}
.mp-ticket-type.mp-border-bottom::before {
    border-color: #dadada;
}
.mp-ticket-item {
    padding: .2rem .2rem .24rem .2rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: .25rem;
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    position: relative;
}
.mp-ticket-item.mp-border-top::before {
    z-index: 1;
    border-color: #dadada;
}
.mp-ticket-main {
    -webkit-box-flex: 2.92;
    -moz-box-flex: 2.92;
    box-flex: 2.92;
    -webkit-flex: 2.92;
    -moz-flex: 2.92;
    -ms-flex: 2.92;
    flex: 2.92;
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    align-items: center;
    width: .02rem;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -webkit-flex: 1;
    -moz-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.mp-ticket-light {
    padding: .04rem 0 .08rem 0;
    overflow: hidden;
}
.mp-ticket-desctag {
    display: inline-block;
    color: #616161;
    font-size: .24rem;
    line-height: .32rem;
    white-space: nowrap;
}
.mp-ticket-desctag:not(:last-child) {
    margin-right: .24rem;
}
.mp-ticket-desctag .mp-ticket-tagicon {
    display: inline-block;
    margin-right: .08rem;
    color: #1ba9ba;
    font-size: .1rem;
}
.mp-ticket-desctag .iconfont {
    font-size :10px;
    color:blue;
}
.mp-ticket-side {
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    align-items: center;
    /* width: .02rem;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -webkit-flex: 1;
    -moz-flex: 1;
    -ms-flex: 1;
    flex: 1; */
    position: relative;
    width:100px;
}
.mp-ticket-link {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: block;
    width: 100%;
    padding-left: .2rem;
    color: #00afc7;
    text-decoration: none;
}
.mp-ticket-sale {
    color: #ff9800;
    height: .32rem;
    display: block;
    overflow: hidden;
    height: .6rem;
    font-size: .24rem;
    line-height: .28rem;
    text-align: center
}
.mp-price {
    font: .4rem "Microsoft yahei","Hiragino sans gb",Arial,sans-serif;
}
.mp-price-num {
    margin-left: .04rem;
    font-size: .35rem;
    line-height: .3rem;
    font: .28rem Tahoma,Helvetica,sans-serif;
}
.mp-ticket-btn {
    background: #ff9800;
    background: #fff;
    height: .7rem;
    background: #ff9800;
    color: #fff;
    font-size: .5rem;
    line-height: .7rem;
    -webkit-border-radius: .06rem;
    -moz-border-radius: .06rem;
    border-radius: .06rem;
    display: block;
    overflow: hidden;
    height: .7rem;
    font-size: .3rem;
    line-height: .7rem;
    text-align: center;
}
.mp-ticket-group {
    margin-top: .2rem;
    background: #fff;
    position: relative;
}
.mp-ticket-type {
    overflow: hidden;
    position: relative;
    z-index: 4;
    margin-bottom: -.02rem;
    padding: 0 .2rem;
    height: .88rem;
    background: #fff;
    color: #333;
    font-size: .32rem;
    line-height: .88rem;
    text-indent: .4rem;
}
.mp-tickettype-ticket {
    display: inline-block;
    position: absolute;
    width: .36rem;
    height: .36rem;
    top: .26rem;
    left: .2rem;
    background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
    margin-right: .1rem;
    background-size: .4rem 3rem;
}
.mp-ticket-list {
    overflow: hidden;
}
.mp-ticket-type-info {
    position: relative;
    z-index: 2;
    margin-bottom: -.02rem;
    padding: .24rem .2rem;
    background: #fff;
}
.mp-ticket-type-name {
    margin-right: 1.8rem;
    color: #333;
    font-size: .3rem;
    line-height: .48rem;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.mp-ticket-type-subname {
    font-size: .24rem;
    color: #888;
    line-height: .32rem;
    margin: .1rem 0 .14rem .1rem;
    margin-right: 1.84rem;
}
.mp-ticket-type-price {
    right: .46rem;
    margin-top: -.28rem;
    color: #ff9800;
    font-size: .24rem;
    overflow: hidden;
    position: absolute;
    top: 50%;
    height: .4rem;
    line-height: .4rem;
    font: .24rem "Microsoft yahei","Hiragino sans gb",Arial,sans-serif;
}
.mp-price-num {
    margin-left: .04rem;
    font-size: .36rem;
    font: .28rem Tahoma,Helvetica,sans-serif;
}
.mp-ticket-numwordP {
    display: inline-block;
    color: #9e9e9e;
    font-size: .24rem;
    -webkit-transform: scale(.8);
    -moz-transform: scale(.8);
    -ms-transform: scale(.8);
    -o-transform: scale(.8);
    transform: scale(.8);
}
.mp-ticket-type-extend {
    right: .2rem;
    margin-top: -.22rem;
    color: #bbb;
    font-size: .24rem;
    overflow: hidden;
    position: absolute;
    top: 50%;
    height: .4rem;
    line-height: .4rem;
    font-family: 'mpiconfont';
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}





.qu_footer {
    background: #f3f3f3;
}
.main_nav {
    position: relative;
    width: 300px;
    height: 25px;
    margin: 0 auto;
    padding: 10px 10px 0 10px;
    overflow: hidden;
}
.main_nav li {
    margin: 0px;
    padding-left: 10px;
    height: 31px;
    width: 65px;
    float: left;
    position: relative;
    background: none
}
.main_nav li a .nav-icon {
    float: left;
    width: 22px;
    height: 22px;
    background: url(//source.qunarzz.com/site/images/wap/touch/images/v2/images2x/nav_7.png) 0 0 no-repeat;
    background-size: 175px 50px;
}
.title {
    float: left;
    display: inline-block;
    color: #9e9e9e;
    margin: 3px 0 0 5px;
    border-bottom: 1px solid #acacac;
    font-size: 12px;
}
.tag {
    position: absolute;
    top: 0;
    right: -35px;
    background: #f3f3f3;
    font-size: 14px;
    color: #9e9e9e;
    width: 70px;
}
.tag {
    display: inline-block;
    border-left: 1px solid #acacac;
    padding-left: 30px;
    margin-top: 5px;
}
.tag:after {
    content: " ";
    position: absolute;
    top: 7px;
    left: 25px;
    width: 12px;
    height: 12px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAYCAYAAADkgu3FAAAAAXNSR…SSRMy5LjjTTWBvOxKHuJAgifofkJ86kg+LkMD0Tx7x8tk/qrabQu3SN6AAAAAASUVORK5CYII=) 0 0 no-repeat;
    background-size: 12px 12px;
}
.footer_nav {
    width: 100%;
    height: 39px;
    border-bottom: 1px solid #cacaca;
}
.footer_nav li {
    float: left;
    padding-left: 20px;
}
.footer_nav li a {
    position: relative;
    color: #25a4bb;
    font-size: 14px;
    line-height: 39px;
}
 .mobile_pc {
    padding: 10px 0 0 0;
    text-align: center;
}
.mobile_pc li {
    display: inline-block;
    margin: 0 15px;
}
.copyright {
    color: #9e9e9e;
    text-align: center;
    font-size: 14px;
    padding: 10px;
}
.copyright a {
    color: #9e9e9e;
    height: 33px;
}
.mp-header-back {
    left: .1rem;
    top: .1rem;
    width: .72rem;
    height: .72rem;
    line-height: .72rem;
}
.mp-headerback-bg {
    display: block;
    width: .72rem;
    height: .72rem;
    background-color: #000;
    opacity: .5;
    -webkit-border-radius: .36rem;
    -moz-border-radius: .36rem;
    border-radius: .36rem;
}
.mp-header-back .icon-back {
    position: absolute;
    left: -13px;
    top: 3px;
    display: block;
    width: .72rem;
    line-height: .72rem;
    text-align: left;
    text-indent: .24rem;
    font-size:.7rem;
}
.add {
    display: none;
}
.mp-recommend-container {
    margin-top: .2rem;
    margin-bottom: .4rem;
}
.mp-recommend-title {
    padding: 0 .2rem;
    height: .88rem;
    background: #fff;
    color: #333;
    font-size: .3rem;
    line-height: .88rem;
    text-indent: .2rem;
}
.mp-recommend-list {
    overflow: hidden;
    background: #fff;
}
.mp-recommend-img {
    margin: .2rem .2rem 0 .2rem;
    width: 1.62rem;
    height: 1.62rem;
    float: left;
    background: url(//s.qunarzz.com/piao_topic/image/common/default/140x140.png) contain;
}
.mp-recommend-info {
    position: relative;
    padding-top: .2rem;
    margin-left: 2.02rem;
    height: 1.8rem;
}
.mp-recommend-sight {
    position: absolute;
    top: .2rem;
    left: 0;
    right: 1.5rem;
    height: .4rem;
    line-height: .4rem;
    font-size: .3rem;
    color: #212121;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.mp-recommend-price {
    position: absolute;
    right: .2rem;
    top: .2rem;
    line-height: .4rem;
    vertical-align: baseline;
    color: #ff9800;
}
.mp-price-num {
    font-size: .36rem;
}
.mp-recommend-flag {
    color: #9e9e9e;
    font-size: .25rem;
}
.mp-recommend-comment {
    position: absolute;
    top: 1rem;
    left: 0;
}
.mp-recommend-commentnum {
    margin-left: .1rem;
    line-height: .28rem;
    font-size: .24rem;
    vertical-align: middle;
    color: #9e9e9e;
}
.mp-recommend-position {
    position: absolute;
    bottom: .24rem;
    left: 0;
    color: #9e9e9e;
    font-size: .24rem;
}
.mp-recommend-subposition {
    padding: 0 .04rem 0 .1rem;
}
.mp-recomment-sightstar {
    color: #adadad;
}
</style>
