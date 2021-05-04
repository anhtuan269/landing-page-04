<template>
  <div class="chart">
    <div class="flex items-center justify-center">
      <img src="@/static/image/Content Image 02.png" alt="" />
      <Heading :head="head" />
    </div>
    <div class="flex items-center justify-center">
      <Heading :head="head2" />
      <img src="@/static/image/Content Image.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      head: {
        big: false,
        normal: true,
        small: false,
        big_special: false,
        title: "Subscription index",
        content:
          "A daily dataset to keep you up to date on subscription market trends and what's happening in your vertical.",
      },
       head2: {
        big: false,
        normal: true,
        small: false,
        big_special: false,
        title: "In-depth metrics",
        content:
          "Accurate, real-time reporting at your fingertips. Getting data has never been easier.",
      },
    };
  },
};
</script>

<style>
</style>