<template>
  <div class="hero px-10 lg:max-w-tablet lg:px-0 lg:mx-auto 1360:max-w-1300 2xl:max-w-1500">
    <Header />
  <div class="hero md:flex md:items-center md:justify-between md:mt-14">
     <div class="heading md:w-5/12 lg:w-6/12">
      <div
      class="mt-10"
      v-for="(head, index) in heading"
      :key="index"
      v-show="head.type === 'text'"
    >
      <h2
        class="text-34 leading-l-30 tracking-a font-bold text-black-01 text-center  md:text-left md:text-42 md:leading-l-40 lg:text-80 lg:leading-l-77"
      >
        {{ head.title }}
      </h2>
      <p class="text-16 leading-l-22 mt-4 text-center  md:text-left md:text-18 md:leading-l-22 lg:text-20 lg:leading-l-30 lg:w-10/12">
        {{ head.description }}
      </p>
    </div>
    <div class="flex mt-10 justify-center md:justify-start">
      <button
        class="bg-blue text-white font-bold text-14 leading-l-14 tracking-c rounded-10 px-04 py-01 hover:bg-orange duration-500 ease-in-out mr-4 md:text-16"
        v-for="(item, index) in button"
        :key="index"
        v-show="item.backgoundColor ==='orange'"
      >
        {{ item.text }}
      </button>
      <div class="img ml-4 relative cursor-pointer focus:outline-none">
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="hover:opacity-0 duration-500 ease-in-out focus:outline-none"
        >
          <path
            d="M59.5 30C59.5 46.2924 46.2924 59.5 30 59.5C13.7076 59.5 0.5 46.2924 0.5 30C0.5 13.7076 13.7076 0.5 30 0.5C46.2924 0.5 59.5 13.7076 59.5 30Z"
            fill="white"
            stroke="#E7E7E7"
          />
          <path
            d="M30 18.75V41.25"
            stroke="#19191B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.5 30.75L30 41.25L40.5 30.75"
            stroke="#19191B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="opacity-0 hover:opacity-100 duration-500 ease-in-out absolute top-0 focus:outline-none"
        >
          <path
            d="M59.5 30C59.5 46.2924 46.2924 59.5 30 59.5C13.7076 59.5 0.5 46.2924 0.5 30C0.5 13.7076 13.7076 0.5 30 0.5C46.2924 0.5 59.5 13.7076 59.5 30Z"
            fill="#5454d4"
            stroke="#5454d4"
          />
          <path
            d="M30 18.75V41.25"
            stroke="#fff"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.5 30.75L30 41.25L40.5 30.75"
            stroke="#fff"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
   </div>
    <div class="mt-10 mx-auto md:w-6/12 lg:w-5/12 lg:ml-auto">
      <img :src="image.img" alt=" "  />
    </div>
  </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "hero",
  components: {
    Header,
  },
  data() {
    return {
      heading: [],
      button:[],
      image:{}
    };
  },
  computed: {
    button() {
      return this.$store.getters.button;
    },
  },
  async fetch() {
    this.heading = await fetch("http://localhost:3000/hero").then((res) =>
      res.json()
    );
    this.button = await fetch("http://localhost:3000/button").then((res) =>
      res.json()
    
    );
     this.image = await fetch("http://localhost:3000/image").then((res) =>
      res.json()
    
    );
  },
};
</script>

<style>
</style>