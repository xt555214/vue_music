<template>
  <div class="artist-detail-page">
    <div class="artist-header">
      <button class="back-btn" @click="$router.back()">←</button>
      <div class="artist-info">
        <div class="artist-avatar">
          <img :src="artist.avatar" :alt="artist.name" />
        </div>
        <div class="artist-details">
          <h1 class="artist-name">{{ artist.name }}</h1>
          <p class="artist-description">{{ artist.description }}</p>
          <div class="artist-stats">
            <span class="stat-item">{{ artist.followers }} 粉丝</span>
            <span class="stat-item">{{ artistSongs.length }} 首歌曲</span>
            <span class="stat-item">{{ artist.genre }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 艺术家介绍 -->
    <div class="bio-section">
      <h2 class="section-title">关于 {{ artist.name }}</h2>
      <div class="bio-content">
        <p>{{ artist.bio }}</p>
      </div>
    </div>
    
    <div class="songs-section">
      <h2 class="section-title">歌曲</h2>
      <div class="songs-list">
        <div 
          v-for="song in artistSongs" 
          :key="song.id" 
          class="song-item" 
          @click="goToPlayer(song)"
        >
          <div class="song-cover">
            <img :src="song.cover" :alt="song.title" />
          </div>
          <div class="song-info">
            <div class="song-title">{{ song.title }}</div>
            <div class="song-meta">{{ song.duration }} · {{ song.genre }}</div>
          </div>
          <button class="play-icon-btn" @click.stop="goToPlayer(song)">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#FF5C8D" stroke-width="2" fill="none"/>
              <polygon points="10,8 16,12 10,16" fill="#FF5C8D"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { artists, songs } from '../../data/musicData.js';

const router = useRouter();
const route = useRoute();

const artistId = computed(() => parseInt(route.params.id));
const artist = computed(() => artists.find(a => a.id === artistId.value) || artists[0]);
const artistSongs = computed(() => songs.filter(s => s.artistId === artistId.value));

function goToPlayer(song) {
  router.push({ 
    path: '/player', 
    query: { 
      cover: song.cover, 
      title: song.title, 
      artist: song.artist 
    } 
  });
}
</script>

<style scoped>
.artist-detail-page {
  padding: 0 0 100px 0;
  background: transparent;
  min-height: 100vh;
}

.artist-header {
  padding: 20px 16px 24px 16px;
  background: linear-gradient(180deg, rgba(35, 27, 54, 0.95) 0%, transparent 100%);
}

.back-btn {
  background: #231b36;
  border: none;
  color: #fff;
  font-size: 1.5em;
  border-radius: 12px;
  padding: 8px 18px;
  margin-bottom: 20px;
  cursor: pointer;
  box-shadow: 0 2px 12px #FF5C8D22;
  transition: background 0.15s;
}

.back-btn:active {
  background: #3a2e5a;
}

.artist-info {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.artist-avatar {
  width: 120px;
  height: 120px;
  border-radius: 24px;
  overflow: hidden;
  flex-shrink: 0;
  box-shadow: 0 4px 24px rgba(255, 92, 141, 0.3);
}

.artist-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.artist-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.artist-name {
  color: #fff;
  font-size: 1.8em;
  font-weight: 700;
  margin: 0 0 8px 0;
  letter-spacing: 0.02em;
}

.artist-description {
  color: #FFB86C;
  font-size: 1em;
  margin: 0 0 16px 0;
  opacity: 0.9;
}

.artist-stats {
  display: flex;
  gap: 16px;
}

.stat-item {
  color: #ccc;
  font-size: 0.9em;
  padding: 6px 12px;
  background: rgba(255, 92, 141, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(255, 92, 141, 0.2);
}

.bio-section {
  padding: 24px 16px;
  margin-bottom: 8px;
}

.bio-content {
  background: #231b36;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.bio-content p {
  color: #ccc;
  font-size: 15px;
  line-height: 1.8;
  margin: 0;
  text-align: justify;
}

.songs-section {
  padding: 0 16px;
}

.section-title {
  color: #fff;
  font-size: 1.3em;
  font-weight: 700;
  margin: 0 0 20px 0;
  padding-left: 4px;
}

.songs-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.song-item {
  display: flex;
  align-items: center;
  background: #231b36;
  border-radius: 16px;
  padding: 12px 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.song-item:active {
  transform: scale(0.98);
  box-shadow: 0 4px 16px rgba(255, 92, 141, 0.2);
}

.song-cover {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  overflow: hidden;
  margin-right: 16px;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.song-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.song-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.song-title {
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
}

.song-meta {
  color: #999;
  font-size: 13px;
}

.play-icon-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
}

.play-icon-btn:active {
  transform: scale(0.9);
}
</style>



