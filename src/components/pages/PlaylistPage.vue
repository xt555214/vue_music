<template>
  <div class="playlist-page">
    <div class="playlist-header">
      <NavTabs showBack pageTitle="PLAYLIST" />
    </div>
    <div class="playlist-list">
      <div v-for="item in playlists" :key="item.id" class="playlist-item" :class="{playing: playingId===item.id}" @click="goPlayer(item)">
        <div class="cover">
          <img :src="item.cover" :alt="item.title" />
        </div>
        <div class="info">
          <div class="title">{{ item.title }}</div>
          <div class="subtitle">{{ item.artist }}</div>
        </div>
        <div class="meta">
          <span class="duration">{{ item.duration }}</span>
          <button class="play-btn" @click.stop="togglePlay(item.id)">
            <span v-if="playingId===item.id">⏸</span>
            <span v-else>▶️</span>
          </button>
        </div>
      </div>
    </div>
    <div class="bottom-player">
      <div class="mini-cover"></div>
      <div class="mini-info">
        <div class="mini-title">{{ currentTitle }}</div>
        <div class="mini-progress"><div class="bar" :style="{width: progress+'%'}"></div></div>
      </div>
      <div class="mini-controls">
        <button class="mini-btn">⏮</button>
        <button class="mini-btn main">⏸</button>
        <button class="mini-btn">⏭</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { playlists as playlistData } from '../../data/musicData.js';
import NavTabs from '../common/NavTabs.vue';
const router = useRouter();
const playlists = playlistData;
const playingId = ref(null);
const progress = ref(40);
const currentTitle = computed(() => {
  const item = playlists.find(i => i.id === playingId.value);
  return item ? item.title : '未播放';
});
function togglePlay(id) {
  playingId.value = playingId.value === id ? null : id;
}
function goPlayer(item) {
  router.push({ path: '/player', query: { cover: item.cover, title: item.title, artist: item.artist } });
}
</script>
<style scoped>
/* 播放列表页美化 */
.playlist-page {
  padding: 0 0 100px 0;
  background: transparent;
}
.playlist-header {
  padding: 18px 16px 0 16px;
}
.playlist-list {
  padding: 0 8px;
}
.playlist-item {
  display: flex;
  align-items: center;
  background: #231b36;
  border-radius: 18px;
  box-shadow: 0 2px 16px #0003;
  margin-bottom: 18px;
  padding: 10px 14px;
  transition: box-shadow 0.2s, transform 0.1s;
  position: relative;
}
.playlist-item.playing {
  box-shadow: 0 4px 32px #FF5C8D33;
  background: linear-gradient(90deg, #FF5C8D22 0%, #231b36 100%);
}
.cover {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: linear-gradient(135deg, #FFB86C 0%, #FF5C8D 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 14px;
  box-shadow: 0 2px 8px #FF5C8D22;
  overflow: hidden;
  flex-shrink: 0;
}
.cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 14px;
}
.info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.title {
  color: #fff;
  font-size: 1.1em;
  font-weight: 700;
  margin-bottom: 2px;
}
.subtitle {
  color: #FFB86C;
  font-size: 0.95em;
  opacity: 0.85;
}
.meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  margin-left: 10px;
}
.duration {
  color: #fff;
  font-size: 0.95em;
  opacity: 0.7;
  margin-bottom: 2px;
}
.play-btn {
  background: linear-gradient(90deg, #FF5C8D 60%, #FFB86C 100%);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  font-size: 1.3em;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px #FF5C8D33;
  cursor: pointer;
  transition: background 0.15s, box-shadow 0.2s;
}
.play-btn:active {
  background: #FF5C8D;
}
.bottom-player {
  position: fixed;
  left: 50%;
  bottom: 16px;
  transform: translateX(-50%);
  width: 340px;
  background: #231b36;
  border-radius: 18px;
  box-shadow: 0 4px 24px #FF5C8D33;
  display: flex;
  align-items: center;
  padding: 10px 18px;
  z-index: 20;
}
.mini-cover {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: linear-gradient(135deg, #FFB86C 0%, #FF5C8D 100%);
  margin-right: 12px;
}
.mini-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.mini-title {
  color: #fff;
  font-size: 1em;
  font-weight: 700;
  margin-bottom: 2px;
}
.mini-progress {
  width: 100%;
  height: 4px;
  background: #3a2e5a;
  border-radius: 2px;
  margin-bottom: 2px;
  overflow: hidden;
}
.bar {
  height: 100%;
  background: linear-gradient(90deg, #FF5C8D 60%, #FFB86C 100%);
  border-radius: 2px;
}
.mini-controls {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: 12px;
}
.mini-btn {
  background: #3a2e5a;
  border: none;
  color: #fff;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 1.1em;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px #FF5C8D22;
  cursor: pointer;
  transition: background 0.15s, box-shadow 0.2s;
}
.mini-btn.main {
  background: linear-gradient(90deg, #FF5C8D 60%, #FFB86C 100%);
  color: #fff;
  font-size: 1.3em;
  width: 40px;
  height: 40px;
  box-shadow: 0 2px 8px #FF5C8D33;
}
.bottom-player {
  position: fixed;
  left: 50%;
  bottom: 16px;
  transform: translateX(-50%);
  width: 340px;
  background: #231b36;
  border-radius: 18px;
  box-shadow: 0 4px 24px #FF5C8D33;
  display: flex;
  align-items: center;
  padding: 10px 18px;
  z-index: 20;
}
.mini-cover {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: linear-gradient(135deg, #FFB86C 0%, #FF5C8D 100%);
  margin-right: 12px;
}
.mini-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.mini-title {
  color: #fff;
  font-size: 1em;
  font-weight: 700;
  margin-bottom: 2px;
}
.mini-progress {
  width: 100%;
  height: 4px;
  background: #3a2e5a;
  border-radius: 2px;
  margin-bottom: 2px;
  overflow: hidden;
}
.bar {
  height: 100%;
  background: linear-gradient(90deg, #FF5C8D 60%, #FFB86C 100%);
  border-radius: 2px;
}
.mini-controls {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: 12px;
}
.mini-btn {
  background: #3a2e5a;
  border: none;
  color: #fff;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 1.1em;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px #FF5C8D22;
  cursor: pointer;
  transition: background 0.15s, box-shadow 0.2s;
}
.mini-btn.main {
  background: linear-gradient(90deg, #FF5C8D 60%, #FFB86C 100%);
  color: #fff;
  font-size: 1.3em;
  width: 40px;
  height: 40px;
  box-shadow: 0 2px 8px #FF5C8D33;
}
</style>
