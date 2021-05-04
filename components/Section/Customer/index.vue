<template>
  <div class="customer">
    <div class="flex items-center justify-between">
      <div class="block" v-for="(item, index) in customer" :key="index">
        <img :src="item.src" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    customer: {
      type: Array,
      default() {
        return [
          {
            id: 1,
            src: "/image/customer-1.png",
          },
          {
            id: 2,
            src: "/image/customer-2.png",
          },
          {
            id: 3,
            src: "/image/customer-3.png",
          },
          {
            id: 4,
            src: "/image/customer-4.png",
          },
          {
            id: 5,
            src: "/image/customer-5.png",
          },
        ];
      },
    },
  },
};
</script>

<style>
</style>