<template>
  <div class="heading">
    <h2 v-show="head.big">{{ head.title }}</h2>
    <p v-show="head.big"> {{head.content}}</p>

    <h2 v-show="head.normal">{{ head.title }}</h2>
    <p v-show="head.normal"> {{head.content}}</p>

    <h2 v-show="head.small">{{ head.title }}</h2>
    <p v-show="head.small"> {{head.content}}</p>

    <h2 v-show="head.big_special">{{ head.title }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    head: {
      type: Object,
      require: true,
      default() {
        return {
          big: true,
          normal: false,
          small: false,
          big_special: false,
          title: "Grow your subscription business",
          content:
            "Outcome-centered products that reduce churn, optimize pricing, and grow your subscription business end-to-end.",
        };
      },
    },
  },
};
</script>

<style>
</style>