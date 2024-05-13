<script setup>
import { ref } from 'vue'
const availableReads = ['stm', 'opz4', 'pcba']
const selectedValue = ref('stm')
const readResponse = ref('readResponse')

// const API_URL = 'http://localhost:3000'

const requestRead = async function () {
  console.log('Requesting read for', selectedValue.value)
  const serviceResponse = await fetch(`${import.meta.env.VITE_API_URL}/reading`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ read: selectedValue.value })
  })
  const response = await serviceResponse.json()
  console.log('Read response:', response)
  readResponse.value = response.reading
}
</script>

<template>
  <div class="text-bold text-red text-xl border border-black">
    Hello
  </div>
  <div class="flex flex-col">
    <select v-model="selectedValue">
      <option disabled value="">Please select a value type</option>
      <option v-for="read in availableReads" :key="read" :value="read">{{ read }}</option>
    </select>
  </div>
  <button @click="requestRead">Request Read</button>
  <div class="pt-4 font-bold text-green-600">{{ readResponse }}</div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
