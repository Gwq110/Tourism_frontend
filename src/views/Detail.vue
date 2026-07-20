<template>
  <div class="page-container">
    <van-nav-bar title="推荐结果" left-arrow @click-left="goBack" />
    <div class="page-content">
      <van-loading vertical v-if="loading">
        <template #icon>
          <van-icon name="star-o" size="30" />
        </template>
        加载中...
      </van-loading>
      <div v-else-if="error">
        <van-empty description="暂无推荐结果">
          <van-button type="primary" @click="getRecommend">重新推荐</van-button>
        </van-empty>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { post } from '@/utils/request'

const route = useRoute()
const router = useRouter()
const loading = ref(true)
const error = ref(false)

const goBack = () => {
  router.back()
}

const getRecommend = async () => {
  loading.value = true
  error.value = false
  try {
    const formData = {
      city: route.query.city,
      budget: Number(route.query.budget),
      days: Number(route.query.days),
    }
    const res = await post('/api/travel/recommend', formData)
    console.log('推荐结果:', res)
    loading.value = false
  } catch (err) {
    console.error('请求失败:', err)
    error.value = true
    loading.value = false
  }
}

onMounted(() => {
  getRecommend()
})
</script>

<style scoped>
.page-container {
  min-height: 100vh;
  background-color: #f5f5f5;
  padding-bottom: 70px;
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
.page-content {
  padding: 16px;
}
.overview-card {
  margin-bottom: 16px;
}

.trip-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.trip-header h2 {
  font-size: 20px;
  color: #323233;
  margin: 0;
}

.trip-budget {
  font-size: 16px;
  color: #ee0a24;
  font-weight: 600;
}

.trip-collapse {
  margin-bottom: 16px;
}

.day-schedule {
  padding: 8px 0;
}

.schedule-section {
  margin-bottom: 16px;
}

.schedule-section:last-child {
  margin-bottom: 0;
}

.section-label {
  font-size: 14px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 8px;
}

.section-label.morning {
  background: #fff7e6;
  color: #fa8c16;
}

.section-label.afternoon {
  background: #e6f7ff;
  color: #1890ff;
}

.section-label.evening {
  background: #f6ffed;
  color: #52c41a;
}

.budget-card,
.tips-card,
.warnings-card {
  margin-bottom: 16px;
}

.tips-list,
.warnings-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tips-list li,
.warnings-list li {
  padding: 8px 0;
  color: #666;
  font-size: 14px;
  border-bottom: 1px solid #f5f5f5;
}

.tips-list li:last-child,
.warnings-list li:last-child {
  border-bottom: none;
}

.detail-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px 16px;
  background: #fff;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.05);
  max-width: 750px;
  margin: 0 auto;
}

.error-card {
  text-align: center;
  padding: 40px 16px;
}
</style>
