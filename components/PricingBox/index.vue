<template>
  <div class="pricing-box mt-10">
    <div class=" lg:flex items-center justify-center">
      <div
        class="bg-gray-100 mt-10 text-center py-8 px-8 rounded-10 w-330 mx-auto"
        v-for="(item, index) in pricing"
        :key="index"
        v-show="(item.package === 'Starter')"
      >
        <h3 class="text-18 leading-l-24 tracking-a mb-2">{{ item.package }}</h3>
        <h3 class="price text-42 leading-l-50 text-black-01 font-bold mb-4">{{ item.money }}</h3>
        <div class="options">
          <p class="text-18 leading-l-40 ">{{ item.option_1 }}</p>
          <p class="text-18 leading-l-40 ">{{ item.option_2 }}</p>
          <p class="text-18 leading-l-40 ">{{ item.option_3 }}</p>
        </div>
        <button class="mt-5 bg-white w-full rounded-xl border-2 border-white border-solid py-4 font-bold text-new-blue hover:text-white hover:bg-blue duration-500 ease-in-out">
          <nuxt-link :to="item.link">
            {{ item.text_link }}
          </nuxt-link>
        </button>
      </div>
      <div
        class="bg-orange text-white mt-10 text-center py-14 rounded-10 px-8 w-330 mx-auto" 
        v-for="(item, index) in pricing"
        :key="index"
        v-show="(item.package === 'Premium')"
      >
        <h3 class="text-18 leading-l-24 tracking-a mb-2">{{ item.package }}</h3>
        <h3 class="price price text-42 leading-l-50 font-bold mb-4">{{ item.money }}
          <span class="text-25 leading-l-24 ">{{item.time}}</span>
        </h3>
        <div class="options">
          <p class="text-18 leading-l-40 ">{{ item.option_1 }}</p>
          <p class="text-18 leading-l-40 ">{{ item.option_2 }}</p>
          <p class="text-18 leading-l-40 ">{{ item.option_3 }}</p>
        </div>
        <button class="mt-5 bg-ground w-full rounded-xl border-2 border-ground border-solid py-4 font-bold text-white hover:bg-blue duration-500 ease-in-out">
          <nuxt-link :to="item.link">
            {{ item.text_link }}
          </nuxt-link>
        </button>
      </div>
      <div
        class="bg-gray-100 mt-10 text-center py-8 rounded-10 px-8 w-330 mx-auto"
        v-for="(item, index) in pricing"
        :key="index"
        v-show="(item.package === 'Enterprise')"
      >
        <h3 class="name text-18 leading-l-24 tracking-a mb-2 ">{{ item.package }}</h3>
        <h3 class="price price text-42 leading-l-50 text-black-01 font-bold mb-4">{{ item.money }}
          <span class="text-25 leading-l-24 ">{{item.time}}</span>
        </h3>
        <div class="options">
          <p class="text-18 leading-l-40 ">{{ item.option_1 }}</p>
          <p class="text-18 leading-l-40 ">{{ item.option_2 }}</p>
          <p class="text-18 leading-l-40 ">{{ item.option_3 }}</p>
        </div>
        <button class="mt-5 bg-white w-full rounded-xl border-2 border-white border-solid py-4 font-bold text-new-blue hover:text-white hover:bg-blue duration-500 ease-in-out">
          <nuxt-link :to="item.link">
            {{ item.text_link }}
          </nuxt-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pricing: [],
    };
  },
  async fetch() {
    this.pricing = await fetch("http://localhost:3000/pricing").then((res) =>
      res.json()
    );
  },
};
</script>

<style>
</style>