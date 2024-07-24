<script setup>
import { useNavbg, navBg } from "@/helpers/navBg";
import OrderIdView from "@/views/orderIdView/OrderIdView.vue";
import { onMounted, ref } from "vue";

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
          <img
            src="@/assets/images/logo.png"
            alt="logo"
            width="92"
            height="75"
          />
        </RouterLink>
        <div class="nav__menu" :class="{ active: menu }">
          <ul class="nav__list">
            <li class="nav__item">
              <RouterLink to="/" class="nav__link">О нас</RouterLink>
            </li>
            <li class="nav__item">
              <RouterLink to="/personal-user" class="nav__link">Личный кабинет</RouterLink>
            </li>
            <li class="nav__item">
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
    <OrderIdView />
  </main>
</template>
