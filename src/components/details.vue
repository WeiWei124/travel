<template>
	<div class="details">
		<back></back><div class="top">详细信息</div>
		<div class="details-main">
			<h6>{{this.name}}</h6>
			<img :src="this.img" alt="" />
		</div>
	</div>
	
</template>

<script>
import back from "./back"
export default {
	components:{
		back
	},
  	data () {
    	return {
    		name:"",
    		img:""
      	}
  	},
  	created(){
  		this.name=this.$route.query.name;
  		this.img=this.$route.query.img
  	}
}
</script>


<style scoped>
	
</style>
