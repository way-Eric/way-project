<template>
    <header class="header">
        <a href="" class="headerLeft iconfont icon-back"></a>
        <input class="headerTitle" type="text" placeholder="一日游">
        <div class="headerRight">
            <a href=""><span class="search">搜索</span></a>
        </div>
    </header>
</template>

<script>

export default {
    data () {
        return {
            msg: 'header'
        }
    }
}
</script>

<style scoped>
    .header{
        display: box;
        width: 100%;
        height: .88rem;
        background: #00bcd4;
        display: flex;
    }
    .headerLeft{
        display: inline-block;
        width: .4rem;
        line-height: .88rem;
        padding: 0 .4rem 0 0;
        color: #fff;
        font-size: .5rem;
    }
    .headerTitle{
        display: inline-block;
        box-sizing: border-box;
        flex: 1;
        position: relative;
        height: .6rem;
        margin: .14rem 0;
        background: #fff;
        line-height: .6rem;
        border-radius: .06rem;
        padding-left: .2rem;
        border:0;
        font-size: .24rem;
    }
    .headerRight{
        display: inline-block;
        height: 100%;   
    }
    .headerRight a{
        display: inline-block;
        line-height: .88rem;
        color: #fff
    }
    .search{
        padding: 0 .22rem;
    }
</style>
