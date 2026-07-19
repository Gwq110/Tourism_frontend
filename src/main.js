import { createApp } from 'vue'
import App from './App.vue'
import { 
  Button,
  Tabbar,
  TabbarItem,
  NavBar,
  NoticeBar,
  Field,
  Popup ,
  Picker } from 'vant'
import 'vant/lib/index.css'
import router from './router'

const app = createApp(App)
app.use(Button)
app.use(Tabbar)
app.use(TabbarItem)
app.use(NavBar)
app.use(NoticeBar)
app.use(Field)
app.use(router)
app.use(Popup)
app.use(Picker)
app.mount('#app')
