<template>
	<div class="indent">
		<div class="top">订单管理</div>
		<div class="indent-main">
			<group>
				<cell v-for="item in show" :title="item.name" is-link></cell>
			</group>
			 <alert v-model="bool" title="请先登录"> </alert>

		</div>
	</div>
	
</template>

<script>
import { Group,Cell,Alert } from 'vux'
export default {
	name: 'indent',
	components:{
		Group,
		Cell,
		Alert
	},
  	data () {
    	return {
      		show:[{
      			name:"酒店订单"
      		},{
      			name:"国内机票订单"
      		},{
      			name:"景点门票订单"
      		},{
      			name:"火车票订单"
      		},{
      			name:"身边订单"
      		}],
      		bool:false
    	}

 	},
 	created(){
 		if(!localStorage.getItem("lastname")){
 			this.bool=true
 			this.$router.push("/login")
 		}
 	}
}
</script>


<style scoped>
	
</style>
