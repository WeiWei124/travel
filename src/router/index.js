import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'



import index from '../components/index'
import home from '../components/home'
import indent from '../components/indent'
import myself from '../components/myself'
import more from '../components/more'
import nearby from '../components/nearby'
import train from '../components/train'
import aircraft from "../components/aircraft"
import hot from "../components/hot"
import hotel from '../components/hotel'
import searchhotel from '../components/searchhotel'
import details from '../components/details'
import local from '../components/local'
import login from '../components/login'
/*  挂载  */
Vue.use(Router)
Vue.use(VueResource)
Vue.http.options.emulateJSON = true;

export default new Router({
  routes: [
    {
    	name: 'index',
        path: '/',
      	component: index,
      	redirect: '/home',
      	children:[{
      		name:'home',
      		path:'/home',
      		component:home
      	},{
      		name:'indent',
      		path:'/indent',
      		component:indent
      	},{
      		name:'myself',
      		path:'/myself',
      		component:myself
      	},{
      		name:'more',
      		path:'/more',
      		component:more
      	}]
    },{
    	name:"nearby",
    	path:"/nearby",
    	component:nearby
    },{
    	name:"train",
    	path:"/train",
    	component:train
    },{
    	name:"aircraft",
    	path:"/aircraft",
    	component:aircraft
    },{
    	name:"hot",
    	path:"/hot",
    	component:hot
    },{
    	name:"hotel",
    	path:"/hotel",
    	component:hotel
    },{
    	name:"searchhotel",
    	path:"/searchhotel",
    	component:searchhotel
    },{
    	name:"details",
    	path:"/details",
    	component:details
    },{
    	name:"local",
    	path:"/local",
    	component:local
    },{
      name:"login",
      path:"/login",
      component:login
    }
  ]
})
