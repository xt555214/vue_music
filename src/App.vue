<template>
  <div class="mobile-shell">
    <div class="app-root">
      <div class="content-wrapper">
      <router-view />
      </div>
      <TabBar />
    </div>
  </div>
</template>

<script setup>
import TabBar from './components/common/TabBar.vue';
</script>

<style>
@import './style.css';
.mobile-shell {
  width: 375px;
  height: 812px;
  margin: 32px auto;
  border-radius: 32px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.25);
  overflow: hidden;
  background: #2B2342;
  position: relative;
  display: flex;
  flex-direction: column;
}
body {
  background: #18132a;
}
.app-root {
  min-height: 100vh;
  background: #2B2342;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}
.content-wrapper {
  flex: 1;
  overflow-y: auto;
  padding-bottom: 70px;
}
</style>
