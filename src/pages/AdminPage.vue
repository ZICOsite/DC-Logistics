<script setup>
import { useAuthStore } from "@/stores/authStore";
import { useNavbg, navBg } from "@/helpers/navBg";
import AdminView from "@/views/adminView/AdminView.vue";
import { onMounted, ref } from "vue";
const authStore = useAuthStore();

const menu = ref(false);

onMounted(() => {
  useNavbg();
});
</script>

<template>
  <header class="header">
    <nav class="nav" :class="{ active: navBg }">
      <div class="container">
        <RouterLink to="/" class="nav__logo">
          <img src="@/assets/images/logo.png" alt="logo" width="92" height="75" />
        </RouterLink>
        <div class="nav__menu" :class="{ active: menu }">
          <ul class="nav__list">
            <li class="nav__item">
              <RouterLink to="/admin" class="nav__link">Пользователи</RouterLink>
            </li>
            <li class="nav__item">
              <RouterLink to="/cashback-history" class="nav__link"
                >История кешбэков</RouterLink
              >
            </li>
            <li class="nav__item" @click="authStore.logout()">
              <RouterLink to="/" class="nav__link">Выйти</RouterLink>
            </li>
          </ul>
        </div>
        <div class="nav__burger" @click="menu = !menu">
          <span class="nav__burger-line" :class="{ active: menu }"></span>
        </div>
      </div>
    </nav>
  </header>
  <main>
    <AdminView />
  </main>
</template>
