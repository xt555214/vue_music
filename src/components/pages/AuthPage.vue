<template>
  <div class="auth-page">
    <div class="auth-container">
      <div class="logo-section">
        <div class="logo-icon">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="32" fill="url(#gradient)"/>
            <polygon points="24,20 44,32 24,44" fill="#fff"/>
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="64" y2="64">
                <stop offset="0%" stop-color="#FF5C8D"/>
                <stop offset="100%" stop-color="#FFB86C"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h1 class="app-title">音乐播放器</h1>
        <p class="app-subtitle">欢迎回来</p>
      </div>
      
      <form class="login-form" @submit.prevent="handleLogin">
        <div class="input-group">
          <label class="input-label">账号</label>
          <input 
            v-model="username" 
            type="text" 
            placeholder="请输入账号" 
            class="input-field"
            :class="{ error: showError }"
            @focus="showError = false"
          />
        </div>
        
        <div class="input-group">
          <label class="input-label">密码</label>
          <input 
            v-model="password" 
            type="password" 
            placeholder="请输入密码" 
            class="input-field"
            :class="{ error: showError }"
            @focus="showError = false"
            @keyup.enter="handleLogin"
          />
        </div>
        
        <div v-if="showError" class="error-message">
          账号或密码错误，请输入 123
        </div>
        
        <button type="submit" class="login-btn">
          登录
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const password = ref('');
const showError = ref(false);

function handleLogin() {
  // 账号和密码都是123即可登录
  if (username.value === '123' && password.value === '123') {
    showError.value = false;
    // 登录成功，跳转到主页
    router.push('/home');
  } else {
    showError.value = true;
  }
}
</script>

<style scoped>
.auth-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #2B2342 0%, #3a2e5a 100%);
  padding: 20px;
}

.auth-container {
  width: 100%;
  max-width: 400px;
  background: #231b36;
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  padding: 48px 32px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.logo-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.logo-icon {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
}

.app-title {
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  margin: 0;
  letter-spacing: 0.5px;
}

.app-subtitle {
  color: #FFB86C;
  font-size: 16px;
  margin: 0;
  opacity: 0.9;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input-label {
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  margin-left: 4px;
}

.input-field {
  width: 100%;
  background: #2B2342;
  border: 2px solid #44405a;
  border-radius: 12px;
  color: #fff;
  font-size: 16px;
  padding: 14px 16px;
  outline: none;
  transition: all 0.2s ease;
  box-sizing: border-box;
}

.input-field::placeholder {
  color: #999;
}

.input-field:focus {
  border-color: #FF5C8D;
  box-shadow: 0 0 0 3px rgba(255, 92, 141, 0.1);
}

.input-field.error {
  border-color: #FF5C8D;
  background: rgba(255, 92, 141, 0.05);
}

.error-message {
  color: #FF5C8D;
  font-size: 14px;
  text-align: center;
  padding: 8px;
  background: rgba(255, 92, 141, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(255, 92, 141, 0.2);
}

.login-btn {
  width: 100%;
  background: linear-gradient(90deg, #FF5C8D 0%, #FFB86C 100%);
  color: #fff;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 600;
  padding: 16px;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(255, 92, 141, 0.3);
  transition: all 0.2s ease;
  margin-top: 8px;
}

.login-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 92, 141, 0.4);
}

.login-btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(255, 92, 141, 0.3);
}

@media (max-width: 480px) {
  .auth-container {
    padding: 32px 24px;
  }
  
  .app-title {
    font-size: 24px;
  }
}
</style>
