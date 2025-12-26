<template>
  <div class="splash-page">
    <div class="status-bar">
      <span>10:30 AM</span>
      <span class="battery">100%</span>
      <span class="wifi">WiFi</span>
    </div>
    <div class="brand">
      <h1>MUSIC APP</h1>
      <div class="play-btn">
        <svg width="64" height="64" viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="30" fill="#231b36" stroke="#FF5C8D" stroke-width="4" />
          <polygon points="28,22 48,32 28,42" fill="#FF5C8D" />
        </svg>
      </div>
    </div>
    <button class="main-btn" @click="goHome">LET'S GO!</button>
    <div class="aux-text">
      Don't have an account? <a href="#" @click.prevent="goAuth">Sing in here</a>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
function goHome() {
  router.push('/home');
}
function goAuth() {
  router.push('/auth');
}
</script>
<style scoped>
.splash-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #2B2342;
}
.status-bar {
  position: absolute;
  top: 24px;
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 0 32px;
  color: #ccc;
  font-size: 14px;
  letter-spacing: 1px;
}
.brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 48px;
}
.brand h1 {
  color: #fff;
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 24px;
  letter-spacing: 2px;
}
.play-btn {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #231b36;
  border-radius: 50%;
  box-shadow: 0 4px 16px rgba(255,92,141,0.12);
  margin-bottom: 32px;
  transition: transform 0.15s;
}
.play-btn:active {
  transform: scale(0.98);
}
.main-btn {
  width: 220px;
  margin-bottom: 18px;
  font-size: 18px;
  font-weight: bold;
  background: #FF5C8D;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(255,92,141,0.18);
}
.aux-text {
  color: #ccc;
  font-size: 15px;
  margin-top: 12px;
}
.aux-text a {
  color: #FF5C8D;
  text-decoration: underline;
  margin-left: 4px;
}
</style>
