<script setup>
import api from "@/services/api";
import { useAuthStore } from "@/stores/authStore";
import { toast } from "vue3-toastify";

const authStore = useAuthStore();

const getUsers = async () => {
  try {
    const { data } = await api.getUsers("users/");
    authStore.getUsers(data.results);
  } catch (error) {
    console.error(error.detail);
  }
};

getUsers();

const calcPersentage = async (event) => {
  try {
    await toast.promise(
      api.calcCashback(
        "cashbacks/calculate_cash_back/",
        event.target.percentage.dataset.id,
        event.target.percentage.value
      ),
      {
        pending: "Кешбэк отправляется",
        success: "Кешбэк отправлен",
        error: "Запрос отклонен",
      }
    );
  } catch (error) {
    console.error(error.detail);
  }

  event.target.percentage.value = "";
};
</script>

<template>
  <section class="admin">
    <div class="container">
      <h2 class="admin__title">
        {{ authStore.users?.length ? "Пользователи" : "Нету пользователей" }}
      </h2>
      <div class="admin__users" v-if="authStore.users?.length">
        <table class="admin__users-table">
          <thead class="admin__users-thead">
            <tr class="admin__users-row">
              <th class="admin__users-cell">№</th>
              <th class="admin__users-cell">Name</th>
              <th class="admin__users-cell">Phone number</th>
              <th class="admin__users-cell">Order prices</th>
              <th class="admin__users-cell">Calculated</th>
              <th class="admin__users-cell">Cashback percentage</th>
            </tr>
          </thead>
          <tbody class="admin__users-tbody">
            <tr
              class="admin__users-item"
              v-for="(user, index) in authStore.users"
              :key="user.id"
            >
              <td class="admin__users-num">{{ index + 1 }}</td>
              <td class="admin__users-name">
                {{ user.first_name }} {{ user.last_name }}
              </td>
              <td class="admin__users-phone">
                <a :href="`tel:${user.p_num}`">{{ user.p_num }}</a>
              </td>
              <td class="admin__users-price">
                {{ authStore.getTotalOrdersUserById(user.id) }} $
              </td>
              <td class="admin__users-calculated">
                {{
                  user.persentage
                    ? authStore.getTotalOrdersUserById(user.id) -
                      (authStore.getTotalOrdersUserById(user.id) / 100) * user.persentage
                    : 0
                }}
                $
              </td>
              <td>
                <form
                  action=""
                  @submit.prevent="calcPersentage"
                  class="admin__users-form"
                >
                  <input
                    type="number"
                    class="admin__users-percent"
                    placeholder="Cashback"
                    name="percentage"
                    :data-id="user.id"
                  />
                  <button class="admin__users-send">Confirm</button>
                </form>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
