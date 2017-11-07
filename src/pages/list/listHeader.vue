<template>
	<div>
		<div class="list-header">
			<router-link to="/">
				<div class="list-return iconfont icon-back"></div>
			</router-link>	
			<div class="list-search">
				<input placeholder="输入景点或城市" value="景点门票" v-on:keyup="inputValueChange" />
			</div>
			<div class="list-search-btn">搜索</div>
		</div>
		<div class="search" v-if= "show" >
			<div class="search-con">
				搜索身边的景点
			</div>
		</div>
	</div>
</template>
<script>
	export default {

		data(){
			return{
				show:false
			}
		},
		methods:{
			inputValueChange(e){
				if(e.target.value == ""){
					this.show = true
				}else{
					this.show = false
				}
				
			}
		}
	}
</script>
<style scoped>
.list-header{
	position:relative;
	display:flex;
	height: .88rem;
	width:100%;
	background:#00bcd4;
}
.list-return{
	float:left;
	width: .4rem;
    line-height: .88rem;
    padding: 0 .2rem;
    color: #fff;
    font-size: .5rem;
    text-align: left;
    font-weight: 700;
}
.list-search{
	float:left;
	box-sizing: border-box;
	flex: 1
}
.list-search input {
	box-sizing: border-box;
	height:100%;
	width:100%;
	height: .6rem;
	margin-top: .15rem;
	padding: 0 .2rem;
    background: #fff;
    border-radius: .1rem ;
    border:0;
}
.list-search-btn{
	float:left;
    width: .74rem;
    height: .88rem;
    margin-left: .2rem;
    line-height: .88rem;
    margin-right: .04rem;
    color: #fff;
    font-size: .28rem;
}
.search{
	position:absolute;
	top:.88rem;
	display: flex;
	box-sizing: border-box;
	height: 1.12rem;
	width:100%;
	background:#fff;
	border-bottom:1px solid #dde1e3;
	padding:.2rem;
}
.search-con{
	height:100%;
	width:100%;
    text-align: center;
    line-height: .72rem;
    font-size: .26rem;
    color: #333;
    border: 1px solid #dde1e3;
    border-radius: 2px;
}
</style>