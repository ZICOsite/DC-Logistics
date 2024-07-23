<script setup>
import IntroView from "@/views/introView/IntroView.vue";
import AboutView from "@/views/aboutView/AboutView.vue";
import ServicesView from "@/views/servicesView/ServicesView.vue";
import CargoView from "@/views/cargoView/CargoView.vue";
import BenefitsView from "@/views/benefitsView/BenefitsView.vue";
import CompanyView from "@/views/companyView/CompanyView.vue";
import Navbar from "@/components/navbar/Navbar.vue";
import Footer from "@/components/footer/Footer.vue";
</script>

<template>
  <Navbar />
  <main>
    <IntroView />
    <AboutView />
    <ServicesView />
    <CargoView />
    <BenefitsView />
    <CompanyView />
  </main>
  <Footer />
</template>
