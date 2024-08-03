<script setup>
import api from "@/services/api";
import { ref } from "vue";

const kanban = ref(null);
const count = ref(null);

const getOrders = async () => {
  try {
    const { data } = await api.getOrders("orders/");
    const orders = Object.groupBy(data?.results, ({ status }) => status);
    count.value = data.count;
    kanban.value = orders;
  } catch (error) {
    console.error(error);
  }
};

getOrders();
</script>

<template>
  <section class="orders">
    <div class="container">
      <h2 class="orders__title">
        {{ count ? "Статус заказов" : "Заказов нет" }}
      </h2>
      <div class="orders__content" v-if="count">
        <div class="orders__content-cards">
          <div :class="['orders__content-card', { pending: kanban?.pending }]">
            <h3 class="orders__content-title">✔ В ожидании</h3>
            <ul class="orders__content-list">
              <li
                v-for="item in kanban?.pending"
                :key="item.id"
                class="orders__content-item"
                title="Трек номер"
              >
                <RouterLink
                  :to="`order/${item.id}-${item.status}`"
                  class="orders__content-link"
                  >{{ item.truck_num }}</RouterLink
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="orders__content-cards">
          <div :class="['orders__content-card', { progress: kanban?.in_progress }]">
            <h3 class="orders__content-title">✔ В процессе</h3>
            <ul class="orders__content-list">
              <li
                v-for="item in kanban?.in_progress"
                :key="item.id"
                class="orders__content-item"
                title="Трек номер"
              >
                <RouterLink
                  :to="`order/${item.id}-${item.status}`"
                  class="orders__content-link"
                  >{{ item.truck_num }}</RouterLink
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="orders__content-cards">
          <div :class="['orders__content-card', { done: kanban?.completed }]">
            <h3 class="orders__content-title">✔ Завершенный</h3>
            <ul class="orders__content-list">
              <li
                v-for="item in kanban?.completed"
                :key="item.id"
                class="orders__content-item"
                title="Трек номер"
              >
                <RouterLink
                  :to="`order/${item.id}-${item.status}`"
                  class="orders__content-link"
                  >{{ item.truck_num }}</RouterLink
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
