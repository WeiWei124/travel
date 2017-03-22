<template>
	<div class="more">
		<div class="top">更多设置</div>
		<div class="more-mian">
			<group>
				<cell v-for="item in show" :title="item.title" is-link>
					<img :src="item.img" slot="icon" style="display: block;width: .33rem;margin-right: .14rem;"/>
				</cell>
			</group>
		</div>
	</div>
</template>

<script>
import { Group,Cell } from 'vux'
export default {
	name: 'more',
	components:{
		Group,
		Cell
	},
  	data () {
    	return {
      		show:[{
	  			title:"设置",
	  			img:"/static/images/star.png"
	  		},{
	  			title:"扫一扫",
	  			img:"/static/images/star.png"
	  		},{
	  			title:"帮助中心",
	  			img:"./static/images/star.png"
	  		},{
	  			title:"意见反馈",
	  			img:"/static/images/star.png"
	  		},{
	  			title:"给我评价",
	  			img:"/static/images/star.png"
	  		},{
	  			title:"检查更新",
	  			img:"/static/images/star.png"
	  		},{
	  			title:"关于我爱游",
	  			img:"/static/images/star.png"
	  		}]
    	}
  	}
}
</script>


<style scoped>
	
</style>
