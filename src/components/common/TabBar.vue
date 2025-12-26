<template>
  <div class="tab-bar">
    <div class="tab-item" :class="{active: route.path.startsWith('/home') || route.path === '/'}" @click="go('/home')">
      <div class="icon-wrapper">
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9 22V12H15V22" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <span class="tab-label">首页</span>
    </div>
    <div class="tab-item" :class="{active: route.path.startsWith('/player')}" @click="go('/player')">
      <div class="icon-wrapper">
        <svg class="icon icon-play" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#fff" stroke-width="2" fill="none"/>
          <polygon points="10,8 16,12 10,16" fill="#fff"/>
        </svg>
      </div>
      <span class="tab-label">播放</span>
    </div>
    <div class="tab-item" :class="{active: route.path.startsWith('/my')}" @click="go('/my')">
      <div class="icon-wrapper">
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="12" cy="7" r="4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <span class="tab-label">我的</span>
    </div>
  </div>
</template>
<script setup>
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
function go(path) {
  if (route.path !== path) router.push(path);
}
</script>
<style scoped>
.tab-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 70px;
  background: #231b36;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 -2px 16px rgba(0,0,0,0.3);
  z-index: 1000;
  padding: 8px 12px 12px 12px;
  padding-bottom: calc(12px + env(safe-area-inset-bottom, 0));
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}
.tab-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  flex: 1;
  padding: 10px 16px;
  border-radius: 12px;
  margin: 0 4px;
  background: transparent;
}
.tab-item.active {
  color: #fff;
  background: linear-gradient(90deg, #FF5C8D 0%, #FFB86C 100%);
}
.icon-wrapper {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
}
.icon {
  width: 24px;
  height: 24px;
  stroke: #fff;
  fill: none;
}
.icon-play {
  stroke: #fff;
}
.icon-play polygon {
  fill: #fff;
}
.tab-item.active .icon {
  stroke: #fff;
}
.tab-item.active .icon-play polygon {
  fill: #fff;
}
.tab-item:active {
  transform: scale(0.95);
}
.tab-label {
  font-size: 12px;
  font-weight: 500;
  color: #fff;
}
.tab-item.active .tab-label {
  font-weight: 600;
  color: #fff;
}
</style>
