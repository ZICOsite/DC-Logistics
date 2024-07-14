<script setup></script>

<template>
  <section class="company" id="company">
    <div class="container">
      <h2 class="company__title">
        Наша компания предоставляет следующие виды услуг
      </h2>
      <div class="company__content">
        <h3 class="company__content-title">
          «Discovery Cargo Logistics»<br />
          предоставляет свои услуги с 2020 года
        </h3>
        <p class="company__content-number">2020</p>
        <p class="company__content-number">1000</p>
        <h3 class="company__content-title">
          «Discovery Cargo Logistics»<br />
          предоставляет свои услуги с 2020 года
        </h3>
      </div>
    </div>
    <div class="container">
      <div class="company__info">
        <ul class="company__info-list">
          <li class="company__info-item">Логистика</li>
          <li class="company__info-item">Проверка производителей</li>
          <li class="company__info-item">Оформление документов</li>
          <li class="company__info-item">Поиск товара</li>
          <li class="company__info-item">Страхование</li>
        </ul>
        <div class="company__info-images">
          <img
            src="@/assets/images/company/1.jpg"
            alt="company image"
            class="company__info-image"
            loading="lazy"
            height="200"
          />
          <img
            src="@/assets/images/company/2.jpg"
            alt="company image"
            class="company__info-image"
            loading="lazy"
            height="200"
          />
        </div>
      </div>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1498.3845608988681!2d69.33187350245494!3d41.31388598912922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef56db6d581b9%3A0xa8c45499d211bc59!2sDISCOVERY%20CARGO%20LOGISTICS!5e0!3m2!1sru!2sus!4v1720511987186!5m2!1sru!2sus"
      width="100%"
      height="600"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      class="company__map"
    ></iframe>
  </section>
</template>
