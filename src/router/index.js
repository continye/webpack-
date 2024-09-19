/*
 * @Author: hukai huzhengen@gmail.com
 * @Date: 2024-09-13 11:07:35
 * @LastEditors: hukai huzhengen@gmail.com
 * @LastEditTime: 2024-09-13 16:30:37
 * @FilePath: \newWebpack\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: hukai huzhengen@gmail.com
 * @Date: 2024-09-13 11:07:35
 * @LastEditors: hukai huzhengen@gmail.com
 * @LastEditTime: 2024-09-13 15:38:19
 * @FilePath: \newWebpack\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 配置路由的地方
// import Vue from 'vue'
// import VueRouter from 'vue-router'
// // 通过Vue.use()方法来使用插件
// Vue.use(VueRouter)
import { createWebHashHistory, createRouter } from 'vue-router'

// 引入路由组件
import Home from '@/views/Home/Home.vue'
import Search from '@/views/Search/Search.vue'
import Login from '@/views/Login/Login.vue'
import Register from '@/views/Register/Register.vue'
// 配置路由
export const constantRoutes = [
		// 路由信息
		{
			path: "/home",
            hidden: true,
			component: Home
		},
        // 重定向，在项目跑起来的时候，访问 / 或是其他 ，立马让它定向到首页
		// {
		// 	path: "*",
        //     hidden: true,
		// 	redirect: "/home"
		// },
		{
			path: "/search",
            hidden: true,
			component: Search
		},
		{
			path: "/login",
            hidden: true,
			component: () => import('@/views/Login/Login.vue')
		},
		{
			path: "/register",
            hidden: true,
			component: Register
		},
	]

const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { top: 0 }
      }
    }
  })
  
  export default router
  