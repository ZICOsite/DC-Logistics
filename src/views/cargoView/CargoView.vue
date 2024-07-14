<script setup>
import {
  cargoImg1,
  cargoImg2,
  cargoImg3,
  cargoImg4,
  cargoImg5,
  cargoImg6,
} from "../../helpers/images";

const cards = [
    {
        id: 1,
        title: "Спец техника",
        image: cargoImg1
    },
    {
        id: 2,
        title: "Опасные грузы",
        image: cargoImg2
    },
    {
        id: 3,
        title: "Сельхоз техника",
        image: cargoImg3
    },
    {
        id: 4,
        title: "Габаритные грузы",
        image: cargoImg4
    },
    {
        id: 5,
        title: "Оборудования",
        image: cargoImg5
    },
    {
        id: 6,
        title: "Аттракционы",
        image: cargoImg6
    },
]

</script>

<template>
  <section class="cargo">
    <div class="container">
      <h2 class="cargo__title">Наши успешное грузоперевозки</h2>
      <div class="cargo__cards">
        <div class="cargo__card" v-for="item in cards" :key="item.id">
            <img :src="item.image" :alt="item.title" class="cargo__card-image">
            <h3 class="cargo__card-title">{{ item.title }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>
