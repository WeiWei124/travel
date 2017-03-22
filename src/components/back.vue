<template>
	<div class="backs" @click="back">
		<div class="back1"></div>
		<div class="back2">返回</div>
	</div>
</template>

<script>
	
export default {
	name:"back",
	methods:{
		back(){
			this.$router.go(-1)
		}
	}
	
}
</script>
<style scoped>
	.backs{
		height: .57rem;
		width: 1rem;
		position: absolute;
		left: .12rem;
		top: .14rem;
		box-sizing: border-box;
		line-height: .57rem;
		text-align: center;
	}
	.back1{
		float: left;
		width: 0;
		height: 0;
		border-top: .28rem solid transparent;
		border-bottom: .28rem solid transparent;
		border-right: .15rem solid #1bcb66;
	}
	.back2{
		width: .75rem;
		float: left;
		color: #fff;
		font-size: .24rem;
		background: #1bcb66;
	}
</style>
