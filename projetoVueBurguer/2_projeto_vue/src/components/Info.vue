<template>
  <div>
    <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
    <p v-else>Estou em busca de novas oportunidades!</p>
    <p>Utilizo as seguintes tecnologias:</p>
    <ul>
      <li>Vue.JS</li>
      <li>JavaScript</li>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
    <p v-show="mostrar_email">Mande uma mensagem para: {{ email }}</p>
  </div>
</template>

<script>
export default {
  name: "Info",
  data() {
    return {
      esta_trabalhando: false,
      mostrar_email: true,
      email: "dimas.capelari@gmail.com",
    };
  },
};
</script>

<style>
</style>