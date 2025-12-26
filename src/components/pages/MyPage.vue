<template>
  <div class="my-page">
    <!-- 个人信息区域 -->
    <div class="user-info-section">
      <div class="user-card">
        <div class="user-avatar">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="24" fill="url(#avatarGradient)"/>
            <path d="M24 12C20.69 12 18 14.69 18 18C18 21.31 20.69 24 24 24C27.31 24 30 21.31 30 18C30 14.69 27.31 12 24 12Z" fill="#fff"/>
            <path d="M16 32C16 28.69 19.31 26 24 26C28.69 26 32 28.69 32 32V36H16V32Z" fill="#fff"/>
            <defs>
              <linearGradient id="avatarGradient" x1="0" y1="0" x2="48" y2="48">
                <stop offset="0%" stop-color="#FF5C8D"/>
                <stop offset="100%" stop-color="#FFB86C"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="user-details">
          <div class="user-name">用户 123</div>
          <div class="user-id">账号ID: 123456</div>
        </div>
      </div>
      
      <!-- 听歌时长统计 -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon">⏱️</div>
          <div class="stat-info">
            <div class="stat-label">今日听歌</div>
            <div class="stat-value">{{ todayListenTime }}</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">👥</div>
          <div class="stat-info">
            <div class="stat-label">好友平均</div>
            <div class="stat-value">{{ friendsAvgTime }}</div>
          </div>
        </div>
      </div>
      
      <!-- 常听歌手 -->
      <div class="section-header">
        <h3 class="section-title">常听歌手</h3>
        <span class="more-link" @click="goToArtists">更多 →</span>
      </div>
      <div class="artists-horizontal">
        <div 
          v-for="artist in favoriteArtists" 
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
      
      <!-- 常听专辑 -->
      <div class="section-header">
        <h3 class="section-title">常听专辑</h3>
        <span class="more-link" @click="goToAlbums">更多 →</span>
      </div>
      <div class="albums-horizontal">
        <div 
          v-for="album in favoriteAlbums" 
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
      
      <!-- 留言墙 -->
      <div class="section-header">
        <h3 class="section-title">留言墙</h3>
      </div>
      <div class="message-wall">
        <div 
          v-for="message in messages" 
          :key="message.id" 
          class="message-item"
        >
          <div class="message-avatar">
            <span class="avatar-emoji">{{ message.avatar }}</span>
          </div>
          <div class="message-content">
            <div class="message-header">
              <span class="message-username">{{ message.username }}</span>
              <span class="message-time">{{ message.time }}</span>
            </div>
            <div class="message-text">{{ message.content }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { artists, playlists } from '../../data/musicData.js';

const router = useRouter();

// 今日听歌时长（分钟）
const todayListenTime = computed(() => {
  const minutes = 142; // 示例数据
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hours > 0) {
    return `${hours}小时${mins}分钟`;
  }
  return `${mins}分钟`;
});

// 好友平均听歌时长
const friendsAvgTime = computed(() => {
  const minutes = 98; // 示例数据
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hours > 0) {
    return `${hours}小时${mins}分钟`;
  }
  return `${mins}分钟`;
});

// 常听歌手（选择前4个）
const favoriteArtists = computed(() => artists.slice(0, 4));

// 常听专辑（使用播放列表作为专辑，选择前4个）
const favoriteAlbums = computed(() => playlists.slice(0, 4).map(playlist => ({
  id: playlist.id,
  title: playlist.title,
  cover: playlist.cover,
  artist: playlist.artist
})));

// 留言墙数据
const messages = computed(() => [
  { id: 1, username: '音乐伙伴', avatar: '🎵', content: '今天一起听歌吧！发现了一首超好听的歌！', time: '1小时前' },
  { id: 2, username: '听歌达人', avatar: '🎧', content: '你的歌单太棒了，已经收藏了好多首！', time: '3小时前' },
  { id: 3, username: '旋律控', avatar: '🎶', content: '推荐你听听这首，感觉你会喜欢的！', time: '5小时前' },
  { id: 4, username: '音乐分享', avatar: '📢', content: '今天听歌时长超过你了，哈哈！', time: '8小时前' },
  { id: 5, username: '节奏爱好者', avatar: '🥁', content: '这首歌的节奏太棒了，忍不住分享给你！', time: '12小时前' },
  { id: 6, username: '深夜听歌', avatar: '🌙', content: '深夜听歌的感觉真好，你也试试！', time: '1天前' }
]);

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
</script>

<style scoped>
.my-page {
  padding: 24px 16px 80px 16px;
}

/* 个人信息区域 */
.user-info-section {
  margin-bottom: 24px;
}

.user-card {
  background: linear-gradient(135deg, #FF5C8D 0%, #FFB86C 100%);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
  box-shadow: 0 4px 16px rgba(255, 92, 141, 0.3);
}

.user-avatar {
  width: 56px;
  height: 56px;
  flex-shrink: 0;
}

.user-details {
  flex: 1;
}

.user-name {
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 4px;
}

.user-id {
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
}

/* 听歌时长统计 */
.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 24px;
}

.stat-card {
  background: #231b36;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
}

.stat-card:active {
  transform: scale(0.98);
}

.stat-icon {
  font-size: 32px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(255, 92, 141, 0.2) 0%, rgba(255, 184, 108, 0.2) 100%);
  border-radius: 12px;
  flex-shrink: 0;
}

.stat-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-label {
  color: #999;
  font-size: 12px;
}

.stat-value {
  color: #fff;
  font-size: 18px;
  font-weight: 700;
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

/* 常听歌手横向滚动 */
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

/* 常听专辑横向滚动 */
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

/* 留言墙 */
.message-wall {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.message-item {
  background: #231b36;
  border-radius: 12px;
  padding: 12px;
  display: flex;
  gap: 12px;
  transition: all 0.2s ease;
}

.message-item:active {
  transform: scale(0.98);
  background: rgba(35, 27, 54, 0.8);
}

.message-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #FF5C8D 0%, #FFB86C 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 20px;
}

.avatar-emoji {
  display: block;
}

.message-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.message-header {
  display: flex;
  align-items: center;
  gap: 8px;
}

.message-username {
  color: #fff;
  font-size: 14px;
  font-weight: 600;
}

.message-time {
  color: #999;
  font-size: 12px;
}

.message-text {
  color: #ccc;
  font-size: 14px;
  line-height: 1.5;
  word-break: break-word;
}
</style>
