<template>
	<div class="train">
		<back></back><div class="top">酒店查询</div>
		<div class="train-mian">
			<group>
				<popup-picker title="目的地：" :data="list" v-model="num" value-text-align="left"></popup-picker>
				<p><calendar v-model="time" title="入店日期" disable-past></calendar></p>
				<calendar v-model="times" title="离店日期" disable-past></calendar>
				<cell title="关键字"></cell>
				<popup-picker title="星极价格：" :data="list1" v-model="num1" value-text-align="left"></popup-picker>

			</group>
			<button @click="jump">开始搜索</button>
		</div>
		
	</div>
</template>

<script>
	import back from './back'
	import { Group, PopupPicker, Calendar,Cell } from 'vux'
	export default{
		name:"train",
		components:{
			back,
			Group,
			PopupPicker,
			Calendar,
			Cell
		},
		data(){
			return {
				num:['北京'],
				num1:['不限星级价格'],	
				list: [['北京', '上海', '天津', '重庆','成都','重庆','长春','长沙','福州','贵阳','广州','杭州','呼和浩特','哈尔滨','合肥','济南','昆明','拉萨','兰州','南昌','南宁','南京','深圳','沈阳','石家庄','太原','海口','乌鲁木齐南','武汉','银川','郑州']],
				list1:[["不限星级价格","一星级","二星级","三星级","四星级","五星级"]],
				time:"",
				times:""
			}
		},
		created(){
				//console.log(this.num1[0])
		},
		methods:{
			jump(){
				//console.log(this.num[0]+this.num1[0])
				this.$router.push("searchhotel?city="+this.num[0]+"&start="+this.num1[0])
			}
		}
	}
</script>
<style scoped>
	.train{
		height: 100%;
		background: #F0EFF4;
	}
	button{
		width:90%;
		height: .6rem;
		border: none;
		background: #1BCB66;
		color: #fff;
		border-radius: .1rem;
		font-size: .3rem;
		margin-left: 5%;
		outline: none;
	}
</style>