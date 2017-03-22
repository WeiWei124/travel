<template>
	<div class="nearby">
		<back></back><div class="top">附近</div>
		<div class="nearby-main">
			<tab  active-color='#74d175' v-model='num'>
				<tab-item v-for="i in list2">{{i}}</tab-item>
			</tab>
			<div class="swiper-main">
				<swiper :show-dots="false" v-model='num' class="swiper" height="9rem">
					<swiper-item v-for="(item,ind) in show">
						<dl v-for="(items,inds) in item" @click="details(ind,inds)" v-if="ind!=1">
							<dt class="nearby-img"><img :src="items.img" /></dt>
							<dd>
								<p class="p1">{{items.name}}</p>
								<p v-if="ind==0" class="p2"><span>{{items.num}}条路线</span><b>￥{{items.money}}元起</b></p>
								<p v-if="ind!=0" class="p2"><span>{{items.num}}米</span><b>￥{{items.money}}/人</b></p>
							</dd>
						</dl>
						<div v-for="(items,inds) in item" @click="details(ind,inds)" v-if="ind==1" class="dv1">
							<img :src="items.img" alt=""/>
							<p class="p1">{{items.name}}</p>
							<p class="p2"><span>{{items.num}}米</span><b>￥{{items.money}}/人</b><span class="shop">抢购</span></p>
							
						</div>
					</swiper-item>	
					
				</swiper>
			</div>
		</div>
	</div>
</template>

<script>
	import back from './back'
	import { Tab, TabItem,Swiper, SwiperItem } from 'vux';
export default {
	components:{
		back,
		Tab,
		TabItem,
		Swiper,
		SwiperItem
	},
  	name: 'nearby',
  	data () {
    	return {
    		list2: ['景点', '套餐', '美食', '娱乐'],
	    	num:0,
	    	show:[],
	    	bool:true
      	}
  	},
  	created(){
  		
		this.$http({
			url:"/api/nearby",
			method:"POST"
		})
		.then(function(res){
			this.show=res.body.show
			console.log(res.body.show)
		},function(err){
			console.log(err)
		})

  	},
  	methods:{
  		details(ind,inds){
  			this.$router.push("/details?name="+this.show[ind][inds].name+"&img="+this.show[ind][inds].img)
  		},
  		
  	}
}
</script>


<style scoped>
	.nearby{
		flex: 1;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}
	.nearby-main{
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	.swiper-main{
		flex: 1;
		display: flex;
		flex-direction: column;
		overflow: auto;
	}
	.swiper{
		margin-top: .3rem;
		overflow: auto;
	}
	dl{
		clear: both;
		margin: 0;
		overflow: hidden;
		margin-left: .12rem;
		position: relative;
	}
	dl dt{
		float: left;
		width: 2.2rem;
	}
	dl dd{
		float: left;
		width: 3.7rem;
		margin:0 .1rem 0 .24rem;
	}
	.nearby-img img{
		width: 2.2rem;
	}
	dl dd p{
		padding-top: .3rem;
	}
	.p1{
		font-size: .24rem;
		color: #676767;
	}
	.p2{
		font-size: .2rem;
		color: #999;
	}
	.p2 b{
		margin-left: .3rem;
		color: red;
	}
	.dv1{
		margin-left: .1rem;
		margin-bottom: .3rem;
	}
	.dv1 img{
		width: 6.17rem;
		height: 3.16rem;
	}
	.shop{
		float: right;
		margin-right: .1rem;
		width: .85rem;
		height: .45rem;
		background: #ff3333;
		color: #fff;
		text-align: center;
		line-height: .4rem;
		border-radius: .07rem;
	}
</style>
