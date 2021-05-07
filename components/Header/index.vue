<template>
  <div class="header">
    <div class="flex items-center justify-between max-w-tablet mx-auto pt-10">
      <div class="w-52" v-for="(item, index) in logo" :key="index">
        <nuxt-link :to="item.link">
          <img :src="item.src" alt="" />
        </nuxt-link>
      </div>
      <ul
        class="hidden md:flex md:items-center md:justify-center before:empty-content"
      >
        <li v-for="(item, index) in menu" :key="index" class="ml-10 font-bold ">
          <nuxt-link :to="item.link" class="py-4">
            {{ item.text }}
          </nuxt-link>
        </li>
      </ul>

      <button
        class="hidden bg-orange text-white font-bold text-17 leading-l-22 tracking-c rounded-10 px-06 py-02 hover:bg-blue duration-500 ease-in-out lg:block"
        v-for="(item, index) in button"
        :key="index"
        v-show="item.backgoundColor === 'orange'"
      >
        {{ item.text }}
      </button>
      <button
        class="bg-orange text-white font-bold text-17 leading-l-22 tracking-c rounded-10 px-02 py-02 hover:bg-blue duration-500 ease-in-out relative md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      menu: [],
      button: [],
      logo: [],
    };
  },
  async fetch() {
    this.menu = await fetch("http://localhost:3000/menu").then((res) =>
      res.json()
    );
    this.button = await fetch("http://localhost:3000/button").then((res) =>
      res.json()
    );
    this.logo = await fetch("http://localhost:3000/logo").then((res) =>
      res.json()
    );
  },
};
</script>

<style scoped >
a.nuxt-link-exact-active {
  color: #19191b;
  border-bottom: 2px solid #5454d4;
}
</style>