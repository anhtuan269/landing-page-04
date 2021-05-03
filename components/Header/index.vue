<template>
  <div class="header">
    <div class="flex items-center justify-between max-w-tablet mx-auto pt-10">
      <div class="w-52">
        <img src="@/static/image/Logo Color.png" alt="" />
      </div>
      <ul class=" hidden  lg:flex md:items-center md:justify-center">
        <li v-for="(item, index) in menu" :key="index" class="mr-10">
          <nuxt-link :to="item.link">
            {{ item.name }}
          </nuxt-link>
        </li>
      </ul>
      <div class="flex items-center justify-between">
        <button
          class="bg-orange text-white font-bold text-17 leading-l-22 tracking-c rounded-10 px-06 py-02 hover:bg-blue duration-500 ease-in-out"
        >
          Get Started
        </button>
        <button
          class="bg-orange text-white font-bold text-17 leading-l-22 tracking-c rounded-10 px-02 py-02 hover:bg-blue duration-500 ease-in-out"
        >
          Menu
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header",
  props: {
    menu: {
      type: Array,
      require: true,
      default() {
        return [
          {
            id: 1,
            name: "Home",
            link: "",
          },
          {
            id: 2,
            name: "Feature",
            link: "Feature",
          },
          {
            id: 1,
            name: "Spicing",
            link: "Spricing",
          },
          {
            id: 1,
            name: "Blog",
            link: "Blog",
          },
        ];
      },
    },
  },
};
</script>

<style>
</style>