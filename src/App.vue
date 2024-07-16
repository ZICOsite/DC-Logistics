<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "@/components/navbar/Navbar.vue";
import Footer from "@/components/footer/Footer.vue";
import Modal from "@/components/modal/Modal.vue";
import { ref } from "vue";

const modal = ref(false)

setTimeout(() => {
  modal.value = true
}, 10000);

</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
  <Teleport to="#zico">
    <Modal v-if="modal" @click="modal = false">
      <div class="modal__content" @click.stop>
        <span class="modal__content-close" @click="modal = false"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#fff" d="M13.46 12L19 17.54V19h-1.46L12 13.46L6.46 19H5v-1.46L10.54 12L5 6.46V5h1.46L12 10.54L17.54 5H19v1.46z"/></svg></span>
        <h2 class="modal__title">Оставить заявку</h2>
        <p class="modal__txt">
          Наши менеджеры <span class="modal__span">свяжутся с вами!</span>
        </p>
        <form class="modal__form">
          <input
            type="text"
            placeholder="Имя"
            class="modal__form-input"
            required
          />
          <input
            type="text"
            placeholder="Телефон"
            class="modal__form-input"
            required
          />
          <button class="modal__form-btn">Отправить</button>
        </form>
      </div>
    </Modal>
  </Teleport>
</template>
