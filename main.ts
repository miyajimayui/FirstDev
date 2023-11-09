import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import App from './app.vue'

const app = createApp(App)

// Element Plusの使用を有効にする
app.use(ElementPlus)

app.mount('#app')
