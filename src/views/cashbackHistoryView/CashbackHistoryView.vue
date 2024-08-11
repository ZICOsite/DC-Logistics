<script setup>
import api from "@/services/api";
import { ref } from "vue";

const cashbacks = ref();

const cashbackHistory = async () => {
  const { data } = await api.cashbackHistory("cashback-history/");
  cashbacks.value = data.results;
};

cashbackHistory();

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleString();
};
</script>

<template>
  <section class="cashbacks">
    <div class="container">
      <h2 class="cashbacks__title">
        {{ cashbacks?.length ? "История кешбэков" : "Истории нет" }}
      </h2>
      <div class="cashbacks__users" v-if="cashbacks?.length">
        <table class="cashbacks__users-table">
          <thead class="cashbacks__users-thead">
            <tr class="cashbacks__users-row">
              <th class="cashbacks__users-cell">№</th>
              <th class="cashbacks__users-cell">Phone number</th>
              <th class="cashbacks__users-cell">Cashback percentage</th>
              <th class="cashbacks__users-cell">Cashback amount</th>
              <th class="cashbacks__users-cell">Created</th>
            </tr>
          </thead>
          <tbody class="cashbacks__users-tbody">
            <tr
              class="cashbacks__users-item"
              v-for="(item, index) in cashbacks"
              :key="item"
            >
              <td class="cashbacks__users-num">{{ index + 1 }}</td>
              <td class="cashbacks__users-phone">
                <a :href="`tel:${item?.p_num}`">{{ item?.p_num }}</a>
              </td>
              <td class="cashbacks__users-amount">{{ item?.cash_back_percentage }}%</td>
              <td class="cashbacks__users-amount">
                {{ item?.cash_back_amount }}
              </td>
              <td class="cashbacks__users-created">{{ formatDate(item?.created_at) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
