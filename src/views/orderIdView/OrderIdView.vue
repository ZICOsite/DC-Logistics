<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import api from "@/services/api";

const route = useRoute();
const orderId = ref(null);
const imageUrl = import.meta.env.VITE_API_IMAGE;

const getOrderId = async () => {
  try {
    const { data } = await api.getOrderId(`orders/${route.params.id}`);
    orderId.value = data;
  } catch (error) {
    console.error(error.detail);
  }
};

getOrderId();

const orderStatus = computed(() => {
  const status = {
    pending: "в ожидании",
    in_progress: "в процессе",
    completed: "завершенный",
  };

  return status[route.params.status];
});
</script>

<template>
  <section class="order">
    <div class="container">
      <div class="order__content">
        <img
          :src="imageUrl + orderId?.images[0]"
          alt="order image"
          class="order__content-image"
        />
        <ul class="order__content-list">
          <li class="order__content-item">Название товара: {{ orderId?.name }}</li>
          <li class="order__content-item">Ваш трек номер: {{ orderId?.truck_num }}</li>
          <li class="order__content-item">Вес товара: {{ orderId?.weight }} кг</li>
          <li class="order__content-item">Куб товара: {{ orderId?.cuba }}</li>
          <li class="order__content-item">Цена товара: {{ orderId?.price }} $</li>
          <li class="order__content-item">
            Ваш товар сейчас находится в -
            <b
              v-if="route.params.status == 'completed'"
              :class="{
                'order__content-item_done': route.params.status == 'completed',
              }"
            >
              {{ orderId?.tochka_b }}
            </b>
            <b
              v-else-if="route.params.status == 'in_progress'"
              :class="{
                'order__content-item_done': route.params.status == 'completed',
              }"
            >
              {{ orderId?.country.name }}
            </b>
            <b
              v-else
              :class="{
                'order__content-item_done': route.params.status == 'completed',
              }"
            >
              {{ orderId?.tochka_a }}
            </b>
          </li>
          <li class="order__content-item">
            Статус - <span :class="route.params.status">{{ orderStatus }}</span>
          </li>
          <li class="order__content-item" v-if="route.params.status == 'completed'">
            Дата прибытия: {{ orderId?.done_at }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
