<template>
	<div class="searchhotel">
		<back></back><div class="top">酒店</div>
		<div class="searchhotel-main">
			<dl v-for="(item,ind) in shows" @click="details(ind)">
				<dt>
					<img :src="item.img" alt="" />
				</dt>
				<dd>
					<p>{{item.name}}</p>
					<p><span>{{item.start}}</span><b>￥{{item.money}}元起</b></p>
					
				</dd>
			</dl>
		</div>
		
	</div>
</template>

<script>
	import back from './back'
	export default{
		name:"train",
		components:{
			back
		},
		data(){
			return{
				start:"",
				city:"",
				shows:[]
				
			}
		},
		created(){
			this.city=this.$route.query.city;
			this.start=this.$route.query.start;
//			console.log(this.city)
//			console.log(this.start)
			this.$http({
				url:"/api/hotel",
				method:"POST"
			})
			.then(function(res){
				var show=res.body.show;
				for(var i=0,len=show.length;i<len;i++){
					if(this.start==show[i].start){
						this.shows.push(show[i])
					}else if(this.start=="不限星级价格"){
						this.shows.push(show[i])
					}
					
				}
			},function(err){
				console.log(err)
			})
		},
		methods:{
			details(ind){
				this.$router.push("/details?name="+this.shows[ind].name+"&img="+this.shows[ind].img)
			}
		}
	}
</script>
<style scoped>
	.searchhotel{
		flex: 1;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}
	.searchhotel-main{
		flex: 1;
		margin-top: .2rem;
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
	dt img{
		width: 2.2rem;
	}
	dl dd p{
		padding-top: .3rem;
	}
	dl dd p:first-child{
		font-size: .24rem;
		color: #676767;
	}
	dl dd p:last-child{
		font-size: .2rem;
		color: #999;
	}
	dl dd p:last-child b{
		margin-left: .3rem;
		color: red;
	}
</style>