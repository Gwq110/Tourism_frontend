<template>
  <div class="page-container">
    <van-nav-bar title="智能旅游助手" />
    <div class="page-content">
      <van-notice-bar
        left-icon="volume-o"
        text="基于AI智能旅游助手,为用户提供专业的旅游建议。"
      />

      <div class="card" style="margin-top: 16px;">
        <div class="section-title">规划你的旅程</div>
        <van-field
          @click="showCityPicker = true"
          v-model="formData.city"
          label="目的地"
          readonly
          is-link
          placeholder="请输入目的地"
          style="background-color: #f7f7f7; margin-bottom: 16px; border-radius: 8px;"
        />
        <van-field
          v-model="formData.budget"
          style="background-color: #f7f7f7; border-radius: 8px; margin-bottom: 16px;"
          label="预算"
          placeholder="请输入预算"
        />
        <van-field
          v-model="formData.days"
          style="background-color: #f7f7f7; border-radius: 8px; margin-bottom: 16px;"
          label="天数"
          placeholder="请输入天数"
        />
        <van-button type="primary" size="medium" round @click="handleSubmit" block>规划你的旅程</van-button>
      </div>

      <div class="card">
        <div class="section-title">快捷入口</div>
        <div class="quick-entry" @click="goPage('/chat')">
          <div class="entry-item">
            <div class="entry-icon">
              <van-icon name="chat-o" size="32"  />
            </div>
            <span class="entry-text">AI对话</span>
          </div>
          <div class="entry-item" @click="goPage('/profile')">
            <div class="entry-icon">
              <van-icon name="user-o" size="32" />
            </div>
            <span class="entry-text">我的</span>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="section-title">热门目的地</div>
        <van-grid :column-num="4">
          <van-grid-item @click="selectCity(city)" v-for="city in hotCities" :key="city" >
            <van-tag :plain="selectedCity !== city" type="primary" round size="medium">{{ city }}</van-tag>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
    <van-popup round v-model:show="showCityPicker" position="bottom">
      <van-picker
        title="标题"
        :columns="columns"
        @confirm="onConfirm"
        @cancel="onCancel"
        @change="onChange"
      />
    </van-popup>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import {useRouter} from 'vue-router'
import {showToast} from 'vant'

const router = useRouter()
const showCityPicker = ref(false)
const selectedCity = ref('')

const formData = reactive({
  city: '',
  budget: null,
  days: null,
})

const onCancel = () => {
  showCityPicker.value = false
}

const onConfirm = ({selectedOptions}) => {
  const city = selectedOptions[0].value
  selectedCity.value = city
  formData.city = city
  showCityPicker.value = false
}

const onChange = () => {
  // 城市选择器变更时的处理函数
}

const allCities =[
  '北京', '上海', '广州', '深圳', '成都', '杭州', '西安', '重庆',
  '南京', '武汉', '苏州', '长沙', '天津', '郑州', '济南', '青岛',
  '大连', '沈阳', '哈尔滨', '长春', '福州', '厦门', '南昌', '合肥',
  '昆明', '贵阳', '南宁', '桂林', '海口', '三亚', '丽江', '大理',
  '西安', '兰州', '乌鲁木齐', '拉萨', '呼和浩特', '太原', '石家庄'
]

const columns = allCities.map((item) => ({
  text: item,
  value: item,
}))

const hotCities = [
  '北京', '上海', '广州', '深圳', '成都', '杭州', '西安', '重庆',
]

const goPage = (path) => {
  router.push(path)
}

const selectCity = (city) => {
  selectedCity.value = city
  formData.city = city
}

const handleSubmit = () => {
  // 校验表单数据
  if (!formData.city) {
    showToast('请选择目的地')
    return
  }
  if (!formData.budget || formData.budget < 100 ) {
    showToast('请输入正确的预算(至少100元)')
    return
  }
  if (!formData.days || formData.days < 1 || formData.days > 30) {
    showToast('请输入正确的天数(至少1天,最多30天)')
    return
  }

  // 跳转详情页
  router.push({
    name: 'Detail',
    query: {
      city: formData.city,
      budget: formData.budget,
      days: formData.days,
    }
  })
}




</script>

<style scoped>
.page-container {
  background-color: #f5f5f5;
  min-height: 100vh;
  padding-bottom: 70px;
}
.page-content {
  padding: 16px;
}
.card {
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}
.section-title {
  font-size: 18px;
  font-weight: 600;
  color: #323233;
  margin-bottom: 12px;
}
.quick-entry {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.entry-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
  flex: 1;
}
.entry-icon {
  width: 64px;
  height: 64px;
  background-color: #f0f7ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
}
.entry-icon .van-icon {
  display: block;
}
.entry-text {
  font-size: 14px;
  color: #646566;
}
.hot-cities {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
}
.hot-cities .van-tag {
  margin-bottom: 0;
}
</style>
