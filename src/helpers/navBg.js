import { ref } from "vue";

export const navBg = ref(false);

export const useNavbg = (coordinate = 50) => {
  window.addEventListener("scroll", (e) => {
    if (window.scrollY > coordinate) navBg.value = true;
    else navBg.value = false;
  });
};
