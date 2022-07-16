<template>
  <h1>Meu nome é: {{ name }}</h1>
</template>

<script>
export default {
  name: "LifeCycle",
  data() {
    return {
      name: "Ainda não sei",
    };
  },
  // created() são os HOOKS
  created() {
    setTimeout(() => {
      this.name = "Dimas";
    }, 1000);

    this.lifeCycle();
  },
  // mounted() é uma HOOK que está acima da hierarquia do created()
  mounted() {
    setTimeout(() => {
      this.name = "Dimas Capelari";
    }, 2000);

    this.lifeCycle();
  },
  methods: {
    lifeCycle() {
      console.log("Executou");
    },
  },
};
</script>

<style>
</style>