<template>
    <div id="carrousel">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide>
                <ul class="spot-inner">
                    <li class="spot-inner-con">
                        <span class="spot-inner-item">八达岭长城</span>
                    </li>
                    <li class="spot-inner-con">
                        <span class="spot-inner-item">八达岭长城</span>
                    </li>
                    <li class="spot-inner-con">
                        <span class="spot-inner-item">八达岭长城</span>
                    </li>
                    <li class="spot-inner-con">
                        <span class="spot-inner-item">八达岭长城</span>
                    </li>
                    <li class="spot-inner-con">
                        <span class="spot-inner-item">八达岭长城</span>
                    
                    <li class="spot-inner-con">
                        <span class="spot-inner-item">八达岭长城</span>
                    </li>
                    <li class="spot-inner-con">
                        <span class="spot-inner-item">八达岭长城</span>
                    </li>
                    <li class="spot-inner-con">
                        <span class="spot-inner-item">八达岭长城</span>
                    </li>
                    <li class="spot-inner-con">
                        <span class="spot-inner-item">八达岭长城</span>
                    </li>
                    <li class="spot-inner-con">
                        <span class="spot-inner-item">八达岭长城</span>
                    </li>
                </ul>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
        export default {
            name: 'carrousel',
        data() {
            return {
                swiperOption: {
                    autoplay: 1000,
                    direction: 'horizontal',
                    grabCursor: true,
                    setWrapperSize: true,
                    autoHeight: true,
                    pagination: '.swiper-pagination',
                    observeParents: true,
                }
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        components: {
            swiper,
            swiperSlide
        }
    }
</script>

<style scoped>
    
    #carrousel {
      height: .8rem;
      background: #e5e7e8;
    }
    #carrousel .swiper-container {
        background: #e5e7e8;
    }
    .swiper-slide {
        margin-right: .6rem;
        height: .68rem;
        max-height: 6rem;
        padding: .08rem .12rem;
    }
    .spot-inner {
        height: .64rem;
        width: 3000px;
    }
    .spot-inner-con {
        float: left;
        position: relative;
        padding: .04rem .08rem;
    }
    .spot-inner-item {
        display: block;
        min-width: .26rem;
        padding: 0 .22rem;
        background: #fff;
        color: #212121;
        font-size: .26rem;
        line-height: .56rem;
        border-radius: .04rem
    }
</style>