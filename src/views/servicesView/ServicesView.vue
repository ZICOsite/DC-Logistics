<script setup>
import {
  servicesImg1,
  servicesImg2,
  servicesImg3,
  servicesImg4,
  servicesImg5,
  servicesImg6,
  servicesImg7,
  servicesImg8,
  servicesImg9,
} from "@/helpers/images";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/pagination";

const modules = [Pagination];
const pagination = {
  clickable: true,
};

const breakpoints = {
  375: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  540: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
};

const sildesImages = [
  {
    id: 1,
    title: "Авто перевозка",
    image: servicesImg1,
  },
  {
    id: 2,
    title: "Ж/Д перевозка",
    image: servicesImg2,
  },
  {
    id: 3,
    title: "Авиа перевозка",
    image: servicesImg3,
  },
  {
    id: 4,
    title: "Трал перевозка",
    image: servicesImg4,
  },
  {
    id: 5,
    title: "Опасные грузы",
    image: servicesImg5,
  },
  {
    id: 6,
    title: "Сборные грузы",
    image: servicesImg6,
  },
  {
    id: 7,
    title: "Рефрижераторная",
    image: servicesImg7,
  },
  {
    id: 8,
    title: "Траилер",
    image: servicesImg8,
  },
  {
    id: 9,
    title: "Быстрая почта",
    image: servicesImg9,
  },
];
</script>

<template>
  <section class="services" id="services">
    <div class="container">
      <h2 class="services__title">
        "Discovery Cargo Logistics"<span
          >- имеет следующие виды грузоперевозок</span
        >
      </h2>
      <Swiper
        :modules="modules"
        :pagination="pagination"
        :loop="true"
        :breakpoints="breakpoints"
        class="services__carousel"
      >
        <SwiperSlide v-for="item in sildesImages" :key="item.id">
          <div class="services__slide">
            <img
              :src="item.image"
              :alt="item.title"
              class="services__slide-img"
              loading="lazy"
            />
            <h3 class="services__slide-title">{{ item.title }}</h3>
          </div>
        </SwiperSlide>
      </Swiper>
      <div class="services__desc">
        <div class="services__desc-info">
          <h3 class="services__desc-title">
            Мы работаем исключительно по направлению
          </h3>
          <div class="services__desc-city">
            <img
              width="38"
              height="38"
              src="@/assets/images/services/china.svg"
              alt="China flag"
              class="services__desc-flag"
            />
            <span>Китай</span>
          </div>
          <div class="services__desc-city">
            <img
              width="38"
              height="38"
              src="@/assets/images/services/uzb.png"
              alt="Uzbekistan flag"
              class="services__desc-flag"
            />
            <span>Узбекистан</span>
          </div>
        </div>
        <p class="services__desc-txt">
          В связи с этим, более <b>90%</b> наших партнеров остаются довольными
          нашим сервисом и сроком доставки
        </p>
      </div>
    </div>
  </section>
</template>
