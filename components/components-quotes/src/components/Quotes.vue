<template>
  <div class="quotes">
    <span>
      <button @click="number--">&lt;</button>
      <button @click="number++">&gt;</button>
    </span>
    {{ number }} {{ index }}
  </div>
</template>

<script>
export default {
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