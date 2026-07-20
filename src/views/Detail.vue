<template>
  <div class="home">
    <h1>详情</h1>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue'
import {useRoute} from 'vue-router'

const route = useRoute()

const formData = reactive({
  city: '',
  budget: '',
  days: ''
})

onMounted(() => {
  formData.city = route.query.city
  formData.budget = route.query.budget
  formData.days = route.query.days
})
</script>

<style scoped>
.home {
    padding: 16px;
}
</style>