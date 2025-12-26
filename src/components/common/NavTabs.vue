<template>
  <div class="nav-tabs-wrapper">
    <div class="top-bar" v-if="showBack">
      <button class="back-btn" @click="goBack">←</button>
      <span class="page-title">{{ pageTitle }}</span>
    </div>
    <div class="top-tabs">
      <span 
        :class="{active: isActive('Songs')}" 
        @click="goToTab('Songs')"
      >Songs</span>
      <span 
        :class="{active: isActive('Playlists')}" 
        @click="goToTab('Playlists')"
      >Playlists</span>
      <span 
        :class="{active: isActive('Albums')}" 
        @click="goToTab('Albums')"
      >Albums</span>
      <span 
        :class="{active: isActive('Artists')}" 
        @click="goToTab('Artists')"
      >Artists</span>
      <span 
        :class="{active: isActive('Genres')}" 
        @click="goToTab('Genres')"
      >Genres</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const props = defineProps({
  showBack: {
    type: Boolean,
    default: false
  },
  pageTitle: {
    type: String,
    default: ''
  }
});

const router = useRouter();
const route = useRoute();

const tabMap = {
  Songs: '/home',
  Playlists: '/playlist',
  Albums: '/albums',
  Artists: '/artists',
  Genres: '/home'
};

function isActive(tabName) {
  if (tabName === 'Genres') {
    return route.path === '/home' && !route.query.tab;
  }
  if (tabName === 'Songs') {
    return route.path === '/home' && route.query.tab === 'Songs';
  }
  return route.path === tabMap[tabName];
}

function goToTab(tabName) {
  if (tabName === 'Genres') {
    router.push('/home');
  } else if (tabName === 'Songs') {
    router.push({ path: '/home', query: { tab: 'Songs' } });
  } else {
    router.push(tabMap[tabName]);
  }
}

function goBack() {
  router.back();
}
</script>

<style scoped>
.nav-tabs-wrapper {
  margin-bottom: 24px;
}

.top-bar {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.back-btn {
  background: #231b36;
  border: none;
  color: #fff;
  font-size: 1.3em;
  border-radius: 10px;
  padding: 6px 16px;
  margin-right: 12px;
  box-shadow: 0 2px 8px #FF5C8D22;
  cursor: pointer;
  transition: background 0.15s;
}

.back-btn:active {
  background: #3a2e5a;
}

.page-title {
  color: #fff;
  font-size: 1.1em;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.top-tabs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #231b36;
  border-radius: 8px;
  padding: 8px 0;
  font-size: 16px;
  color: #ccc;
}

.top-tabs span {
  flex: 1;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 4px 0;
  border-radius: 6px;
}

.top-tabs span.active {
  color: #FF5C8D;
  font-weight: bold;
  background: rgba(255, 92, 141, 0.15);
}

.top-tabs span:active {
  transform: scale(0.95);
}
</style>

