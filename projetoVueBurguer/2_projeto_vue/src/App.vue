<template>
  <div>
    <PrimeiroComponente />
    <p>O data de App é: {{ testando }}</p>
    <LifeCycle />
  </div>
</template>

<script>
import PrimeiroComponente from "./components/PrimeiroComponente.vue";
import LifeCycle from "./components/LifeCycle.vue";

export default {
  name: "App",
  components: {
    PrimeiroComponente,
    LifeCycle,
  },
  data() {
    return {
      testando: "Teste",
    };
  },
};
</script>

<style>
</style>