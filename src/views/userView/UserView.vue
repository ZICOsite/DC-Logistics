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
  <section class="user">
    <div class="container">
      <h2 class="user__title">Статус заказов</h2>
      <div class="user__content">
        <div class="user__content-cards">
          <div :class="['user__content-card', { pending }]">
            <h3 class="user__content-title">✔ В ожидании</h3>
            <ul class="user__content-list">
              <li
                v-for="item in pending"
                :key="item.id"
                class="user__content-item"
              >
                {{ item.truckNum }}
              </li>
            </ul>
          </div>
        </div>
        <div class="user__content-cards">
          <div :class="['user__content-card', { progress }]">
            <h3 class="user__content-title">✔ В процессе</h3>
            <ul class="user__content-list">
              <li
                v-for="item in progress"
                :key="item.id"
                class="user__content-item"
              >
                {{ item.truckNum }}
              </li>
            </ul>
          </div>
        </div>
        <div class="user__content-cards">
          <div :class="['user__content-card', { done }]">
            <h3 class="user__content-title">✔ Завершенный</h3>
            <ul class="user__content-list">
              <li
                v-for="item in done"
                :key="item.id"
                class="user__content-item"
              >
                {{ item.truckNum }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
