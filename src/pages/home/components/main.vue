<template>
    <div id="main">
      <h2>热销推荐</h2>
      <ul class="hot">
        <li class="hot-con">
          <router-link to="/list" class="hotL"><img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg" alt="故宫"></router-link>
          <div class="hotR">
            <h3>故宫</h3>
            <h4>东方宫殿建筑代表，世界宫殿建筑典范</h4>
            <p><i>￥</i><span>65</span>起</p>
          </div>
        </li> 
        <li class="hot-con">
          <a href="#" class="hotL"><img src="http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_140x140_97813766.jpg" alt="长城"></a>
          <div class="hotR">
            <h3>长城</h3>
            <h4>不到长城非好汉</h4>
            <p><i>￥</i><span>25</span>起</p>
          </div>
        </li> 
        <li class="hot-con">
          <a href="#" class="hotL"><img src="http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_140x140_e20be8e0.jpg" alt="颐和园"></a>
          <div class="hotR">
            <h3>颐和园</h3>
            <h4>保存完整的一座皇家行宫御苑</h4>
            <p><i>￥</i><span>1</span>起</p>
          </div>
        </li> 
        <li class="hot-con">
          <a href="#" class="hotL"><img src="http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_140x140_b05eb1df.jpg" alt="欢乐谷"></a>
          <div class="hotR">
            <h3>欢乐谷</h3>
            <h4>七大主题园区带你畅享北京欢乐谷</h4>
            <p><i>￥</i><span>58</span>起</p>
          </div>
        </li> 
        <li class="hot-con">
          <a href="#" class="hotL"><img src="http://img1.qunarzz.com/sight/p0/1708/2b/2b6378fd3b2e1d86a3.img.jpg_140x140_eae81520.jpg" alt="慕田峪"></a>
          <div class="hotR">
            <h3>慕田峪长城</h3>
            <h4>秀美长城，关键是人少</h4>
            <p><i>￥</i><span>19.1</span>起</p>
          </div>
        </li> 

        <p class="btm"><a href="#">查看所有产品</a></p> 
      </ul>

      <ul class="qunar"> 
        <h2>周末去哪儿</h2>     
        <li class="qunar-con">
          <a href="#" class="qunar-img"><img src="http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg" alt="温泉"></a>
          <div class="qunar-btm">
            <a href="#" class="qunar-title">北京温泉排行榜</a>
            <a href="#" class="qunar-detail">细数北京温泉，温暖你的冬天</a>
          </div>
        </li>
        <li class="qunar-con">
          <a href="#" class="qunar-img"><img src="http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg" alt="温泉"></a>
          <div class="qunar-btm">
            <a href="#" class="qunar-title">北京温泉排行榜</a>
            <a href="#" class="qunar-detail">细数北京温泉，温暖你的冬天</a>
          </div>
        </li>
        <li class="qunar-con">
          <a href="#" class="qunar-img"><img src="http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg" alt="温泉"></a>
          <div class="qunar-btm">
            <a href="#" class="qunar-title">北京温泉排行榜</a>
            <a href="#" class="qunar-detail">细数北京温泉，温暖你的冬天</a>
          </div>
        </li>
        <li class="qunar-con">
          <a href="#" class="qunar-img"><img src="http://img1.qunarzz.com/sight/source/1509/81/0412da9c4db66a.jpg_r_640x214_8e23871e.jpg" alt="温泉"></a>
          <div class="qunar-btm">
            <a href="#" class="qunar-title">北京温泉排行榜</a>
            <a href="#" class="qunar-detail">细数北京温泉，温暖你的冬天</a>
          </div>
        </li>
        <li class="qunar-con">
          <a href="#" class="qunar-img"><img src="http://img1.qunarzz.com/sight/source/1509/28/1bb74b851279e6.jpg_r_640x214_64ebf0ee.jpg" alt="温泉"></a>
          <div class="qunar-btm">
            <a href="#" class="qunar-title">北京温泉排行榜</a>
            <a href="#" class="qunar-detail">细数北京温泉，温暖你的冬天</a>
          </div>
        </li>
      </ul>
    </div>
</template>


<script>
	
</script>


<style scoped>

  h2 {
    line-height: .8rem;
    color: #212121;
    padding-left:.26rem ;
  }
  
  .hot {
    background: #fff ;
  }

  .hot .hot-con{
    position: relative;
    height: 1.4rem;
    padding: .24rem;
    border-bottom:1px solid #e0e0e0;
  }
  
  .hotL {
    position: absolute;
    top: .24rem;
    left: .24rem;
    width: 1.4rem;
    height: 1.4rem;
  }

  .hotL img {
    width:100%;
    height:100%;
  }

  .hotR {
    margin-left: 1.6rem;
  }

  .hotR h3 {
    overflow: hidden;
    margin-top: .04rem;
    margin-bottom: .1rem;
    color: #212121;
    font-size: .3rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .hotR h4 {
    overflow: hidden;
    margin-bottom: .1rem;
    height: .4rem;
    line-height: .4rem;
    color: #9e9e9e;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .hotR p {
    color: #9e9e9e;
    font-size: .24rem;
  }

  .hotR p i {
    color:#ff8300;
  }

  .hotR p span {
    font-size: .36rem;
    padding: 0 .04rem;
    color:#ff8300;
  }

  .btm {
    height: .88rem;
    color: #00afc7;
    line-height: .88rem;
    text-align: center;
  }

  .qunar .qunar-con {
    background: #fff ;
    margin-bottom: .1rem;
  } 
  
  .qunar-con a {
    display: block ;
  }

  .qunar-con .qunar-img {
    height:2.43rem;
    width:100%;
  }
  
  .qunar-img img { 
    width:100%;
    height:100%;
  }

  .qunar-btm {
    padding: .14rem .2rem .2rem .2rem;
  }

  .qunar-title {
    overflow: hidden;
    padding-right: 1.4rem;
    color: #212121;
    font-size: .28rem;
    line-height: .48rem;
    white-space: nowrap;
    text-overflow: ellipsis ;
  }

  .qunar-detail {
    overflow: hidden;
    padding-right: 1.4rem;
    color: #616161;
    font-size: .24rem;
    line-height: .42rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>