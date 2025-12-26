<template>
  <div class="radio-page">
    <div class="frequency-bars">
      <div v-for="(f, idx) in freqs" :key="f.value" :class="['bar', {active: idx===currentIdx}]" @click="currentIdx=idx">
        <div class="bar-rect" :style="{height: f.height+'%'}"></div>
        <div class="bar-label">{{ f.value }}</div>
      </div>
    </div>
    <div class="radio-controls">
      <button class="ctrl-btn" @click="prev">⏮️</button>
      <button class="ctrl-btn main" @click="togglePlay">
        <span v-if="playing">⏸️</span>
        <span v-else>▶️</span>
      </button>
      <button class="ctrl-btn" @click="next">⏭️</button>
    </div>
    <div class="volume-slider">
      <input type="range" min="0" max="100" v-model="volume" />
      <span class="vol-label">音量 {{ volume }}</span>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const freqs = [
  { value: '101.7', height: 60 },
  { value: '101.8', height: 80 },
  { value: '102.6', height: 100 },
  { value: '103.8', height: 70 },
  { value: '102.2', height: 50 },
  { value: '102.9', height: 90 },
];
const currentIdx = ref(2);
const playing = ref(true);
const volume = ref(60);
function prev() { if(currentIdx.value>0) currentIdx.value--; }
function next() { if(currentIdx.value<freqs.length-1) currentIdx.value++; }
function togglePlay() { playing.value = !playing.value; }
</script>
<style scoped>
.radio-page {
  padding: 24px 16px 80px 16px;
}
.frequency-bars {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 18px;
  height: 120px;
  margin-bottom: 24px;
}
.bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}
.bar-rect {
  width: 24px;
  border-radius: 8px 8px 0 0;
  background: #44405a;
  margin-bottom: 6px;
  transition: background 0.15s, height 0.2s;
}
.bar.active .bar-rect {
  background: #FF5C8D;
}
.bar-rect {
  transition: height 0.2s;
}
.bar-label {
  color: #ccc;
  font-size: 14px;
  margin-top: 2px;
}
.bar.active .bar-label {
  color: #FF5C8D;
  font-weight: bold;
}
.radio-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin-bottom: 18px;
}
.ctrl-btn {
  background: #231b36;
  border: none;
  color: #fff;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  font-size: 22px;
  cursor: pointer;
  box-shadow: 0 2px 8px #FF5C8D22;
  transition: background 0.15s;
}
.ctrl-btn.main {
  background: #FF5C8D;
  color: #fff;
  width: 56px;
  height: 56px;
  font-size: 28px;
}
.ctrl-btn:active {
  background: #e04c7a;
}
.volume-slider {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 12px;
  justify-content: center;
}
.volume-slider input[type="range"] {
  width: 160px;
  accent-color: #FF5C8D;
}
.vol-label {
  color: #ccc;
  font-size: 15px;
}
</style>
