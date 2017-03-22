<template>
	<div class="hot">
		<back></back><div class="top">热门</div>
		<div class="nearby-main">
			<tab  active-color='#74d175' v-model='num'>
				<tab-item class="vux-center" v-for="i in list2">{{i}}</tab-item>
			</tab>
			<div class="swiper-main">
				<swiper :show-dots="false" v-model='num' class="swiper" height="8rem">
					<swiper-item v-for="(item,ind) in show">
						<dl v-for="(items,inds) in item" @click="details(ind,inds)">
							<dt class="nearby-img"><img :src="items.img" /></dt>
							<dd>
								<p class="p1">{{items.name}}</p>
								<p class="p2"><span v-if="ind!=2">{{items.num}}条路线</span>￥{{items.money}}元起</p>
								<p class="p3" id="p3" v-if="ind==2">
									<img :src="items.startimg"/>
								</p>
							</dd>
						</dl>
					</swiper-item>	
				</swiper>
			</div>
		</div>
	</div>
</template>

<script>
	var p3=document.getElementById("p3") 
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
  	name: 'hot',
  	data () {
    	return {
    		list2: ['景点', '境内', '境外'],
	    	num:0,
	    	show:""
      	}
  	},
  	created(){
		this.$http({
			url:"/api/hot",
			method:"POST"
		})
		.then(function(res){
			this.show=res.body.show
//			console.log(res.body.show.length)
			for(var i in res.body.show[2]){
				console.log(res.body.show[2][i].start)
				p3.appendChild("img")
			}
		},function(err){
			console.log(err)
		})
		
		
  	},
 	methods:{
		details(ind,inds){
			this.$router.push("/details?name="+this.show[ind][inds].name+"&img="+this.show[ind][inds].img)
		}
	}
}
</script>


<style scoped>
	.hot{
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
		line-height: .6rem;
	}
	.p1{
		font-size: .24rem;
		color: #676767;
	}
	.p2{
		font-size: .2rem;
		color: red;
	}
	.p2 span{
		color: #676767;
		padding-right: .3rem;
	}
	.p3 img{
		margin-top: .15rem;
		width: .18rem;
		float: left;
	}
</style>
