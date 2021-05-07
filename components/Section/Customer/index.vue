<template>
  <div class="customer  py-10 pl-6 pr-10 grid grid-cols-3 mx-auto items-center row-start-1 md:pl-24 lg:grid-cols-5 lg:px-0 lg:max-w-tablet lg:justify-start 1360:max-w-1300 2xl:max-w-1500">
      <div class="mt-6 ml-5 " v-for="(item, index) in customer" :key="index">
       <nuxt-link :to="item.link" class="w-16" >
          <img :src="item.src" :alt="item.alt" class="cursor-pointer w-28" />
       </nuxt-link>
      </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: { VueSlickCarousel },
  data() {
    return{
      customer:[]
    }
  },
    async fetch() {
    this.customer = await fetch("http://localhost:3000/customer").then((res) =>
      res.json()
    );
  },
  props: {
    settings: {
      type: Object,
      require: true,
      default() {
        return {
          dots: false,
          dotsClass: "slick-dots custom-dot-class",
          edgeFriction: 0.35,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
        };
      },
    },
  },
};
</script>

<style>
</style>