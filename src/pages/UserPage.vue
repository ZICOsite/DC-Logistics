<script setup>
// import axios from "axios";
// import useAxios from "@/lib/hooks/useAxios";
// import { useAuthStore } from "@/stores/authStores";
// import useAxiosAuth from "@/lib/hooks/useAxiosAuth";
import { useNavbg, navBg } from "@/helpers/navBg";
import UserView from "@/views/userView/UserView.vue";
import { onMounted, ref } from "vue";

// const authStore = useAuthStore();
// const axiosAuth = useAxiosAuth();
// console.log(axiosAuth());

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
              <RouterLink to="/" class="nav__link">Личный кабинет</RouterLink>
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
    <UserView />
  </main>
</template>

<style lang="scss" scoped>
.nav {
  padding: 8px 0;
  position: relative;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.3);
  transition: 0.4s;

  &.active {
    background: #292929;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }

  &__logo {
    flex-shrink: 0;
    img {
      mix-blend-mode: plus-lighter;
    }
  }

  &__menu {
    @media (width <= 768px) {
      position: absolute;
      width: 100%;
      top: 90px;
      left: 0;
      background: #292929;
      height: 20dvh;
      min-height: 150px;
      display: grid;
      place-items: center;
      transform-origin: top;
      transform: scaleY(0);
      transition: 0.4s;

      &.active {
        transform: scaleY(1);
      }
    }
  }

  &__list {
    display: flex;
    gap: 16px;

    @media (width <= 768px) {
      flex-direction: column;
      align-items: center;
    }
  }

  &__link {
    color: #fff;
  }

  &__burger {
    display: none;

    @media (width <= 768px) {
      width: 35px;
      height: 35px;
      position: relative;
      z-index: 100;
      display: flex;
      align-items: center;

      &-line {
        position: relative;
        height: 2px;
        width: 100%;
        background: #fff;
        transition: 0.4s;

        &.active {
          background: transparent;

          &::before {
            top: 0;
            transform: rotate(45deg);
          }

          &::after {
            top: 0;
            transform: rotate(-45deg);
          }
        }

        &::before,
        &::after {
          content: "";
          position: absolute;
          left: 0;
          background: #fff;
          width: 100%;
          height: 100%;
          transition: 0.4s;
        }

        &::before {
          top: -8px;
        }

        &::after {
          top: 8px;
        }
      }
    }
  }
}
</style>
