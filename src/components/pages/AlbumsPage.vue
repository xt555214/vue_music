<template>
  <div class="albums-page">
    <div class="bg-blur" v-if="albums.length > 0">
      <img :src="albums[0].img" alt="bg" />
      <div class="bg-mask"></div>
    </div>
    <div class="albums-content">
      <NavTabs showBack pageTitle="ALBUMS" />
      <div class="album-grid">
        <div v-for="(item, idx) in albums" :key="item.id" class="album-item" @click="goPlayer(item)">
          <div class="cover">
            <img :src="item.img" alt="album cover" />
          </div>
          <div class="title">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { playlists } from '../../data/musicData.js';
import NavTabs from '../common/NavTabs.vue';
const router = useRouter();
const albums = playlists.map(playlist => ({
  id: playlist.id,
  title: playlist.title,
  img: playlist.cover,
  artist: playlist.artist
}));
function goPlayer(item) {
  router.push({ path: '/player', query: { cover: item.img, title: item.title, artist: item.artist } });
}
</script>
<style scoped>
.albums-page {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

.albums-content {
  position: relative;
  z-index: 2;
  padding: 24px 16px 80px 16px;
}
.bg-blur {
  position: absolute;
  left: 0; top: 0; right: 0; bottom: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.bg-blur img {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  filter: blur(32px) brightness(0.5) saturate(1.2);
  transform: scale(1.1);
}
.bg-mask {
  position: absolute;
  left: 0; top: 0; right: 0; bottom: 0;
  background: linear-gradient(180deg, #2B2342cc 60%, #2B2342ee 100%);
  z-index: 1;
}
.album-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px 16px;
}
.album-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(35,27,54,0.85);
  border-radius: 22px;
  box-shadow: 0 4px 24px #0004;
  padding: 18px 0 10px 0;
  cursor: pointer;
  transition: transform 0.12s, box-shadow 0.2s, background 0.2s;
  min-height: 110px;
  backdrop-filter: blur(2px);
}
.album-item:active {
  transform: scale(0.97);
  box-shadow: 0 2px 8px #FF5C8D33;
  background: rgba(35,27,54,0.95);
}
.cover {
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
.cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 18px;
  display: block;
}
.title {
  color: #fff;
  font-size: 1.1em;
  font-weight: 700;
  text-align: center;
  margin-top: 8px;
  letter-spacing: 0.01em;
  text-shadow: 0 2px 8px #0008;
}
</style>
