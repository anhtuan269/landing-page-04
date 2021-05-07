<template>
  <div class="chart px-10 mt-16">
    <div
      class="  md:flex md:items-center md:justify-between"
      v-for="(head, index) in heading"
      :key="index"
      v-show="head.type === 'heading-1'"
    >
      <img :src="head.img" :alt="head.alt" class="w-full md:w-5/12" />
      <div class="heading mt-8 text-center md:w-6/12 md:text-left">
        <h2 class="text-28 text-black-01 leading-l-30 font-bold tracking-a md:text-34 md:leading-l-30">
          {{ head.title }}
        </h2>
        <p class="text-16 leading-l-22 my-4 md:text-18">
          {{ head.description }}
        </p>
        <a :href="head.link" class="text-new-blue text-16 text-center  font-bold md:text-17"> {{head.text_link}}</a>
      </div>
    </div>
    <div
      class="  md:flex md:items-center md:justify-between md:mt-16"
      v-for="(head, index) in heading"
      :key="index"
      v-show="head.type === 'heading-2'"
    >
      <div class="heading mt-16 mb-8 text-center  md:text-left md:w-6/12 md:mt-8">
        <h2 class="text-28 text-black-01 leading-l-30 font-bold tracking-a">
          {{ head.title }}
        </h2>
        <p class="text-16 leading-l-22 my-4">
          {{ head.description }}
        </p>
         <a :href="head.link" class="text-new-blue text-16 text-center  font-bold md:text-17"> {{head.text_link}}</a>
      </div>
      <img :src="head.img" :alt="head.alt" class="w-full md:w-5/12"/>
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