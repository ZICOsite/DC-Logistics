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
