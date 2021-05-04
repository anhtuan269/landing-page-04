<template>
  <div class="pricing">
    <div class="flex justify-between">
      <Heading :head="head" />
      <div class="flex">
        <button>Yearly</button>
        <button>Yearly</button>
      </div>
    </div>
    <div class="box">
      <Price />
    </div>
  </div>
</template>

<script>
import Heading from "@/components/Heading";
import Price from "@/components/PricingBox";
export default {
  components: {
    Price,
    Heading,
  },
  data() {
    return {
      head: {
        big: false,
        normal: false,
        small: false,
        big_special: true,
        title: "Get the right plan for future product.",
        content:
          "Outcome-centered products that reduce churn, optimize pricing, and grow your subscription business end-to-end.",
      },
    };
  },
};
</script>

<style>
</style>