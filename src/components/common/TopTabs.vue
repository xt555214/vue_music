<template>
  <div class="top-tabs">
    <span :class="{active: activeTab==='Songs'}">Songs</span>
    <span :class="{active: activeTab==='Playlists'}">Playlists</span>
    <span :class="{active: activeTab==='Albums'}">Albums</span>
    <span :class="{active: activeTab==='Artists'}">Artists</span>
    <span :class="{active: activeTab==='Genres'}">Genres</span>
  </div>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  activeTab: String
});
</script>
<style scoped>
.top-tabs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #231b36;
  border-radius: 8px;
  margin-bottom: 24px;
  padding: 8px 0;
}
</style>
