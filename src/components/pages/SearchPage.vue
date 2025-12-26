<template>
  <div class="search-page">
    <div class="search-bar">
      <input v-model="query" type="text" placeholder="Search" @keyup.enter="onSearch" />
      <button class="search-btn" @click="onSearch">🔍</button>
    </div>
    <div class="search-tabs">
      <span :class="{active: tab==='Artists'}" @click="tab='Artists'">Artists</span>
      <span :class="{active: tab==='Albums'}" @click="tab='Albums'">Albums</span>
      <span :class="{active: tab==='Tracks'}" @click="tab='Tracks'">Tracks</span>
    </div>
    <div class="search-results">
      <template v-if="results.length">
        <div v-for="item in results" :key="item.id" class="result-item" @click="goPlayer(item.id)">
          <div class="cover"></div>
          <div class="info">
            <div class="title">{{ item.title }}</div>
            <div class="subtitle" v-if="item.subtitle">{{ item.subtitle }}</div>
          </div>
        </div>
      </template>
      <div v-else class="empty-tip">No results</div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const query = ref('');
const tab = ref('Artists');
const results = ref([
  { id: 1, title: 'Lorem ipsum', subtitle: '3 albums' },
  { id: 2, title: 'OneRepublic', subtitle: '2 albums' },
]);
function onSearch() {
  // TODO: 实现搜索逻辑
}
function goPlayer(id) {
  router.push('/player');
}
</script>
<style scoped>
.search-page {
  padding: 24px 16px 80px 16px;
}
.search-bar {
  display: flex;
  align-items: center;
  background: #231b36;
  border-radius: 8px;
  padding: 8px 12px;
  margin-bottom: 16px;
}
.search-bar input {
  flex: 1;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 16px;
  outline: none;
}
.search-btn {
  background: #FF5C8D;
  border: none;
  color: #fff;
  border-radius: 6px;
  padding: 6px 14px;
  margin-left: 8px;
  font-size: 16px;
  cursor: pointer;
}
.search-tabs {
  display: flex;
  gap: 24px;
  margin-bottom: 18px;
  font-size: 16px;
  color: #ccc;
}
.search-tabs .active {
  color: #FF5C8D;
  font-weight: bold;
  border-bottom: 2px solid #FF5C8D;
}
.search-results {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.result-item {
  display: flex;
  align-items: center;
  background: #231b36;
  border-radius: 8px;
  padding: 12px 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
.cover {
  width: 48px;
  height: 48px;
  background: #44405a;
  border-radius: 8px;
  margin-right: 16px;
}
.info .title {
  color: #fff;
  font-size: 16px;
  font-weight: 500;
}
.info .subtitle {
  color: #ccc;
  font-size: 14px;
}
.empty-tip {
  color: #ccc;
  text-align: center;
  margin-top: 32px;
}
</style>
