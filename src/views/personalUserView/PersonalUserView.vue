<script setup>
import { accrued, approved, interest, paid } from "@/helpers/images";
</script>

<template>
  <section class="personal-user">
    <div class="personal-user__container">
      <div class="personal-user__content">
        <h2 class="personal-user__content-title">Ваш кешбэк</h2>
        <div class="personal-user__info">
          <p class="personal-user__info-txt">Ваше имя: Тест</p>
          <p class="personal-user__info-txt">Ваше фамилия: Тестов</p>
          <p class="personal-user__info-txt">Ваш телефон: +998971234567</p>
        </div>
        <div class="personal-user__content-cards">
          <div class="personal-user__card">
            <img :src="accrued" alt="accrued icon" class="personal-user__card-icon" />
            <p class="personal-user__card-txt">НАЧИСЛЕНО: 25.20</p>
          </div>
          <div class="personal-user__card">
            <img :src="paid" alt="paid icon" class="personal-user__card-icon" />
            <p class="personal-user__card-txt">ОПЛАЧЕНО: 25.20</p>
          </div>
          <div class="personal-user__card">
            <img :src="approved" alt="approved icon" class="personal-user__card-icon" />
            <p class="personal-user__card-txt">ОДОБРЕНО: 25.20</p>
          </div>
          <div class="personal-user__card">
            <img :src="interest" alt="interest icon" class="personal-user__card-icon" />
            <p class="personal-user__card-txt">ПРОЦЕНТЫ: 5%</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
