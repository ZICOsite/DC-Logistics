<script setup>
import api from "@/services/api";
import { computed, ref } from "vue";
import { toast } from "vue3-toastify";

const currentYear = computed(() => new Date().getFullYear());

const setUser = async (event) => {
  try {
    await toast.promise(
      api.applications(
        "applications/",
        event.target.userName.value,
        event.target.userPhone.value
      ),
      {
        pending: "Запрос отправляется",
        success: "Ваш запрос отправлено",
        error: "Запрос отклонен",
      }
    );
  } catch (error) {
    console.error(error.detail);
  }

  event.target.userName.value = "";
  event.target.userPhone.value = "";
};
</script>

<template>
  <footer class="footer" id="footer">
    <div class="container">
      <h2 class="footer__title">Оставить заявку</h2>
      <p class="footer__txt">
        Наши менеджеры <span class="footer__span">свяжутся с вами!</span>
      </p>
      <form class="footer__form" @submit.prevent="setUser">
        <input
          type="text"
          placeholder="Ф.И.О"
          class="footer__form-input"
          name="userName"
          required
        />
        <input
          type="text"
          placeholder="Телефон"
          class="footer__form-input"
          name="userPhone"
          required
        />
        <button class="footer__form-btn">Отправить</button>
      </form>
      <div class="footer__bottom">
        <div class="footer__bottom-connection">
          <h3 class="footer__bottom-title">Discovery Cargo Logistics</h3>
          <a
            href="mailto:discovery.cargo.logistics@gmail.com"
            class="footer__bottom-email"
          >
            <img src="@/assets/images/footer/gmail.svg" alt="" />
            discovery.cargo.logistics@gmail.com
          </a>
          <a href="tel:+998998250038" class="footer__bottom-tel">+998 99 825 00 38 </a>
          <a href="tel:+998909390066" class="footer__bottom-tel"> +998 90 939 00 66 </a>
        </div>
        <ul class="footer__bottom-socials">
          <li class="footer__bottom-item">
            <a
              target="_blank"
              href="https://www.instagram.com/dc_logistics_uz/"
              class="footer__bottom-link"
            >
              <img
                src="@/assets/images/footer/instagram.svg"
                width="40"
                height="40"
                alt="instagram"
              />
            </a>
          </li>
          <li class="footer__bottom-item">
            <a target="_blank" href="https://t.me/Slam825" class="footer__bottom-link">
              <img
                src="@/assets/images/footer/telegram.svg"
                width="40"
                height="40"
                alt="telegram"
              />
            </a>
          </li>
          <li class="footer__bottom-item">
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100095502104206"
              class="footer__bottom-link"
            >
              <img
                src="@/assets/images/footer/facebook.svg"
                width="40"
                height="40"
                alt="facebook"
              />
            </a>
          </li>
        </ul>
      </div>
      <p class="footer__copyright">&copy; {{ currentYear }}. Все права защищены.</p>
    </div>
  </footer>
</template>
