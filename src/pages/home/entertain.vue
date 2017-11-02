<template>
    <div id="entertain">
      <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <div class="mp-category mpL">
          <a href="#" class="mp-category-img"><img src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png" alt=""></a>
          <a href="#" class="mp-category-title">景点门票</a>
        </div>
        <div class="mp-category mpL">
          <a href="#" class="mp-category-img"><img src="http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png" alt=""></a>
          <a href="#" class="mp-category-title">动植物园</a>
        </div>
        <div class="mp-category mpL">
          <a href="#" class="mp-category-img"><img src="http://img1.qunarzz.com/piao/fusion/1611/45/676b67d7078abc02.png" alt=""></a>
          <a href="#" class="mp-category-title">故宫</a>
        </div>
        <div class="mp-category mpL">
          <a href="#" class="mp-category-img"><img src="http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png" alt=""></a>
          <a href="#" class="mp-category-title">一日游</a>
        </div>
        <div class="mp-category mpR">
          <a href="#" class="mp-category-img"><img src="http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png" alt=""></a>
          <a href="#" class="mp-category-title">必游榜单</a>
        </div>
        <div class="mp-category mpR">
          <a href="#" class="mp-category-img"><img src="http://img1.qunarzz.com/piao/fusion/1611/6d/ee9eb965690ce402.png" alt=""></a>
          <a href="#" class="mp-category-title">美色秋</a>
        </div>
        <div class="mp-category mpR">
          <a href="#" class="mp-category-img"><img src="http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png" alt=""></a>
          <a href="#" class="mp-category-title">游乐场</a>
        </div>
        <div class="mp-category mpR">
          <a href="#" class="mp-category-img"><img src="http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png" alt=""></a>
          <a href="#" class="mp-category-title">泡温泉</a>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="mp-category mpL">
          <a href="#" class="mp-category-img"><img src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png" alt=""></a>
          <a href="#" class="mp-category-title">景点门票</a>
        </div>
        <div class="mp-category mpL">
          <a href="#" class="mp-category-img"><img src="http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png" alt=""></a>
          <a href="#" class="mp-category-title">景点门票</a>
        </div>
        <div class="mp-category mpL">
          <a href="#" class="mp-category-img"><img src="http://img1.qunarzz.com/piao/fusion/1611/45/676b67d7078abc02.png" alt=""></a>
          <a href="#" class="mp-category-title">景点门票</a>
        </div>
        <div class="mp-category mpL">
          <a href="#" class="mp-category-img"><img src="http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png" alt=""></a>
          <a href="#" class="mp-category-title">景点门票</a>
        </div>
        <div class="mp-category mpR">
          <a href="#" class="mp-category-img"><img src="http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png" alt=""></a>
          <a href="#" class="mp-category-title">景点门票</a>
        </div>
        <div class="mp-category mpR">
          <a href="#" class="mp-category-img"><img src="http://img1.qunarzz.com/piao/fusion/1611/6d/ee9eb965690ce402.png" alt=""></a>
          <a href="#" class="mp-category-title">景点门票</a>
        </div>
        <div class="mp-category mpR">
          <a href="#" class="mp-category-img"><img src="http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png" alt=""></a>
          <a href="#" class="mp-category-title">景点门票</a>
        </div>
        <div class="mp-category mpR">
          <a href="#" class="mp-category-img"><img src="http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png" alt=""></a>
          <a href="#" class="mp-category-title">景点门票</a>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>

    export default {
      name: 'carrousel',
      data() {
        return {
          notNextTick: true,
          swiperOption: {
            // swiper options 所有的配置同swiper官方api配置
            direction: 'horizontal',
            grabCursor: true,
            setWrapperSize: true,
            autoHeight: true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            mousewheelControl: true,
            observeParents: true,
            debugger: true,
            onTransitionStart (swiper) {
              console.log(swiper)
            }
          }
        }
      },
      computed: {
        swiper() {
          return this.$refs.mySwiper.swiper
        }
      }
    }
</script>


<style scoped>
  #entertain {
    background: #fff;
  }

  #entertain .swiper-scrollbar {
    z-index: -1 ;
  }
  #entertain .mp-category {
    width:25%;
    height:1.3rem;
    padding:.15rem 0;
    float:left ;
  } 
  .mp-category-img img{
    display: block;
    width:.66rem;
    height:.66rem;
    margin:0 auto;
  }
  .mp-category-title {
    font-size:.14rem;
    text-align: center;
    line-height:.5rem ;
  } 
  #entertain a {
    display:block;
    color:#333;
  }
  #entertain .mpL {
    padding-top:.3rem;
  }
   #entertain .mpR {
    padding-bottom:.3rem;
  }
</style>
