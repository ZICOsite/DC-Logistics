<script setup>
const kanban = [
  {
    id: 1,
    truckNum: 123,
    status: "pending",
  },
  {
    id: 2,
    truckNum: 123,
    status: "pending",
  },
  {
    id: 3,
    truckNum: 1234,
    status: "progress",
  },
  {
    id: 4,
    truckNum: 1234,
    status: "progress",
  },
  {
    id: 5,
    truckNum: 1234,
    status: "progress",
  },
  {
    id: 6,
    truckNum: 12345,
    status: "done",
  },
  {
    id: 7,
    truckNum: 12345,
    status: "done",
  },
  {
    id: 8,
    truckNum: 12345,
    status: "done",
  },
  {
    id: 9,
    truckNum: 12345,
    status: "done",
  },
];

const { pending, progress, done } = Object.groupBy(
  kanban,
  ({ status }) => status
);
</script>

<template>
  <section class="orders">
    <div class="container">
      <h2 class="orders__title">Статус заказов</h2>
      <div class="orders__content">
        <div class="orders__content-cards">
          <div :class="['orders__content-card', { pending }]">
            <h3 class="orders__content-title">✔ В ожидании</h3>
            <ul class="orders__content-list">
              <li
                v-for="item in pending"
                :key="item.id"
                class="orders__content-item"
              >
                <RouterLink :to="`order/${item.id}-${item.status}`" class="orders__content-link">{{ item.truckNum }}</RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="orders__content-cards">
          <div :class="['orders__content-card', { progress }]">
            <h3 class="orders__content-title">✔ В процессе</h3>
            <ul class="orders__content-list">
              <li
                v-for="item in progress"
                :key="item.id"
                class="orders__content-item"
              >
                <RouterLink :to="`order/${item.id}-${item.status}`" class="orders__content-link">{{ item.truckNum }}</RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="orders__content-cards">
          <div :class="['orders__content-card', { done }]">
            <h3 class="orders__content-title">✔ Завершенный</h3>
            <ul class="orders__content-list">
              <li
                v-for="item in done"
                :key="item.id"
                class="orders__content-item"
              >
                <RouterLink :to="`order/${item.id}-${item.status}`" class="orders__content-link">{{ item.truckNum }}</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
