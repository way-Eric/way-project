<template>
    <div id="domestic">
       <div class="location">
        <h2>您的位置</h2>
        <div class="there">
          <div class="little">
            <a href="#" class="item-con there-city">北京</a>
          </div>
        </div>
      </div>
      <h2>热门城市</h2>
      <div class="content">   
        <div class="hot-city">
          <div class="little" v-for="item in domesticInfo.items" key="index">
            <li class="item-con">{{item}}</li>
          </div>
        </div>
      </div>
      <div v-for="(city,index) in domesticInfo.citys" :key="index">
        <h2 :id="'city'+city.id">{{city.id}}</h2>
        <ul class="cityA">
          <li class="item" v-for="area in domesticInfo.citys[index].areas" :key="area.id">{{area.name}}</li>
        </ul>
      </div>
      <div class="grapheme">
        <a :href="'#city'+Letter" v-for="Letter in domesticInfo.Letters">{{Letter}}</a>
      </div>
    </div>
</template>


<script>
  export default {
    props:['domesticInfo']
  }
</script>

<style scoped>
  .there {
    padding-top: .04rem;
    padding-bottom: .26rem;
    overflow: hidden;
    padding-right: .5rem;
    padding-left: .2rem;
    background: #fff;
    border-top: 1px solid #c9cccd;
    border-bottom: 1px solid #c9cccd;
  }

  .little {
    box-sizing: border-box;
    float: left;
    width: 33.33%;
    padding: .2rem .14rem 0 .1rem;
  }

  .item-con {
    width: 100% ;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
    line-height: 28px;
    text-align: center;
    color: #212121;
    border: .02rem solid #c9cccd;
    border-radius: .06rem;
  }
  .hot-city {
    overflow: hidden;
    padding-right: .5rem;
    padding-left: .2rem;
    padding-bottom: .2rem;
    background: #fff;
  }

  .hot-city .little:first-child li {
    border-color: #00bcd4 ;
    color: #00bcd4;
  }

  .there-city {
    border-color: #00bcd4 ;
    color: #00bcd4;
  }
  h2 {
    line-height: .54rem;
    padding-left: .3rem;
    color: #616161;
    font-size: .26rem;
    background: #f5f5f5 ;
  }

  .cityA {
    background: #fff ;
    border-top: 1px solid #c9cccd;
  }

  .item {
    line-height: .76rem;
    padding-left: .2rem;
    font-size: .28rem;
    color: #212121;
    border-bottom: 1px solid #c9cccd;
  }
  
  .grapheme {
    position: fixed;
    right: 0;
    top: 3.2rem;
    overflow: hidden;
  }

  .grapheme a {
    display: block;
    width: .32rem;
    line-height: .32rem;
    padding-left: .2rem;
    color: #00afc7;
    font-size: .24rem;
    text-align: center;
  }
</style>