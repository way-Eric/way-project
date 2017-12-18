<template>
    <div id="banner">
      <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
      <!-- slides -->
      <swiper-slide><img src="http://img1.qunarzz.com/piao/fusion/1609/c9/cacbf705c5417e02.jpg_640x200_99b2676a.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="http://img1.qunarzz.com/piao/fusion/1609/15/630b82d932a3c402.jpg_640x200_862e836b.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="http://img1.qunarzz.com/piao/fusion/1609/f3/52a119dbed871902.jpg_640x200_b4573df8.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="http://img1.qunarzz.com/piao/fusion/1609/15/630b82d932a3c402.jpg_640x200_862e836b.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="http://img1.qunarzz.com/piao/fusion/1710/16/1d7693c6bd8abd02.png_640x200_43c308dd.png" alt=""></swiper-slide>
      <swiper-slide><img src="http://img1.qunarzz.com/piao/fusion/1703/51/01864a8a35c20402.jpg_640x200_d16dcbcd.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="http://img1.qunarzz.com/piao/fusion/1609/c9/cacbf705c5417e02.jpg_640x200_99b2676a.jpg" alt=""></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>

    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
      components: {
        swiper,
        swiperSlide
      },
      name: 'carrousel',
      data() {
        return {
          notNextTick: true,
          swiperOption: {
            // swiper options 所有的配置同swiper官方api配置
            autoplay: 1000,
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
  #banner {
    height:2.3rem;
    overflow: hidden;
  }
  #banner .swiper-container {
    height:2.3rem;
  }
  #banner .swiper-container img{
    width:100%;
    height:2.3rem;
  }
</style>
