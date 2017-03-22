<template>
	<div class="home">
		<div class="top">我爱游<span class="fa fa-search"></span></div>
		<div class="contains">
			<swiper :list="banner" height="2.36rem" :showDescMask="false" dotsPosition="center" loop auto :interval="1000"></swiper>
			<div class="home-show">
				<div v-for="item in main" class="home-min" @click="jump(item.path)">
					<img :src="item.img"/>
					<span>{{item.name}}</span>
				</div>
			</div>
			<div class="hoem-img">
				<img src="../../static/images/sky_03.png" alt="" />
			</div>
		</div>
	</div>
	
</template>

<script>
import { Swiper } from 'vux'
export default {
	components:{
		Swiper
	},
  	name: 'index',
  	data () {
    	return {
      		banner:[{
					img:"/static/images/banners1.jpg"
				},{
					img:"/static/images/banners2.jpg"
				},{
					img:"/static/images/banners3.jpg"
				},{
					img:"/static/images/banners4.jpg"
				},{
					img:"/static/images/banners5.jpg"
				},{
					img:"/static/images/banners6.jpg"
				}],
			main:[{
				id:"1",
				name:"记账",
				img:"/static/images/icon_05.png",
				path:"add"
			},{
				id:"2",
				name:"境内外",
				img:"/static/images/icon_07.png"
			},{
				id:"3",
				name:"时光轴",
				img:"/static/images/icon_09.png"
			},{
				id:"4",
				name:"热门",
				img:"/static/images/icon_14.png",
				path:"hot"
			},{
				id:"5",
				name:"火车票",
				img:"/static/images/icon_15.png",
				path:"train"
			},{
				id:"6",
				name:"飞机票",
				img:"/static/images/icon_16.png",
				path:"aircraft"
			},{
				id:"7",
				name:"酒店",
				img:"/static/images/icon_21.png",
				path:"hotel"
			},{
				id:"8",
				name:"当地",
				img:"/static/images/icon_22.png",
				path:"local"
			},{
				id:"9",
				name:"附近",
				img:"/static/images/icon_23.png",
				path:"nearby"
			}]
    	}
  	},
  	methods:{
  		jump(obj){
  			this.$router.push(obj)
  		}
  	}
}
</script>


<style scoped>
	.home{
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.contains{
		background: #f0eff4;
		flex: 1;
		overflow: auto;
	}
	.top span{
		float: right;
		right: .3rem;
		top: .25rem;
		position: absolute;
	}
	.home-show{
		border-top: 1px solid #ccc;
		border-right: 1px solid #ccc;
		overflow: hidden;
		background: #fff;
		margin-top: .5rem;
		margin-bottom: .34rem;
	}
	.home-min{
		box-sizing: border-box;
		float: left;
		width: 33.33%;
		height: 1.56rem;
		font-size: .24rem;
		border-bottom: 1px solid #ccc;
		border-left: 1px solid #ccc;
		text-align: center;
	}
	.home-show img{
		width: .9rem;
		height: .9rem;
		margin-top: .15rem;
		margin-left: .6rem;
		margin-bottom: .06rem;
		display: block;
	}
	.hoem-img img{
		width: 100%;
	}
</style>
