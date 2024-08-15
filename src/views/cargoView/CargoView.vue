<script setup>
import api from "@/services/api";
import { ref } from "vue";

const cargo = ref(null);
const image = import.meta.env.VITE_API_IMAGE;

const getCargo = async () => {
  try {
    const { data } = await api.getCargo("mainpage");
    cargo.value = data.results;
  } catch (error) {
    console.error(error.detail);
  }
};

getCargo();
</script>

<template>
  <section class="cargo">
    <div class="container">
      <h2 class="cargo__title">Наши успешное грузоперевозки</h2>
      <div class="cargo__cards">
        <div class="cargo__card" v-for="item in cargo" :key="item?.id">
          <img :src="image + item?.image" :alt="item?.title" class="cargo__card-image" />
          <h3 class="cargo__card-title">{{ item?.title }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>
