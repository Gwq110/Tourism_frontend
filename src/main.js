import { createApp } from 'vue'
import App from './App.vue'
import { Button, Tabbar, TabbarItem } from 'vant'
import 'vant/lib/index.css'
import router from './router'

const app = createApp(App)
app.use(Button)
app.use(Tabbar)
app.use(TabbarItem)
app.use(router)
app.mount('#app')
