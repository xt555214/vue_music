import { createRouter, createWebHashHistory } from 'vue-router';
import SplashPage from './components/pages/SplashPage.vue';
import AuthPage from './components/pages/AuthPage.vue';
import HomePage from './components/pages/HomePage.vue';
import PlaylistPage from './components/pages/PlaylistPage.vue';
import AlbumsPage from './components/pages/AlbumsPage.vue';
import TopArtistPage from './components/pages/TopArtistPage.vue';
import ArtistDetailPage from './components/pages/ArtistDetailPage.vue';
import MyPage from './components/pages/MyPage.vue';
import EqualiserPage from './components/pages/EqualiserPage.vue';
import PlayerPage from './components/pages/PlayerPage.vue';
import RadioPage from './components/pages/RadioPage.vue';
import SearchPage from './components/pages/SearchPage.vue';

const routes = [
  { path: '/', component: SplashPage },
  { path: '/auth', component: AuthPage },
  { path: '/home', component: HomePage },
  { path: '/playlist', component: PlaylistPage },
  { path: '/albums', component: AlbumsPage },
  { path: '/artists', component: TopArtistPage },
  { path: '/artist/:id', component: ArtistDetailPage },
  { path: '/my', component: MyPage },
  { path: '/equaliser', component: EqualiserPage },
  { path: '/player', component: PlayerPage },
  { path: '/radio', component: RadioPage },
  { path: '/search', component: SearchPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
