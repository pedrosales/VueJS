<template>
  <div class="quotes">
    <span>
      <button @click="number--">&lt;</button>
      <button @click="number++">&gt;</button>
    </span>
    <Quote>
      <h1 slot="author">{{ quotes[index].author }}</h1>
      <p slot="text">{{ quotes[index].text }}</p>
      <h6 slot="source">{{ quotes[index].source }}</h6>
    </Quote>
  </div>
</template>

<script>
import Quote from "./Quote.vue";

export default {
  components: { Quote },
  data() {
    return {
      number: 0,
      quotes: [
        {
          source: "Jornal do Empreendedor",
          text:
            "Lembre-se sempre que você é absolutamente único. Assim como todos os outros.",
          author: "Margaret Mead",
        },
        {
          source: "Frases de Mãe",
          text: "Isso não é um quarto, é um chiqueiro",
          author: "Icleia",
        },
        {
          source: "Frases de Pai",
          text: "Vou contar até 3! 1, 2, 2...",
          author: "Renato",
        },
      ],
    };
  },
  computed: {
    index() {
      return Math.abs(this.number % 3);
    },
  },
};
</script>

<style scoped>
.quotes {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>