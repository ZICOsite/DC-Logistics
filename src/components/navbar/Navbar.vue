<script setup>
import { ref, onMounted } from "vue";

const menu = ref(false);
const navBg = ref(false);

onMounted(() => {
  window.addEventListener("scroll", (e) => {
    // console.log(window.scrollY);
    if (window.scrollY > 150) navBg.value = true;
    else navBg.value = false;
  });
});
</script>

<template>
  <header class="header">
    <nav class="navbar" :class="{ active: navBg }">
      <div class="container">
        <RouterLink to="/" class="navbar__logo">
          <img
            src="@/assets/images/logo.png"
            alt="logo"
            width="92"
            height="75"
          />
        </RouterLink>
        <div class="navbar__truckCode">
          <input
            type="text"
            placeholder="Введите трек номер"
            class="navbar__truckCode-input"
          />
          <img
            src="@/assets/images/navbar/search.svg"
            alt="truck code"
            width="25"
            height="23"
          />
        </div>
        <div class="navbar__menu" :class="{ active: menu }">
          <ul class="navbar__list">
            <li class="navbar__item">
              <a href="#about" class="navbar__link">О нас</a>
            </li>
            <li class="navbar__item">
              <a href="#footer" class="navbar__link">Наши Контакты</a>
            </li>
            <li class="navbar__item">
              <RouterLink to="/" class="navbar__link">Войти</RouterLink>
            </li>
          </ul>
        </div>
        <div class="navbar__burger" @click="menu = !menu">
          <span class="navbar__burger-line" :class="{ active: menu }"></span>
        </div>
      </div>
    </nav>
  </header>
</template>
