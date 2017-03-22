import Vue from 'vue'
Vue.directive("alerts",{
	bind:function(el){
		el.onclick=function(){
			alert(10)
		}
	}
})
Vue.directive("alerta",{
	bind:function(el){
		el.onclick=function(){
			alert(13)
		}
	}
})