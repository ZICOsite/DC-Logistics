<script setup>
import { benefitsImg1, benefitsImg2, benefitsImg3 } from "@/helpers/images";

const benefits = [
  {
    id: 1,
    title: "Соблюдаем сроки",
    text: "мы гарантируем своим партнерам перевозки в сроки оговоренные в договоре, в противном случае мы оплачиваем пеню в размере 1%.",
    image: benefitsImg1,
  },
  {
    id: 1,
    title: "Безопасность",
    text: "мы берем полную ответственность за груз наших партнеров, после того как товар приезжает на склад, либо с момента забора груза.",
    image: benefitsImg2,
  },
  {
    id: 1,
    title: "Оптимальные цены",
    text: "мы предлагаем конкурентоспособные цены, не жертвуя качеством и надежностью.",
    image: benefitsImg3,
  },
];
</script>

<template>
  <section class="benefits">
    <h2 class="benefits__title">Наши основные приемущества</h2>
    <div class="benefits__cards">
      <div class="benefits__card" v-for="item in benefits" :key="item.id">
        <img
          :src="item.image"
          :alt="item.title"
          class="benefits__card-icon"
          loading="lazy"
          width="80"
          height="80"
        />
        <p class="benefits__card-txt">
          <strong>{{ item.title }}</strong> - {{ item.text }}
        </p>
      </div>
    </div>
  </section>
</template>
