<template>
    <transition name="fade">
        <div class="dock" ref="dock" v-if="show">
            <ul class="dock-type">
                <li class="dock-class">
                   全部分类
                </li>
                <li class="dock-screen">
                    筛选
                </li>
                <li class="dock-sort">
                   推荐排序
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
                window.addEventListener('scroll', this.onScroll.bind(this))
            })
        },
        methods: {
            onScroll () {
               var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                if (scrollTop >= 300) {
                    this.show = false
                } 
                if (scrollTop <= 300) {
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
        bottom:0;
        background: rgba(0,0,0,.8);
        width: 100%;
    }
    .dock-type {
        width: 100%;
        overflow: hidden;
    }
    .dock-class, .dock-screen, .dock-sort {
        color: #fff;
        width: 33.33%;
        float: left;
        height: .8rem;
        line-height: .8rem;
        text-align: center;
        display: block; 
    }
    .fade-enter-active, .fade-leave-active {
        transition: all .8s ease;
    }
    .fade-enter, .fade-leave-to {
        transform: translateY(.8rem);
    }
</style>
