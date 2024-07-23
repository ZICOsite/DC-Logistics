<script setup>
import { ref, onMounted } from "vue";
import Modal from "@/components/modal/Modal.vue";
// import axiosClient from "@/lib/axios";
import { useRouter } from "vue-router";
import { useNavbg, navBg } from "@/helpers/navBg";
// import { useAuthStore } from "@/stores/authStores";

const router = useRouter();
// const authStore = useAuthStore();

const menu = ref(false);
const modal = ref(false);

// const getAuthUser = async (event) => {
//   try {
//     const { data } = await axiosClient.post("token/", {
//       p_num: event.target.phone.value,
//       password: event.target.password.value,
//     });

//     authStore.setUser(data.access);

//     modal.value = false;

//     router.push("/kanban");
//   } catch (error) {
//     console.log(error);
//   }
// };

const getAuthUser = () => {
  router.push("/user");
};

onMounted(() => {
  useNavbg(150);
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
              <RouterLink to="/" class="navbar__link" @click="modal = true"
                >Войти</RouterLink
              >
            </li>
          </ul>
        </div>
        <div class="navbar__burger" @click="menu = !menu">
          <span class="navbar__burger-line" :class="{ active: menu }"></span>
        </div>
      </div>
    </nav>
    <Teleport to="#zico">
      <Transition name="modal">
        <Modal v-if="modal" @click="modal = false">
          <div class="modal__content" @click.stop>
            <span class="modal__content-close" @click="modal = false">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M13.46 12L19 17.54V19h-1.46L12 13.46L6.46 19H5v-1.46L10.54 12L5 6.46V5h1.46L12 10.54L17.54 5H19v1.46z"
                />
              </svg>
            </span>
            <h2 class="modal__title">Введите данные</h2>
            <p class="modal__txt">
              Которые были переданы от <span class="modal__span">наших менеджеров</span>
            </p>
            <p class="modal__txt"></p>
            <form class="modal__form" @submit.prevent="getAuthUser">
              <input
                name="phone"
                type="text"
                placeholder="Телефон"
                class="modal__form-input"
                required
              />
              <input
                name="password"
                type="password"
                placeholder="Пароль"
                class="modal__form-input"
                required
              />
              <button class="modal__form-btn">Отправить</button>
            </form>
          </div>
        </Modal>
      </Transition>
    </Teleport>
  </header>
</template>
