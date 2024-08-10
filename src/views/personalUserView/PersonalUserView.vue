<script setup>
import { accrued, approved, paid } from "@/helpers/images";
import api from "@/services/api";
import { useAuthStore } from "@/stores/authStore";
import { ref } from "vue";

const user = ref(null);

const getUser = async () => {
  try {
    const { data } = await api.getUser("users/user_me/");
    user.value = data.user;
  } catch (error) {
    console.error(error.detail);
  }
};

getUser();
</script>

<template>
  <section class="personal-user">
    <div class="personal-user__container">
      <div class="personal-user__content">
        <h2 class="personal-user__content-title">Ваш кешбэк</h2>
        <div class="personal-user__info">
          <p class="personal-user__info-txt">Ваше имя: {{ user?.first_name }}</p>
          <p class="personal-user__info-txt">Ваше фамилия: {{ user?.last_name }}</p>
          <p class="personal-user__info-txt">Ваш телефон: {{ user?.p_num }}</p>
        </div>
        <div class="personal-user__content-cards">
          <div class="personal-user__card">
            <img :src="accrued" alt="accrued icon" class="personal-user__card-icon" />
            <p class="personal-user__card-txt">
              НАЧИСЛЕНО: {{ user?.cash_back?.total_cash_back || 0 }} $
            </p>
          </div>
          <div class="personal-user__card">
            <img :src="paid" alt="paid icon" class="personal-user__card-icon" />
            <p class="personal-user__card-txt">
              ОПЛАЧЕНО: {{ user?.cash_back?.received_cash_back || 0 }} $
            </p>
          </div>
          <div class="personal-user__card">
            <img :src="approved" alt="approved icon" class="personal-user__card-icon" />
            <p class="personal-user__card-txt">
              ОДОБРЕНО: {{ user?.cash_back?.available_cash_back || 0 }} $
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
