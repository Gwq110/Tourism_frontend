<template>
  <div class="home">
    <h1>详情</h1>
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { post } from '@/utils/request'

const route = useRoute()


const getRecommend = async () => {
  try {
    const formData = {
      city: route.query.city,
      budget: Number(route.query.budget),
      days: Number(route.query.days),
    }
    const res = await post('/api/travel/recommend', formData)
    console.log('推荐结果:', res)
  } catch (error) {
    console.error('请求失败:', error)
  }
}

onMounted(() => {
  getRecommend()
})
</script>

<style scoped>
.home {
  padding: 16px;
}
</style>