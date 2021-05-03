<template>
  <div class="hero">
    <Header />
    <Heading />
    <div class="flex">
      <button
        class="bg-blue text-white font-bold text-17 leading-l-22 tracking-c rounded-10 px-06 py-02 hover:bg-orange duration-500 ease-in-out"
      >
        Get Started
      </button>
      <div class="img">
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
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
      </div>
    </div>
    <div class="bloc">
      <img src="@/static/image/Hero 3D.png" alt=" " />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Heading from "@/components/Heading";
export default {
  name: "hero",
  components: {
    Header,
    Heading,
  },
};
</script>

<style>
</style>