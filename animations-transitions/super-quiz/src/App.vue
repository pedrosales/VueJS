<template>
  <div id="app">
    <h1>Super Quiz</h1>
    <transition name="flip" mode="out-in">
      <Result v-if="showResult" :result="result" @confirmed="nextQuestion" />
      <Question v-else :question="questions[currentQuestion]" @answered="showQuestionResult" />
    </transition>
  </div>
</template>

<script>
import Result from "./components/Result.vue";
import Question from "./components/Question.vue";
import questions from "./util/questions";

export default {
  components: { Result, Question },
  methods: {
    showQuestionResult(answer) {
      this.result = answer.correct;
      this.showResult = true;
    },
    nextQuestion() {
      this.showResult = false;
      const random = Math.random() * this.questions.length;
      this.currentQuestion = parseInt(random);
    },
  },
  data() {
    return {
      result: true,
      showResult: false,
      questions,
      currentQuestion: 0,
    };
  },
};
</script>

<style>
body {
  background: linear-gradient(to right, rgb(0, 0, 70), rgb(28, 181, 224));
  font-family: "Oswald", sans-serif;
  color: #fff;
  height: 100vh;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
}

#app h1 {
  font-weight: 200;
  font-size: 4rem;
}

@keyframes flip-out {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(90deg);
  }
}

@keyframes flip-in {
  from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(0deg);
  }
}

.flip-enter-active {
  animation: flip-in 0.3s ease;
}

.flip-leave-active {
  animation: flip-out 0.3s ease;
}
</style>
