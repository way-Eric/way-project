<template>
    <div id="wrapper">
        <div id="scroller">
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
                <li class="spot-inner-con">
                    <span class="spot-inner-item">慕田峪长城</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    require('../../../utils/iscroll-probe.js')
    export default {
        mounted() {
            this.creatScroll()            
        },
        methods: {
            creatScroll() {
                this.myScroll = new IScroll('#wrapper', { scrollX: true, scrollY: false, mouseWheel: true });
                console.log(this.myScroll)
            }            
        }
    }
</script>

<style scoped>
    
    #wrapper { 
        width:100%;
        padding: .1rem .1rem;
        overflow: hidden;
        background: #e5e7e8;
    }
    #scroller {
        width: 19rem;
        float: left;
    }
    .spot-inner {
        float: left;
        white-space: nowrap;
    }
    .spot-inner-con {
        float: left;
        padding: .04rem .08rem;
        display: inline-block;
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
