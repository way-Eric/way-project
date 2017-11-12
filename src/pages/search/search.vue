<template>
    <div>
      <div class="mp-header">
        <a href="" class="mp-header-left iconfont icon-back"></a>
        <h1 class="mp-header-title">
          <input type="text" name="keyword" autocomplete="off" placeholder="输入城市或景点" class="mp-search-input">
          <a class="mp-search-delete">
          </a>
          <input type="hidden" name="from" value="ts_search">
        </h1>
        <span class="mp-header-right">
          <a class="mp-search-submit">搜索</a>
        </span>
      </div>
      <div class="hotlist">
          <div class="hot-search-head">
              <span class="hot-search-title">热门搜索</span>
              <span class="hot-search-refresh iconfont icon-huanyipi" @click="handleRefreshClick">换一批</span>
          </div>
          <div class="hot-search-con">
              <div class="hot-search-typecon">
                  <div class="hot-search-typeinner">
                      <img class="hot-search-typeinnercon" src="http://img1.qunarzz.com/piao/fusion/1511/da/8c3405b0e7d493f7.png" alt="">
                  </div>
              </div>
              <div class="hot-search-item">
                  <div class="hot-search-itemcon " ref="hotSearchItemCon">
                      <router-link class="hot-search-iteminner" to="" v-for="msg in items">{{msg.msgs}}</router-link>
                  </div>
              </div>
          </div>
          <div class="hotsearch-group">
              <div class="hotsearch-typecon">
                  <div class="hotsearch-typeinner">
                      <img src="http://img1.qunarzz.com/piao/fusion/1511/e8/d46972e07444bbf7.png" class="hotsearch-typeicon">
                  </div>
              </div>
              <div class="hotsearch-itemcon">
                  <div class="hotsearch-iteminner" ref="hotSearchItemInner">
                      <router-link class="hotsearch-iteminnercon" to="" v-for="city in items" >{{city.city}}</router-link>
                  </div>
              </div>
          </div>
          <div class="hot-search-near">
              <div class="hot-search-nearcon">搜索身边的景点</div>
          </div>
      </div>
    </div>
</template>

<script>
    import axios from "axios";
    var a = 1;
    export default {
        name:'HelloWorld',
        components: {

        },
        data () {
            return {
                items:[]
            }
        },
        mounted() {
          this.refreshtextData()
        },
        methods: {
            handleRefreshClick() {
                if(a === 4){
                    a = 0;
                }
                var b = a++
                this.$refs.hotSearchItemCon.style.marginTop = b * - 85 + "px";
                this.$refs.hotSearchItemInner.style.top = b * -43 + "px";
            },
            refreshtextData() {
              axios.get("/static/refreshtext.json")
              .then(this.handleGetDataSucc.bind(this))
              .catch(this.handleGetDataErr.bind(this))
            },
            handleGetDataSucc(response) {
              this.items = response.data.data.refreshtext;
            },
            handleGetDataErr(err) {
              console.log(err)
            }
        }
    }

     
</script>

<style scoped>
    .mp-header {
        z-index: 98;
        position: relative;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: box;
        width: 100%;
        height: .88rem;
        background: #00bcd4;
        text-align: center;
        color: #fff;
    }
    .mp-header-left {
        width: .4rem;
        line-height: .88rem;
        padding: 0 .2rem;
        color: #fff;
        font-size: .5rem;
        text-align: left;
        font-weight: 700;
    }
    .mp-header-title {
        padding: 0 .6rem 0 .2rem;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        box-flex: 1;
        -webkit-box-flex: 1;
        -moz-box-flex: 1;
        -ms-flex: 1;
        position: relative;
        height: .6rem;
        margin: .14rem 0;
        background: #fff;
        line-height: .6rem;
        border-radius: .06rem;
    }
    .mp-search-input {
        position: relative;
        display: block;
        width: 100%;
        height: .4rem;
        line-height: .4rem;
        padding: .1rem 0;
        border: 0;
        font-family: "Microsoft Yahei",Arial;
        font-size: .28rem;
        border-radius: .06rem;
    }
    .mp-search-delete {
        display: none;
        position: absolute;
        top: .04rem;
        right: 0;
        width: .58rem;
        height: .58rem;
        background: url(//simg1.qunarzz.com/piao/images/touch/v2/sprites.png) -.48rem .1rem no-repeat;
        background-size: 3rem 3rem;
    }
    .mp-header-right {
        display: inline-block;
        height: .88rem;
        line-height: .88rem;
        padding: 0 .1rem;
    }
    .mp-search-submit {
        display: inline-block;
        width: .74rem;
        margin-right: .04rem;
        color: #fff;
        font-size: .28rem;
    }
    .hotlist {
        width: 100%;
        height: 3.4rem;
        background: #fff;
    }
    .hot-search-head {
        height: .64rem;
        line-height: .64rem;
        padding: 0 .2rem;
        background: #f0f5f6;
        border: 1px solid #ccc;
        margin-top: .02rem;
    }
    .hot-search-title {
        font-size: .26rem;
        color: #888;
    }
    .hot-search-refresh {
        float: right;
        font-size: .26rem;
        color: #00afc7;
    }
    .hot-search-con {
        border: 1px solid #ccc;
        border-top: 0;
        padding-top: .27rem;
        overflow: hidden;
    }
    .hot-search-typecon {
        width: .74rem;
        height: 1.54rem;
        line-height: 1.8rem;
        text-align: center;
        float: left;
    }
    .hot-search-typeinner {
        width: .72rem;
        height: 1.26rem;
        border-right: 1px solid #ccc;
        line-height: 1.26rem;
        text-align: center;
    }
    .hot-search-typeinnercon{
        width: .3rem;
        height: .3rem;
        display: inline-block;
    }
    .hot-search-item{
        height: 1.8rem;
        float: left;
        margin-top: -.27rem;
        overflow: hidden;
        max-width: 88%;
    }
    .hot-search-itemcon{
        min-height: 1.8rem;
        _height: 1.8rem;
        max-width: 88%;
    }
    .hot-search-iteminner{
        float: left;
        height: .36rem;
        max-width: 2.89rem;
        line-height: .36rem;
        text-align: center;
        display: block;
        padding-left: .28rem;
        padding-right: .28rem;
        border-right: 1px dashed #c9cccd;
        color: #333;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: .25rem;
        margin-bottom: .25rem;
    }
    .hotsearch-group{
        border-bottom: 1px solid #ccc;
        position: relative;
        padding-left: .74rem;
        background-color: #fff;
    }
    .hotsearch-typecon{
        position: absolute;
        left: 0;
        top: 0;
        width: .74rem;
        height: 100%;
        overflow: hidden;
        line-height: 100%;
        text-align: center;
    }
    .hotsearch-typeinner{
        position: absolute;
        width: .72rem;
        height: 70%;
        top: 15%;
        border-right: 1px solid #dce5e7;
    }
    .hotsearch-typeicon{
        width: .3rem;
        height: .3rem;
        position: relative;
        top: 50%;
        margin-top: -.15rem;
    }
    .hotsearch-itemcon{
        max-height: .9rem;
        zoom: 1;
        overflow: hidden;
        position: relative;
    }
    .hotsearch-iteminner{
        zoom: 1;
        overflow: hidden;
        position: relative;
        left: 0;
        top: 0;
    }
    .hotsearch-iteminnercon{
        float: left;
        height: .36rem;
        width: 24.5%;
        line-height: .36rem;
        text-align: center;
        display: block;
        border-right: 1px dashed #c9cccd;
        color: #333;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: .25rem;
        margin-bottom: .25rem;
    }
    .hot-search-near{
        padding: .2rem;
        border-bottom: 1px solid #ccc;
    }
    .hot-search-nearcon{
        height: .72rem;
        line-height: .72rem;
        background-color: #fff;
        text-align: center;
        font-size: .26rem;
        color: #333;
        border: 1px solid #dde1e3;
        border-radius: 2px;
    }
</style>

