<template>
    <div id="entertain">
      <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="items in result" :key="index" class="mp-swiper">
        <div class="mp-category" :class="item.class" v-for="item in items" :key="item.id">
          <router-link :to="item.link" class="mp-category-img"><img :src="item.src" alt=""></router-link>
          <a href="#" class="mp-category-title">{{item.title}}</a>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
    import {swiper , swiperSlide} from 'vue-awesome-swiper'
    import axios from 'axios'
    export default {
      components: {
        swiper ,
        swiperSlide
      },
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
          },
          result:[],
        }
      },
      mounted() {
        this.getSwiperData()
      },
      computed: {
        swiper() {
          return this.$refs.mySwiper.swiper
        }   
      },
      methods: {
        getSwiperData() {
          axios.get('/static/index.json')
              .then(this.handleGetDataSucc.bind(this))
              .catch(this.handleGetDataErr.bind(this))
        },
        handleGetDataSucc(response) {
          const a = [];
          response.data.data.spotInfo.forEach((value,index) => {
            let page = Math.floor(index / 8);
            if(!a[page]) {
              a[page] = []
            }
            a[page].push(value)
          })
          this.result = a ;
          return this.result ;
        },
        handleGetDataErr(err) {
          console.log(err)
        }
      }
    }
</script>


<style scoped>
  #entertain {
    background: #fff;
    min-height: 3.5rem;
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
  #entertain .mp-swiper {
    min-height: 3.5rem;
  }
</style>
