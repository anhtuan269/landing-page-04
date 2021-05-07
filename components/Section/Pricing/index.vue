<template>
  <div class="pricing px-10 pb-16">
    <div class="block lg:flex justify-between">
      <div class="heading text-center" v-for="(head, index) in heading" :key="index" v-show="head.type==='heading-3'">
         <h2  class="text-34 leading-l-30 tracking-a font-bold text-black-01" >{{ head.title }}</h2>
      </div>
      <div class="flex items-center justify-center my-5">
       <button 
       v-for="(item, index) in button" 
       :key="index" 
       v-show="item.backgoundColor==='blue'"
       class=" bg-blue w-40 h-12 text-white font-semibold rounded-l-xl "
       v-bind:class="{ blue, gray}"
       >
         {{item.text}}
       </button>
       <button 
       v-for="(item, index) in button" 
       :key="index" 
       v-show="item.backgoundColor==='white'"
       class="bg-gray-100 w-40 h-12 text-black-01 font-semibold rounded-r-xl hover:bg-blue hover:text-white duration-500 ease-in-out"
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
import Heading from "@/components/Heading";
import Price from "@/components/PricingBox";
export default {
  components: {
    Price,
    Heading,
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