<template>
	<div class="local">
		<back></back><div class="top">当地</div>
		<div class="local-main">
			<div class="local-search">
				<span>选择城市:</span><input type="text" v-model="cityname" @keyup.enter="searchcity(cityname)"/><b class="fa fa-chevron-right"></b>
			</div>
			<div class="local-show">
				<dl v-for="item in shows">
					<dt><img :src="item.img" alt="" /></dt>
					<dd>
						<p>[{{item.city}}]</p>
						<p>{{item.name}}</p>
						<p>￥{{item.money}}元/人天</p>
					</dd>
				</dl>
				
			</div>
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
				show:"",
				shows:[],
				cityname:""
			}
		},
		methods:{
			searchcity(obj){
				console.log(obj)
				this.shows=[];
				for(var i=0,len=this.show.length;i<len;i++){
					if(this.show[i].city==obj){
						this.shows.push(this.show[i])
					}

				}
			}
		},
		created(){
			this.$http({
				url:"/api/local",
				method:"POST"
			})
			.then(function(res){
				this.show=res.body.show
				for(var i=0,len=this.show.length;i<len;i++){
					this.shows.push(this.show[i])
				}
			},function(err){
				console.log(err)
			})
		}
	}
</script>
<style scoped>
	.local{
		flex: 1;
		display: flex;
		flex-direction: column;
		background: #f0eff4;
	}
	.local-main{
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	.local-search{
		display: flex;
		font-size: .26rem;
		height: .9rem;
		border-bottom: 1px solid #999;
		line-height: .9rem;
		color: #1EBF62;
		padding-left: .1rem;
	}
	.local-search input{
		flex: 1;
		margin-left: .3rem;
		border: none;
		outline: none;
		background: #f0eff4;
	}
	.local-search b{
		color: #000000;
		line-height: .9rem;
		margin:0 .1rem;
		font-size: .26rem;
	}
	.local-show{
		flex: 1;
		overflow: auto;
	}
	dl{
		display: inline-block;
		width: 43%;
		margin-left:4.5%;
		overflow: hidden;
		background: #fff;
		margin-top: .24rem;
		border-radius: .1rem;
	}
	dl dt img{
		width: 3rem;
	}
	dl dd{
		padding-left: .1rem;
	}
	dl dd p:first-child{
		font-size: .24rem;
		line-height: .42rem;
		color: #676767;
		font-weight: bold;
	}
	dl dd p:nth-child(2){
		font-size: .2rem;
		line-height: .42rem;
		color: #676767;
	}
	dl dd p:last-child{
		font-size: .24rem;
		color: red;
	}
</style>