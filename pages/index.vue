<template>
  <div id="app">
    <Hero />
    <Customer />
    <Chart />
    <Card />
    <PriceBox />
  </div>
</template>

<script>
import Hero from "@/components/Section/Hero";
import Customer from "@/components/Section/Customer";
import Chart from "@/components/Section/Chart";
import Card from "@/components/Section/Cards";
import PriceBox from "@/components/Section/Pricing";
export default {
  name: "app",
  data() {
    return {
      head1: [],
    };
  },
  async fetch() {
    this.head1 = await fetch("http://localhost:3000/hero").then((res) =>
      res.json()
    );
  },
  components: {
    Hero,
    Customer,
    Chart,
    Card,
    PriceBox,
  },
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
