<template>
  <div>
    <h1>Olá Vue!</h1>
    <p>
      Meu nome é {{ nome }}, tenho {{ age }} anos e trabalho como
      {{ profissao }}.
    </p>

    <MultiplosEventos />
    <Reutilizacao />
    <Reutilizacao />
    <Reutilizacao />
    <Reutilizacao />
  </div>
</template>

<script>
import MultiplosEventos from "./MultiplosEventos.vue";
import Reutilizacao from "./Reutilizacao.vue";

export default {
  name: "PrimeiroComponente",
  components: {
    MultiplosEventos,
    Reutilizacao,
  },
  //data() são os dados que podem ser usados dentro deste componente e não fora dele
  data() {
    return {
      nome: "Dimas",
      age: 39,
      profissao: "Programador",
    };
  },
};
</script>

<style>
</style>