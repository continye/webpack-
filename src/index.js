/*
 * @Author: hukai huzhengen@gmail.com
 * @Date: 2024-09-12 09:49:08
 * @LastEditors: hukai huzhengen@gmail.com
 * @LastEditTime: 2024-09-13 15:31:57
 * @FilePath: \newWebpack\src\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: hukai huzhengen@gmail.com
 * @Date: 2024-09-12 09:49:08
 * @LastEditors: hukai huzhengen@gmail.com
 * @LastEditTime: 2024-09-13 09:49:03
 * @FilePath: \newWebpack\src\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
 
// import { createApp } from 'vue/dist/vue.esm-bundler'
// import App from "@/views/App.vue" //导入
// console.log(router)
// createApp(App).use(router)
// createApp(App).mount("#app") // 创建实例并挂载（mount）
import { createApp } from 'vue'
import App from "@/views/App.vue" 
import router from '@/router/index.js'

const app = createApp(App)
app.use(router)
app.mount('#app')

