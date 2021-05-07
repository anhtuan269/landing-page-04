<template>
  <div class="chart px-10 mt-16">
    <div
      class=" block lg:flex items-center justify-center"
      v-for="(head, index) in heading"
      :key="index"
      v-show="head.type === 'heading-1'"
    >
      <img :src="head.img" :alt="head.alt" class="w-full" />
      <div class="heading mt-8 text-center">
        <h2 class="text-28 text-black-01 leading-l-30 font-bold tracking-a">
          {{ head.title }}
        </h2>
        <p class="text-16 leading-l-22 mt-4">
          {{ head.description }}
        </p>
      </div>
    </div>
    <div
      class=" block lg:flex items-center justify-center"
      v-for="(head, index) in heading"
      :key="index"
      v-show="head.type === 'heading-2'"
    >
      <div class="heading mt-16 mb-8 text-center ">
        <h2 class="text-28 text-black-01 leading-l-30 font-bold tracking-a">
          {{ head.title }}
        </h2>
        <p class="text-16 leading-l-22 mt-4">
          {{ head.description }}
        </p>
      </div>
      <img :src="head.img" :alt="head.alt" class="w-full"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heading: [],
    };
  },
  async fetch() {
    this.heading = await fetch("http://localhost:3000/hero").then((res) =>
      res.json()
    );
  },
};
</script>

<style>
</style>