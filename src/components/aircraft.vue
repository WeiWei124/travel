<template>
	<div id="aircraft" class="aircraft">
		<back></back><div class="top">飞机票</div>
		<div class="aircraft-main">
			<tab active-bjcolor='#74d175' v-model='nums'>
				<tab-item class="vux-center" v-for="i in list2">{{i}}</tab-item>
			</tab>
			<group>
				<popup-picker title="出发城市：" :data="list" v-model="num" value-text-align="left"></popup-picker>
				<popup-picker title="到达城市：" :data="list1" v-model="num1" value-text-align="left"></popup-picker>
				<calendar v-model="time" title="出发日期" disable-past></calendar>
				<calendar v-model="time1" title="返回日期" disable-past v-if="nums"></calendar>
				<cell title="航空公司" value="深圳航空"></cell>
			</group>
			<button v-alerta>开始搜索</button>
		</div>
	</div>
</template>
<script>
	import back from './back'
	import { Tab, TabItem,Group,PopupPicker,Calendar,Cell } from 'vux'
	export default{
		components:{
			back,
			Tab, 
			TabItem,
			Group,
			PopupPicker,
			Calendar,
			Cell
		},
		data(){
			return{
				bool:true,
				num:['北京'],
				num1:['北京'],
				nums:0,
				list2:["单程","往返"],
				list: [['北京', '上海', '天津', '重庆','成都','重庆','长春','长沙','福州','贵阳','广州','杭州','呼和浩特','哈尔滨','合肥','济南','昆明','拉萨','兰州','南昌','南宁','南京','深圳','沈阳','石家庄','太原','海口','乌鲁木齐南','武汉','银川','郑州']],
				list1: [['北京', '上海', '天津', '重庆','成都','重庆','长春','长沙','福州','贵阳','广州','杭州','呼和浩特','哈尔滨','合肥','济南','昆明','拉萨','兰州','南昌','南宁','南京','深圳','沈阳','石家庄','太原','海口','乌鲁木齐南','武汉','银川','郑州']],
				time:"",
				time1:""
			}
			
		},
		created(){
			if(this.nums==0){
				this.bool=!this.bool
			}else{
				this.bool=true
			}
		}
		
		
	}
</script>
<style scoped>
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