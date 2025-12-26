<template>
  <div class="top-artist-page">
    <NavTabs showBack pageTitle="ARTISTS" />
    <div class="artist-grid">
      <div v-for="artist in artists" :key="artist.id" class="artist-item" @click="goToArtist(artist.id)">
        <div class="avatar">
          <img :src="artist.avatar" :alt="artist.name" />
        </div>
        <div class="name">{{ artist.name }}</div>
        <div class="genre-tag">{{ artist.genre }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { artists } from '../../data/musicData.js';
import NavTabs from '../common/NavTabs.vue';
const router = useRouter();
function goToArtist(id) {
  router.push(`/artist/${id}`);
}
</script>
<style scoped>
  .top-artist-page {
    padding: 24px 16px 80px 16px;
  }
  .artist-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px 16px;
  }
  .artist-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #231b36;
    border-radius: 22px;
    box-shadow: 0 4px 24px #0002;
    padding: 18px 0 10px 0;
    cursor: pointer;
    transition: transform 0.12s, box-shadow 0.2s;
    min-height: 148px;
  }
  .artist-item:active {
    transform: scale(0.97);
    box-shadow: 0 2px 8px #FF5C8D33;
  }
  .avatar {
    width: 72px;
    height: 72px;
    border-radius: 18px;
    overflow: hidden;
    margin-bottom: 12px;
    background: #222;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 12px #FF5C8D22;
  }
  .avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 18px;
    display: block;
  }
  .name {
    color: #fff;
    font-size: 1.1em;
    font-weight: 700;
    text-align: center;
    margin-top: 8px;
    letter-spacing: 0.01em;
  }
  .genre-tag {
    color: #FFB86C;
    font-size: 0.85em;
    text-align: center;
    margin-top: 4px;
    opacity: 0.8;
  }
</style>
