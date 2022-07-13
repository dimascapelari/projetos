<template>
  <div>
    <PrimeiroComponente />
    <DimasComponent />
  </div>
</template>

<script>
import PrimeiroComponente from "./components/PrimeiroComponente.vue";
import DimasComponent from "./components/DimasComponent.vue";

export default {
  name: "App",
  components: {
    PrimeiroComponente,
    DimasComponent,
  },
};
</script>

<style>
</style>