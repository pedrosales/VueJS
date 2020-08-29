<template>
  <div class="result" :class="{wrong: !result}">
    <span v-if="result">Right answer! =)</span>
    <span v-else>Wrong answer! =(</span>
    <hr />
    <button @click="$emit('confirmed')">Next question</button>
  </div>
</template>

<script>
export default {
  props: {
    result: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style>
.result {
  height: 400px;
  color: #000;
  background-color: #fff;
  width: 100%;
  border-radius: 20px;
  font-size: 5.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #89c454;
  color: #30863d;
}

.result hr {
  color: #fff;
}

.result.wrong {
  background-color: #f05250;
  color: #bb2814;
}

.result button {
  outline: none;
  align-self: center;
  padding: 10px 20px;
  font-size: 1.7rem;
  border-radius: 8px;
  background-color: #fff;
  color: #30863d;
  font-weight: 600;
}

.result.wrong button {
  color: #bb2814;
}
</style>
