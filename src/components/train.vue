<template>
	<div class="train">
		<back></back><div class="top">火车票</div>
		<div class="train-mian">
			<group>
				<popup-picker title="出发城市：" :data="list" v-model="num" value-text-align="left"></popup-picker>
				<popup-picker title="到达城市：" :data="list1" v-model="num1" value-text-align="left"></popup-picker>
				<calendar v-model="time" title="出发日期" disable-past></calendar>
			</group>
			<button>开始搜索</button>
		</div>
		
	</div>
</template>

<script>
	import back from './back'
	import { Group, PopupPicker, Calendar } from 'vux'
	export default{
		name:"train",
		components:{
			back,
			Group,
			PopupPicker,
			Calendar
			
		},
		data(){
			return {
				num:['北京'],
				num1:['北京'],
				list: [['北京', '上海', '天津', '重庆','成都','重庆','长春','长沙','福州','贵阳','广州','杭州','呼和浩特','哈尔滨','合肥','济南','昆明','拉萨','兰州','南昌','南宁','南京','深圳','沈阳','石家庄','太原','海口','乌鲁木齐南','武汉','银川','郑州']],
				list1: [['北京', '上海', '天津', '重庆','成都','重庆','长春','长沙','福州','贵阳','广州','杭州','呼和浩特','哈尔滨','合肥','济南','昆明','拉萨','兰州','南昌','南宁','南京','深圳','沈阳','石家庄','太原','海口','乌鲁木齐南','武汉','银川','郑州']],
				time:""
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