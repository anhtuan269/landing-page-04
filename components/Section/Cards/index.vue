<template>
  <div class="card px-10 py-16 lg:px-0 lg:mx-auto lg:max-w-tablet 1360:max-w-1300 2xl:max-w-1500 ">
    <div class="  lg:flex lg:justify-between lg:items-center">
      <div class="item mb-10" v-for="(card, index) in cards" :key="index">
        <img
          :src="card.card_image"
          :alt="card.card_alt"
          class="w-40 mx-auto mb-3"
        />
        <div class="text-center">
          <h2 class="text-24 text-black-01 font-bold leading-l-24">
            {{ card.card_title }}
          </h2>
          <p class="text-16 leading-l-22 mt-4 w-80 mx-auto">
            {{ card.card_description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  componets: {
  },
  data() {
    return {
      cards: [],
    };
  },
  async fetch() {
    this.cards = await fetch("http://localhost:3000/cards").then((res) =>
      res.json()
    );
  },
};
</script>

<style>
</style>