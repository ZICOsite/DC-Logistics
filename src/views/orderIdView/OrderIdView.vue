<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const orderStatus = computed(() => {
  const status = {
    pending: "в ожидании",
    progress: "в процессе",
    done: "завершенный",
  };

  return status[route.params.status];
});
</script>

<template>
  <section class="order">
    <div class="container">
      <div class="order__content">
        <img
          src="https://img.freepik.com/premium-vector/global-logistic-delivery-online-service-mobile-transportation-air-freight-logistics-online-order-airplane-warehouse-parcel-box-3d-perspective-vector-illustration_473922-76.jpg"
          alt="order image"
          class="order__content-image"
        />
        <ul class="order__content-list">
          <li class="order__content-item">Название товара: Тест</li>
          <li class="order__content-item">Ваш трек номер: 25130</li>
          <li class="order__content-item">Вес товара: 25130 кг</li>
          <li class="order__content-item">Куб товара: 25130</li>
          <li class="order__content-item">Цена товара: 25130 $</li>
          <li class="order__content-item">
            Ваш товар сейчас находится в -
            <b
              :class="{
                'order__content-item_done': route.params.status == 'done',
              }"
              >{{ route.params.status == "done" ? "Tashkent" : "YIWU" }}</b>
          </li>
          <li class="order__content-item">
            Статус - <span :class="route.params.status">{{ orderStatus }}</span>
          </li>
          <li class="order__content-item" v-if="route.params.status == 'done'">
            Дата прибытия: {{ new Date().toLocaleDateString() }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
