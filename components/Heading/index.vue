<template>
  <div class="heading">
    <h2 v-show="head.big" class="text-34 leading-l-30 tracking-a font-bold text-black-01 text-center ">{{ head.title }}</h2>
    <p v-show="head.big" class=" text-16 leading-l-22 mt-4 text-center "> {{head.content}}</p>

    <h2 v-show="head.normal" class=" text-28 text-black-01 leading-l-30 font-bold tracking-a">{{ head.title }}</h2>
    <p v-show="head.normal" class=" text-16 leading-l-22 mt-4"> {{head.content}}</p>

    <h2 v-show="head.small">{{ head.title }}</h2>
    <p v-show="head.small" class=" text-16 leading-l-22 mt-4"> {{head.content}}</p>

    <h2 v-show="head.big_special" class="text-34 leading-l-30 tracking-a font-bold text-black-01" >{{ head.title }}</h2>
 
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