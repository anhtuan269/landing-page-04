<template>
  <div class="header">
    <div class="flex items-center justify-between max-w-tablet mx-auto pt-10">
      <div class="w-52">
        <img src="@/static/image/Logo Color.png" alt="" />
      </div>
      <ul class="hidden lg:flex md:items-center md:justify-center before:empty-content">
        <li v-for="(item, index) in menu" :key="index" class="mr-10  font-bold">
          <nuxt-link :to="item.link" class="py-4" >
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
          class="bg-orange text-white font-bold text-17 leading-l-22 tracking-c rounded-10 px-02 py-02 hover:bg-blue duration-500 ease-in-out relative"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 "
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
a.nuxt-link-exact-active {
  color: #19191B;
  border-bottom: 2px solid #5454D4;
}
</style>