<template>
  <div class="player-page">
    <div class="top-bar">
      <button class="back-btn shadow" @click="goBack">←</button>
      <span class="top-title">播放器</span>
    </div>
    <div class="cover-outer center">
      <div class="cover-inner">
        <img v-if="coverImg" :src="coverImg" alt="cover" />
        <svg v-else width="120" height="120" viewBox="0 0 120 120">
          <rect x="0" y="0" width="120" height="120" rx="24" fill="#3a2e5a" />
          <polygon points="48,40 88,60 48,80" fill="#FF5C8D" />
        </svg>
      </div>
    </div>
    <div class="song-info">
      <div class="song-title">{{ songTitle }}</div>
      <div class="song-artist">{{ songArtist }}</div>
    </div>
    <div class="lyrics-box center">
      <div class="lyrics-scroll">
        <span v-for="(line, idx) in lyrics" :key="idx" :class="{active: idx===currentLine}">{{ line }}</span>
      </div>
    </div>
    <div class="controls center">
      <button class="ctrl-btn circle" @click="prev">⏮</button>
      <button class="ctrl-btn main circle" @click="togglePlay">
        <span v-if="playing">⏸</span>
        <span v-else>▶️</span>
      </button>
      <button class="ctrl-btn circle" @click="next">⏭</button>
    </div>
    <div class="progress-bar">
      <input type="range" min="0" :max="lyrics.length-1" v-model="currentLine" />
      <div class="time-info">
        <span>{{ formatTime(currentLine*5) }}</span>
        <span>{{ formatTime(lyrics.length*5) }}</span>
      </div>
    </div>
    
    <!-- 评论区 -->
    <div class="comments-section">
      <div class="comments-header">
        <h3 class="comments-title">评论 ({{ songComments.length }})</h3>
      </div>
      <div class="comments-list">
        <div 
          v-for="comment in songComments" 
          :key="comment.id" 
          class="comment-item"
        >
          <div class="comment-avatar">
            <span class="avatar-icon">{{ comment.avatar }}</span>
          </div>
          <div class="comment-content">
            <div class="comment-header">
              <span class="comment-username">{{ comment.username }}</span>
              <span class="comment-time">{{ comment.time }}</span>
            </div>
            <div class="comment-text">{{ comment.content }}</div>
            <div class="comment-actions">
              <button class="like-btn" @click="toggleLike(comment.id)">
                <span v-if="likedComments.has(comment.id)">❤️</span>
                <span v-else>🤍</span>
                <span class="like-count">{{ comment.likes + (likedComments.has(comment.id) ? 1 : 0) }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { songs } from '../../data/musicData.js';
import { getRandomComments } from '../../data/commentsData.js';

const router = useRouter();
const route = useRoute();
const playing = ref(true);
const currentLine = ref(0);
const likedComments = ref(new Set());

const defaultCover = '/photo/erik-mclean-QzpgqElvSiA-unsplash.jpg';
const coverImg = computed(() => route.query.cover || defaultCover);
const songTitle = computed(() => route.query.title || 'Lorem ipsum dolor');
const songArtist = computed(() => route.query.artist || 'Lorem ipsum');

// 根据歌曲标题找到对应的歌曲ID，用于获取评论
const currentSong = computed(() => {
  return songs.find(s => s.title === songTitle.value) || songs[0];
});

// 获取当前歌曲的评论
const songComments = computed(() => {
  const songId = currentSong.value?.id || 1;
  return getRandomComments(songId);
});

const lyrics = [
  'Lorem ipsum dolor sit amet,',
  'consectetur adipiscing elit,',
  'sed do eiusmod tempor incididunt',
  'ut labore et dolore magna aliqua.',
  'Ut enim ad minim veniam,',
  'quis nostrud exercitation ullamco laboris',
  'nisi ut aliquip ex ea commodo consequat.'
];

function togglePlay() { playing.value = !playing.value; }
function prev() { if(currentLine.value>0) currentLine.value--; }
function next() { if(currentLine.value<lyrics.length-1) currentLine.value++; }
function formatTime(sec) {
  const m = Math.floor(sec/60).toString().padStart(2,'0');
  const s = (sec%60).toString().padStart(2,'0');
  return `${m}:${s}`;
}
function goBack() {
  router.back();
}
function toggleLike(commentId) {
  if (likedComments.value.has(commentId)) {
    likedComments.value.delete(commentId);
  } else {
    likedComments.value.add(commentId);
  }
}
</script>
<style scoped>

.player-page {
  padding: 32px 16px 90px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: transparent;
}
.top-bar {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  justify-content: flex-start;
}
.back-btn {
  background: #231b36;
  border: none;
  color: #fff;
  font-size: 1.5em;
  margin-right: 16px;
  cursor: pointer;
  border-radius: 12px;
  padding: 8px 18px;
  box-shadow: 0 2px 12px #FF5C8D22;
  transition: background 0.15s, box-shadow 0.2s;
}
.back-btn:active {
  background: #3a2e5a;
}
.top-title {
  color: #fff;
  font-size: 1.2em;
  font-weight: 600;
  letter-spacing: 0.04em;
}
.cover-outer {
  width: 160px;
  height: 160px;
  border-radius: 32px;
  background: linear-gradient(135deg, #FFB86C 0%, #FF5C8D 100%);
  box-shadow: 0 4px 32px #FF5C8D33;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cover-inner {
  width: 130px;
  height: 130px;
  border-radius: 24px;
  background: #3a2e5a;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 12px #0002;
  overflow: hidden;
}
.cover-inner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
  display: block;
}
.song-info {
  text-align: center;
  margin-bottom: 18px;
}
.song-title {
  color: #fff;
  font-size: 1.5em;
  font-weight: 700;
  margin-bottom: 4px;
  letter-spacing: 0.02em;
}
.song-artist {
  color: #FFB86C;
  font-size: 1em;
  font-weight: 500;
  opacity: 0.85;
}
.lyrics-box {
  width: 100%;
  max-width: 320px;
  height: 54px;
  background: #231b36;
  border-radius: 14px;
  margin-bottom: 28px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 12px #0002;
}
.lyrics-scroll {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 24px;
  overflow-x: auto;
  padding: 0 8px;
  scrollbar-width: none;
}
.lyrics-scroll::-webkit-scrollbar {
  display: none;
}
.lyrics-scroll span {
  color: #fff;
  font-size: 1em;
  opacity: 0.7;
  white-space: nowrap;
  transition: color 0.2s, font-size 0.2s, opacity 0.2s;
}
.lyrics-scroll .active {
  color: #FF5C8D;
  font-weight: bold;
  font-size: 1.15em;
  opacity: 1;
}
.controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-bottom: 24px;
}
.ctrl-btn {
  background: #231b36;
  border: none;
  color: #fff;
  font-size: 2em;
  cursor: pointer;
  box-shadow: 0 2px 8px #FF5C8D22;
  transition: background 0.15s, box-shadow 0.2s, color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ctrl-btn.circle {
  border-radius: 50%;
  width: 56px;
  height: 56px;
}
.ctrl-btn.main {
  background: linear-gradient(90deg, #FF5C8D 60%, #FFB86C 100%);
  color: #fff;
  font-size: 2.2em;
  width: 72px;
  height: 72px;
  box-shadow: 0 4px 16px #FF5C8D33;
}
.ctrl-btn:active {
  background: #3a2e5a;
  color: #FFB86C;
}
.progress-bar {
  width: 100%;
  max-width: 320px;
  margin-top: 8px;
  margin-bottom: 0;
}
.progress-bar input[type="range"] {
  width: 100%;
  accent-color: #FF5C8D;
  height: 6px;
  border-radius: 4px;
  background: #3a2e5a;
  margin-bottom: 0;
}
.time-info {
  display: flex;
  justify-content: space-between;
  color: #ccc;
  font-size: 1em;
  margin-top: 4px;
  font-variant-numeric: tabular-nums;
}

/* 评论区 */
.comments-section {
  width: 100%;
  max-width: 320px;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.comments-header {
  margin-bottom: 20px;
}

.comments-title {
  color: #fff;
  font-size: 1.2em;
  font-weight: 700;
  margin: 0;
}

.comments-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 400px;
  overflow-y: auto;
  padding-right: 8px;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 92, 141, 0.3) transparent;
}

.comments-list::-webkit-scrollbar {
  width: 4px;
}

.comments-list::-webkit-scrollbar-thumb {
  background: rgba(255, 92, 141, 0.3);
  border-radius: 2px;
}

.comment-item {
  display: flex;
  gap: 12px;
  background: #231b36;
  border-radius: 12px;
  padding: 12px;
  transition: all 0.2s ease;
}

.comment-item:hover {
  background: rgba(35, 27, 54, 0.8);
}

.comment-avatar {
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

.avatar-icon {
  display: block;
}

.comment-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.comment-header {
  display: flex;
  align-items: center;
  gap: 8px;
}

.comment-username {
  color: #fff;
  font-size: 14px;
  font-weight: 600;
}

.comment-time {
  color: #999;
  font-size: 12px;
}

.comment-text {
  color: #ccc;
  font-size: 14px;
  line-height: 1.5;
  word-break: break-word;
}

.comment-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.like-btn {
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 8px;
  transition: background 0.2s;
  font-size: 14px;
}

.like-btn:active {
  background: rgba(255, 92, 141, 0.1);
}

.like-count {
  color: #999;
  font-size: 12px;
}
</style>
