<template>
    <transition name="fade">
        <div class="dock" ref="dock" v-show="show">
            <ul class="dock-type">
                <li class="dock-class">
                    <i class="dock-icon iconfont icon-quanbufenlei"></i>
                    <span class="dock-title">全部分类</span>
                </li>
                <li class="dock-screen">
                    <i class="dock-icon iconfont icon-shaixuan"></i>
                    <span class="dock-title">筛选</span>
                </li>
                <li class="dock-sort">
                    <i class="dock-icon iconfont icon-paixu"></i>
                    <span class="dock-title">推荐排序</span>
                </li>
            </ul>
        </div>
    </transition>
</template>

<script>

    export default {
        name:'HelloWorld',
        data () {
            return {
                show: true
            }
        },
        mounted: function () {
            this.$nextTick(function () {
                window.addEventListener('scroll', this.onScroll)
            })
        },
        methods: {
            onScroll () {
                let scrolled = document.documentElement.scrollTop || document.body.scrollTop
                if (scrolled >= 200) {
                    this.show = false
                } 
                if (scrolled <= 100) {
                    this.show = true;
                } 
            }
        },
        destroyed () {
            window.removeEventListener('scroll', this.onScroll)
        }
    }
</script>

<style scoped>
    .dock {
        position: fixed;
        left: 0;
        bottom: 0;
        background: rgba(0,0,0,.8);
        width: 100%;
    }
    .dock-type {
        width: 100%;
        height: .8rem;
    }
    .dock-class, .dock-screen, .dock-sort {
        padding: .08rem .1rem 0;
        color: #fff;
        width: 30%;
        float: left;
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
        padding-top: .13rem;
    }
    .dock-icon {
        font-size: .32rem;
        color: #fff;
    }
    .dock-title {
        font-size: .24rem;
    }
    .fade-enter-active, .fade-leave-active {
        transition: all 1s ease;
    }
    .fade-enter, .fade-leave-to {
        transform: translateY(.8rem);
    }
</style>
