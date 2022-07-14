<template>
  <div>
    <!-- <p>{{ compEmail }} - {{ email }}</p> -->
    <!-- v-if, v-else, v-show são diretivas dentre outras -->
    <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
    <p v-else>Estou em busca de novas oportunidades!</p>
    <p>Utilizo as seguintes tecnologias para Front-end:</p>
    <ul>
      <li
        v-for="(technology, index) in frontend_technologies"
        v-bind:key="index"
      >
        {{ technology }}
      </li>
    </ul>
    <p>Utilizo as seguintes tecnologias para Back-end:</p>
    <ul>
      <li v-for="technology in backend_technologies" :key="technology.id">
        {{ technology.language }}
      </li>
    </ul>
    <div>
      <button @click="showEmail">{{ textoBotao }}</button>
    </div>
    <p v-show="mostrar_email">Mande uma mensagem para: {{ email }}</p>
    <p class="teste">
      Para acessar meu portifólio
      <!-- v-bind é um ARGUMENTO que liga a um ATRIBUTO -->
      <a v-bind:href="meu_link" target="_blank">basta clicar aqui</a>
    </p>
    <Picture />
  </div>
</template>

<script>
import Picture from "./Picture.vue";

export default {
  components: { Picture },
  name: "Info",
  props: {
    email: String,
    esta_trabalhando: Boolean,
  },
  data() {
    return {
      mostrar_email: false,
      meu_link: "https://www.google.com.br",
      textoBotao: "Mostrar e-mail",
      frontend_technologies: ["Vue.JS", "JavaScript", "HTML", "CSS"],
      backend_technologies: [
        { id: 1, language: "PHP" },
        { id: 1, language: "Java" },
        { id: 1, language: "Python" },
      ],
    };
  },
  methods: {
    showEmail() {
      this.mostrar_email = !this.mostrar_email;
      if (!this.mostrar_email) {
        this.textoBotao = "Mostrar e-mail";
      } else {
        this.textoBotao = "Esconder e-mail";
      }
    },
  },
};
</script>

<style>
</style>