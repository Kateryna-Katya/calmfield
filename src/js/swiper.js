import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

// --- GALLERY ---
const gallerySwiper = new Swiper('.gallery-swiper', {
  modules: [Pagination, Autoplay],

  slidesPerView: 1,
  spaceBetween: 16,
  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  pagination: {
    el: '.gallery-pagination',
    clickable: true,
  },
});

// --- EXPERIENCE ---
const experienceSwiper = new Swiper('.experience-swiper', {
  modules: [Autoplay],

  slidesPerView: 1.3,
  spaceBetween: 16,
  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  breakpoints: {
    1440: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});