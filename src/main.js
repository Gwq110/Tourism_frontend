import { createApp } from 'vue'
import App from './App.vue'
import {
  Button,
  Tabbar,
  TabbarItem,
  NavBar,
  NoticeBar,
  Field,
  Popup,
  Loading,
  Picker,
  Icon,
  Tag,
  Grid,
  GridItem,
  Toast,
  Empty,
} from 'vant'
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
app.use(Icon)
app.use(Tag)
app.use(Grid)
app.use(GridItem)
app.use(Toast)
app.use(Loading)
app.use(Empty)
app.mount('#app')
