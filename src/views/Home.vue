<template>
  <div class="page-container">
    <van-nav-bar title="智能旅游助手" />
    <div class="page-content">
      <van-notice-bar
        left-icon="volume-o"
        text="基于AI智能旅游助手，为用户提供专业的旅游建议。"
      />

      <div class="card">
        <div class="section-title">规划你的旅程</div>
        <van-field
          @click="showCityPicker = true"
          v-model="formData.city"
          label="文本"
          placeholder="请输入目的地"
        />
        <van-field
          v-model="formData.budget"
          label="文本"
          placeholder="请输入预算"
        />
        <van-field
          v-model="formData.days"
          label="文本"
          placeholder="请输入天数"
        />
      </div>

      <div class="card">
        <div class="section-title">快捷入口</div>
      </div>

      <div class="card">
        <div class="section-title">热门目的地</div>
      </div>
    </div>
    <van-popup round="Bottom" v-model:show="showCityPicker" position="bottom">
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

const showCityPicker = ref(false)

const formData = reactive({
  city: '',
  budget: null,
  days: null,
})

const onCancel = () => {
  showCityPicker.value = false
}

const onConfirm = (value) => {
  formData.city = value
}

const allCities = [
  '北京',
  '上海',
  '广州',
  '深圳',
  '成都',
  '杭州',
  '西安',
  '重庆',
  '南京',
  '武汉',
  '苏州',
  '长沙',
  '天津',
  '郑州',
  '济南',
  '青岛',
  '大连',
  '沈阳',
  '哈尔滨',
  '长春',
  '福州',
  '厦门',
  '南昌',
  '合肥',
  '昆明',
  '贵阳',
  '南宁',
  '桂林',
  '海口',
  '三亚',
  '丽江',
  '大理',
  '西安',
  '兰州',
  '乌鲁木齐',
  '拉萨',
  '呼和浩特',
  '太原',
  '石家庄',
]
const columns = allCities.map((item) => ({
  text: item,
  value: item,
}))
</script>

<style scoped>
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
</style>
