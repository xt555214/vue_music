<template>
  <div class="home-page">
    <!-- 今日推送 -->
    <div class="section-header">
      <h2 class="main-section-title">今日推送</h2>
    </div>
    <div class="featured-section">
      <div 
        v-for="item in todayRecommendations" 
        :key="item.id" 
        class="featured-card"
        @click="goToItem(item)"
      >
        <div class="featured-cover">
          <img :src="item.cover" :alt="item.title" />
          <div class="play-overlay">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="16" fill="rgba(0,0,0,0.5)" />
              <polygon points="12,10 22,16 12,22" fill="#FF5C8D" />
            </svg>
          </div>
        </div>
        <div class="featured-info">
          <div class="featured-title">{{ item.title }}</div>
          <div class="featured-subtitle">{{ item.subtitle }}</div>
        </div>
      </div>
    </div>

    <!-- 最近常听的歌手 -->
    <div class="section-header">
      <h3 class="section-title">最近常听</h3>
      <span class="more-link" @click="goToArtists">更多 →</span>
    </div>
    <div class="artists-horizontal">
      <div 
        v-for="artist in recentArtists" 
        :key="artist.id" 
        class="artist-mini-card"
        @click="goToArtist(artist.id)"
      >
        <div class="artist-mini-avatar">
          <img :src="artist.avatar" :alt="artist.name" />
        </div>
        <div class="artist-mini-name">{{ artist.name }}</div>
      </div>
    </div>

    <!-- 最近常听的专辑 -->
    <div class="section-header">
      <h3 class="section-title">最近常听</h3>
      <span class="more-link" @click="goToAlbums">更多 →</span>
    </div>
    <div class="albums-horizontal">
      <div 
        v-for="album in recentAlbums" 
        :key="album.id" 
        class="album-mini-card"
        @click="goToAlbum(album)"
      >
        <div class="album-mini-cover">
          <img :src="album.cover" :alt="album.title" />
        </div>
        <div class="album-mini-title">{{ album.title }}</div>
      </div>
    </div>

    <!-- 分类标签栏 -->
    <NavTabs />
    
    <!-- 内容区域 -->
    <div v-if="route.path==='/home' && (tab === 'Genres' || !route.query.tab)" class="genres-list">
      <div v-for="genre in genres" :key="genre.name" class="genre-card" @click="goToGenre(genre)">
        <div class="genre-cover">
          <img :src="genre.cover" :alt="genre.name" />
          <div class="play-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="12" fill="rgba(0,0,0,0.4)" />
              <polygon points="9,7 17,12 9,17" fill="#FF5C8D" />
            </svg>
          </div>
        </div>
        <div class="genre-title">{{ genre.name }}</div>
        <div class="genre-preview">{{ genre.preview }}</div>
      </div>
    </div>
    <div v-else-if="route.path==='/home' && (tab === 'Songs' || route.query.tab === 'Songs')" class="songs-list">
      <div v-for="song in songs" :key="song.id" class="song-item" @click="goToPlayer(song)">
        <div class="song-cover">
          <img :src="song.cover" :alt="song.title" />
        </div>
        <div class="song-info">
          <div class="song-title">{{ song.title }}</div>
          <div class="song-artist">{{ song.artist }}</div>
        </div>
        <div class="song-duration">{{ song.duration }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { songs as songsData, genres as genresData, artists, playlists } from '../../data/musicData.js';
import NavTabs from '../common/NavTabs.vue';
const router = useRouter();
const route = useRoute();
const tabMap = {
  Songs: '/home',
  Playlists: '/playlist',
  Albums: '/albums',
  Artists: '/artists',
  Genres: '/home', // 当前页
};
const tab = ref(route.query.tab || 'Genres');
const songs = songsData;
const genres = genresData;

// 监听路由变化，更新tab状态
watch(() => route.query.tab, (newTab) => {
  if (route.path === '/home') {
    tab.value = newTab || 'Genres';
  }
});

watch(() => route.path, (newPath) => {
  if (newPath === '/home') {
    tab.value = route.query.tab || 'Genres';
  }
});

// 今日推送（选择一些推荐的歌曲/专辑）
const todayRecommendations = computed(() => [
  {
    id: 1,
    type: 'song',
    title: songs[0].title,
    subtitle: songs[0].artist,
    cover: songs[0].cover
  },
  {
    id: 2,
    type: 'playlist',
    title: playlists[0].title,
    subtitle: playlists[0].artist,
    cover: playlists[0].cover
  },
  {
    id: 3,
    type: 'song',
    title: songs[5].title,
    subtitle: songs[5].artist,
    cover: songs[5].cover
  }
]);

// 最近常听的歌手（选择中间几个）
const recentArtists = computed(() => artists.slice(4, 8));

// 最近常听的专辑（选择中间几个）
const recentAlbums = computed(() => playlists.slice(4, 8).map(playlist => ({
  id: playlist.id,
  title: playlist.title,
  cover: playlist.cover,
  artist: playlist.artist
})));

function goTab(tabName) {
  tab.value = tabName;
  if (tabName === 'Genres') {
    router.push('/home');
  } else if (tabName === 'Songs') {
    router.push({ path: '/home', query: { tab: 'Songs' } });
  } else if (tabMap[tabName] && route.path !== tabMap[tabName]) {
    router.push(tabMap[tabName]);
  }
}
function goToPlayer(song) {
  router.push({ path: '/player', query: { cover: song.cover, title: song.title, artist: song.artist } });
}
function goToGenre(genre) {
  tab.value = 'Songs';
}
function goToArtist(artistId) {
  router.push(`/artist/${artistId}`);
}
function goToAlbum(album) {
  router.push({ path: '/player', query: { cover: album.cover, title: album.title, artist: album.artist } });
}
function goToArtists() {
  router.push('/artists');
}
function goToAlbums() {
  router.push('/albums');
}
function goToItem(item) {
  if (item.type === 'song') {
    const song = songs.find(s => s.title === item.title);
    if (song) {
      goToPlayer(song);
    }
  } else {
    goToAlbum({ cover: item.cover, title: item.title, artist: item.subtitle });
  }
}
</script>

<style scoped>
.home-page {
  padding: 24px 16px 80px 16px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  margin-top: 24px;
}

.section-header:first-of-type {
  margin-top: 0;
}

.main-section-title {
  color: #fff;
  font-size: 22px;
  font-weight: 700;
  margin: 0;
}

.section-title {
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  margin: 0;
}

.more-link {
  color: #FFB86C;
  font-size: 14px;
  cursor: pointer;
  transition: color 0.2s;
}

.more-link:active {
  color: #FF5C8D;
}

/* 今日推送 */
.featured-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
}

.featured-card {
  background: #231b36;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.featured-card:active {
  transform: scale(0.98);
  box-shadow: 0 4px 16px rgba(255, 92, 141, 0.2);
}

.featured-cover {
  width: 100%;
  height: 180px;
  position: relative;
  overflow: hidden;
}

.featured-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.featured-card:active .featured-cover img {
  transform: scale(1.05);
}

.play-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.featured-card:active .play-overlay {
  opacity: 1;
}

.featured-info {
  padding: 16px;
}

.featured-title {
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
}

.featured-subtitle {
  color: #FFB86C;
  font-size: 14px;
  opacity: 0.85;
}

/* 最近常听的歌手横向滚动 */
.artists-horizontal {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 8px;
  margin-bottom: 24px;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 92, 141, 0.3) transparent;
}

.artists-horizontal::-webkit-scrollbar {
  height: 4px;
}

.artists-horizontal::-webkit-scrollbar-thumb {
  background: rgba(255, 92, 141, 0.3);
  border-radius: 2px;
}

.artist-mini-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
  cursor: pointer;
  transition: transform 0.2s;
}

.artist-mini-card:active {
  transform: scale(0.95);
}

.artist-mini-avatar {
  width: 80px;
  height: 80px;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.artist-mini-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.artist-mini-name {
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  max-width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 最近常听的专辑横向滚动 */
.albums-horizontal {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 8px;
  margin-bottom: 24px;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 92, 141, 0.3) transparent;
}

.albums-horizontal::-webkit-scrollbar {
  height: 4px;
}

.albums-horizontal::-webkit-scrollbar-thumb {
  background: rgba(255, 92, 141, 0.3);
  border-radius: 2px;
}

.album-mini-card {
  display: flex;
  flex-direction: column;
  min-width: 120px;
  cursor: pointer;
  transition: transform 0.2s;
}

.album-mini-card:active {
  transform: scale(0.95);
}

.album-mini-cover {
  width: 120px;
  height: 120px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.album-mini-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.album-mini-title {
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.genres-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
.genre-card {
  background: #231b36;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 12px 16px 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
}
.genre-card:active {
  transform: scale(0.98);
  box-shadow: 0 4px 16px rgba(255, 92, 141, 0.2);
}
.genre-cover {
  width: 100%;
  height: 120px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 12px;
  position: relative;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}
.genre-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.genre-card:active .genre-cover img {
  transform: scale(1.05);
}
.play-icon {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
  transition: opacity 0.2s ease;
}
.genre-card:active .play-icon {
  opacity: 1;
}
.genre-title {
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 4px;
}
.genre-preview {
  color: #ccc;
  font-size: 14px;
}
.tab-placeholder {
  color: #ccc;
  text-align: center;
  margin-top: 48px;
  font-size: 18px;
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
.song-artist {
  color: #FFB86C;
  font-size: 14px;
  opacity: 0.85;
}
.song-duration {
  color: #999;
  font-size: 14px;
  margin-left: 12px;
}
</style>
