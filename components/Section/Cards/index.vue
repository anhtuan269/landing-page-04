<template>
  <div class="card">
    <div class="flex justify-center items-center">
      <div class="item">
        <img src="@/static/image/Icon 001.png" alt="" />
        <Heading :head="head" />
      </div>
      <div class="item">
        <img src="@/static/image/Icon 002.png" alt="" />
        <Heading :head="head1" />
      </div>
      <div class="item">
        <img src="@/static/image/Icon 003.png" alt="" />
        <Heading :head="head2" />
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "@/components/Heading";
export default {
  componets: {
    Heading,
  },
  data() {
    return {
      head: {
        big: false,
        normal: false,
        small: true,
        big_special: false,
        title: "Benchmarks",
        content:
          "See how you stack up against comparable companies in similar stages.",
      },
      head1: {
        big: false,
        normal: false,
        small: true,
        big_special: false,
        title: "IPricing Audit",
        content:
          "Benchmark the health of your monetization and pricing strategy.",
      },
      head2: {
        big: false,
        normal: false,
        small: true,
        big_special: false,
        title: "Retention Audit",
        content:
          "Audit where revenue leakage exists and where you can increase retention.",
      },
    };
  },
};
</script>

<style>
</style>