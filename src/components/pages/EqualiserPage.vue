<template>
  <div class="equaliser-page">
    <div class="preset-tabs">
      <span :class="{active: preset==='JAZZ'}" @click="preset='JAZZ'">JAZZ</span>
      <span :class="{active: preset==='ROCK'}" @click="preset='ROCK'">ROCK</span>
      <span :class="{active: preset==='ELECTRONIC'}" @click="preset='ELECTRONIC'">ELECTRONIC</span>
    </div>
    <div class="quick-sliders">
      <div class="slider-group" v-for="item in quicks" :key="item.label">
        <label>{{ item.label }}</label>
        <input type="range" min="-10" max="10" v-model="item.value" />
        <span class="slider-value">{{ item.value }}</span>
      </div>
    </div>
    <div class="fine-sliders">
      <div class="slider-group" v-for="item in fines" :key="item.label">
        <label>{{ item.label }}</label>
        <input type="range" min="-10" max="10" v-model="item.value" />
        <span class="slider-value">{{ item.value }}</span>
      </div>
    </div>
    <div class="preview">
      <span class="preview-title">Perfect</span>
      <button class="preview-btn">▶️</button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const preset = ref('ROCK');
const quicks = ref([
  { label: 'Bass', value: 0 },
  { label: 'Treble', value: 0 },
  { label: 'Vocal', value: 0 },
]);
const fines = ref([
  { label: '60Hz', value: 0 },
  { label: '150Hz', value: 0 },
  { label: '400Hz', value: 0 },
  { label: '1kHz', value: 0 },
  { label: '2.4kHz', value: 0 },
  { label: '6kHz', value: 0 },
  { label: '16kHz', value: 0 },
]);
</script>
<style scoped>
.equaliser-page {
  padding: 24px 16px 80px 16px;
}
.preset-tabs {
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-bottom: 24px;
  font-size: 16px;
  color: #ccc;
}
.preset-tabs .active {
  color: #FF5C8D;
  font-weight: bold;
  border-bottom: 2px solid #FF5C8D;
}
.quick-sliders, .fine-sliders {
  display: flex;
  gap: 24px;
  margin-bottom: 18px;
  justify-content: center;
}
.fine-sliders {
  gap: 12px;
  flex-wrap: wrap;
}
.slider-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #231b36;
  border-radius: 8px;
  padding: 12px 8px 8px 8px;
  min-width: 60px;
}
.slider-group label {
  color: #fff;
  font-size: 14px;
  margin-bottom: 4px;
}
input[type="range"] {
  width: 48px;
  accent-color: #FF5C8D;
  margin: 4px 0;
}
.slider-value {
  color: #FF5C8D;
  font-size: 13px;
  margin-top: 2px;
}
.preview {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  gap: 16px;
}
.preview-title {
  color: #fff;
  font-size: 16px;
  font-weight: 500;
}
.preview-btn {
  background: #FF5C8D;
  border: none;
  color: #fff;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 2px 8px #FF5C8D22;
}
</style>
