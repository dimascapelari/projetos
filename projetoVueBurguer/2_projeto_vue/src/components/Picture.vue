<template>
  <div>
    <img :src="avatar" :alt="descricao" />
    <Reutilizacao />
  </div>
</template>

<script>
import Reutilizacao from "./Reutilizacao.vue";
export default {
  components: { Reutilizacao },
  name: "Picture",
  data() {
    return {
      avatar: "/img/avatar.png",
      descricao: "Dimas Capelari",
    };
  },
};
</script>

<style>
</style>