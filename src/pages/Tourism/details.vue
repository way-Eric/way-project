<template>
    <div mp-role="ticketCon">
        <paginate class="view-list page" ref="paginator" name="items" :list="items" :per="per">
            <ul class="mp-list" id="ticket-list">
                <li class="mp-list-item mpg-flexbox" v-for="item in paginated('items')">
                    <div class="mp-list-imgcon image-ready">
                        <img class="mp-list-productimg" :src="item.img" alt="[北京出发]天安门＋故宫【赠送珍宝馆】＋八达岭长城＋鸟巢·水立方一日游">
                        <span class="mp-list-bookingflag">
                            <span class="mp-list-bookingtext">可订明日</span>
                        </span>
                    </div>
                    <div class="mp-list-productinfo mpg-flexbox-item mpf-border-bottom">
                        <h4 class="mp-list-productname mpg-ellipsis2">
                            {{ item.title }}
                        </h4>
                        <div class="mp-list-taglist">
                            <span class="mp-list-tagitemlight mpf-border-right">{{ item.titleWhere }}</span>
                            <span class="mp-list-tagitem mpf-border-right">{{ item.titleConst }}</span>
                            <span class="mp-list-tagitem mpf-border-right">{{ item.titleShop}}</span>
                        </div>
                        <div class="mp-list-cashback"></div>
                        <div class="mp-list-priceinfo">
                            <span class="mp-list-qunarprice">¥<em>{{ item.money }}</em></span><span class="mp-list-priceflag">起</span>
                        </div>
                        <div class="mp-list-moreinfo">
                        <span class="mp-list-text mpf-border-left">{{ item.surplus }}</span>
                        </div>
                    </div>
                </li>
            </ul>
            <div mp-role="moreInfoCon" class="mp-moreinfo">
                <div mp-role="pageCon">
                    <div class="mp-pagination">
                        <a @click="prevPage"  class="">上一页</a>  
                        <span v-if="$refs.paginator" ref="pageNumber" class="mp-page-num" :val="pageNum">{{ pageNum }} / {{pageAllNum }}</span>
                        <a @click="textPage"  mp-role="nextPage" class="">下一页</a>
                    </div>
                    <div class="mp-page-text">去哪儿门票</div>
                </div>
            </div>
        </paginate>
    </div>
</template>

<script>
    import {Paginate, PaginateLinks} from 'vue-paginate'
    export default {
        props:['items'],
        methods: {
            prevPage () {

                if (this.$refs.paginator) {
                    var current = this.pageNum;
                    if(current > 1) {
                        this.$refs.paginator.goToPage(this.pageNum-1);
                    }
                }
                window.scrollTo(0,0)
            },
            textPage () {
                if (this.$refs.paginator) {
                    var num = parseInt(this.items.length/this.per)+1;
                    var current = this.pageNum;
                    if(current < num) {
                        this.$refs.paginator.goToPage(this.pageNum+1);
                    }
                }
                window.scrollTo(0,0)
            }
        },
        computed: {
            pageNum: function() {
                return parseInt(parseInt(this.$refs.paginator.pageItemsCount)/this.per)+1
            },
            pageAllNum:function(){
                return Math.ceil(this.items.length / this.per)
            } 
        },
        data () {
            return {
                isAction: this.pre,
                per: 10,
                paginate: ['items']
            }
        }
    }
</script>

<style scoped>
    .mp-tagfilter-outer {
        height: .8rem;
    }
    .mp-list {
        background: #fff;
    }
    .mp-list-item {
        position: relative;
    }
    .mpg-flexbox {
        display: flex;
        width: 100%;
    }
    .image-ready {
        background: none !important;
    }
    .mp-list-imgcon {
        margin: .2rem;
        float: left;
    }
    .mp-sight-imgcon, .mp-list-imgcon {
        position: relative;
        background-size: contain;
        width: 1.6rem;
        height: 1.6rem;
    }
    .image-ready img {
        opacity: 1;
    }

    .mp-sight-imgcon img, .mp-list-imgcon img {
        opacity: 0;
        transition: opacity 400ms;
    }
    .mp-list-productimg {
        width: 1.6rem;
        height: 1.6rem;
    }
    img, object, input, textarea, button, select {
        vertical-align: middle;
    }
    fieldset, img {
        border: 0;
    }
    .mp-list-bookingflag {
        position: absolute;
        left: -.04rem;
        top: -.04rem;
        height: .24rem;
        padding: .02rem;
        background: #00bcd4;
        color: #fff;
        line-height: .24rem;
    }
    .mp-list-bookingtext {
        display: block;
        font-size: .24rem;
        -webkit-transform: scale(.83);
        -moz-transform: scale(.83);
        -ms-transform: scale(.83);
        -o-transform: scale(.83);
        transform: scale(.83);
    }
    .mp-list-bookingflag {
        position: absolute;
        left: -.04rem;
        top: -.04rem;
        height: .24rem;
        padding: .02rem;
        background: #00bcd4;
        color: #fff;
        line-height: .24rem;
    }
    .mpg-flexbox-item, .mpg-flexbox-layout {
        -webkit-box-flex: 1;
        -moz-box-flex: 1;
        -webkit-flex: 1;
        -moz-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }
    .mpf-border-bottom{
        position: relative;
    }  
    .mp-list-link {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 0;
    }
    input, textarea, button, select, a {
        outline: 0 none;
    }
    .image-ready img {
        opacity: 1;
    }
    .mp-list-productinfo {
        padding: .2rem .2rem .2rem 0;
        height: 1.6rem;
        overflow: hidden;
    }
    .mp-list-productname {
        line-height: .36rem;
        font-size: .3rem;
    }
    .mp-ellipsis2, .mpg-ellipsis2 {
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .mp-list-taglist {
        position: relative;
        top: .06rem;
        overflow: hidden;
        max-height: .58rem;
        margin-right: 1rem;
        padding-top: .06rem;
        line-height: .24rem;
        font-size: 0;
    }
    .mp-list-tagitemlight {
        display: inline;
        padding: 0 .1rem;
        font-size: .24rem;
        color: #00bcd4;
    }
    .mp-list-tagitem {
        display: inline;
        padding: 0 .1rem;
        font-size: .24rem;
        color: #616161;
    }
    .mp-list-priceinfo {
        position: absolute;
        right: .2rem;
        bottom: .48rem;
        height: .32rem;
        line-height: .32rem;
        color: #9e9e9e;
        text-align: right;

    }
    .mp-list-qunarprice {
        font-size: .22rem;
        font-weight: bold;
        color: #ff8300;
    }
    .mp-list-priceflag {
        font-size: .24rem;
        padding-left: .02rem;
    }
    .mp-list-moreinfo {
        position: absolute;
        left: -.1rem;
        bottom: .2rem;
        width: 100%;
        font-size: 0;
        color: #9e9e9e;
    }
    .mp-list-text {
        padding: 0 .1rem;
        font-size: .22rem;
    }
    .mp-moreinfo {
        
        color: #00afc7;
        line-height: .82rem;
        text-align: center;
        background:#eee;
    }
    .mp-pagination {
        height: .7rem;
        line-height: .7rem;
    }
    .mp-pagination a, .mp-pagination a:link, .mp-pagination a:visited, .mp-pagination a:hover, .mp-pagination a:active {
        display: inline-block;
        width: 1.4rem;
        border: .02rem solid #00afc7;
        background: #fff;
        color: #00afc7;
        line-height: .6rem;
        border-radius: .06rem;
    }
    .mp-pagination .mp-page-num {
        color: #212121;
        line-height: .6rem;
        padding: 0 15px;
    }
    .mp-moreinfo .mp-page-text {
        padding-top: .2rem;
        line-height: .3rem;
        font-size: .3rem;
    }   
    .mp-list-qunarprice em {
        font-size: .32rem;
        padding-left: .04rem;
    }

</style>