<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from '@/components/navbar/Navbar.vue'
import Footer from '@/components/footer/Footer.vue'
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer/>
</template>
