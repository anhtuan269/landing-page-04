<template>
  <div class="pricing px-10 pb-16 lg:px-0 lg:max-w-tablet lg:mx-auto 1360:max-w-1300 2xl:max-w-1500">
    <div class="block lg:flex lg:justify-between lg:items-center">
      <div class="heading text-center lg:text-left " v-for="(head, index) in heading" :key="index" v-show="head.type==='heading-3'">
         <h2  class="text-34 leading-l-30 tracking-a font-bold text-black-01 lg:text-60 lg:leading-l-70 lg:tracking-g lg:w-9/12 " >{{ head.title }}</h2>
      </div>
      <div class="flex items-center justify-center my-5">
       <button 
       v-for="(item, index) in button" 
       :key="index" 
       v-show="item.backgoundColor==='blue'"
       class=" bg-blue w-40 h-12 text-white font-semibold rounded-l-xl  focus:outline-none "
       v-bind:class="{ blue, gray}"
       >
         {{item.text}}
       </button>
       <button 
       v-for="(item, index) in button" 
       :key="index" 
       v-show="item.backgoundColor==='white'"
       class="bg-gray-100 w-40 h-12 text-black-01 font-semibold rounded-r-xl hover:bg-blue hover:text-white duration-500 ease-linear  focus:outline-none"
       >
         {{item.text}}
       </button>
      </div>
    </div>
    <div class="box">
      <Price />
    </div>
  </div>
</template>

<script>
import Price from "@/components/PricingBox";
export default {
  components: {
    Price,
  },
  data() {
    return {
     heading:[],
     button:[],
     active:true,
     noactive:false
    };
  },
   async fetch() {
    this.heading = await fetch("http://localhost:3000/hero").then((res) =>
      res.json()
    );
   this.button = await fetch("http://localhost:3000/button").then((res) =>
      res.json()
    );
  },
};
</script>

<style>
</style>