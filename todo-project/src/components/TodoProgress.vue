<template>
  <div class="todo-progress">
    <span class="progress-value">{{ progress }}%</span>
    <div class="progress-bar" :style="{width: progress + '%'}"></div>
  </div>
</template>

<script>
export default {
  props: {
    progress: { type: Number, default: 0 },
  },
};
</script>

<style scoped>
.todo-progress {
  position: relative;
  width: 80%;
  border: 1px solid #000;
  color: #fff;
  border-radius: 8px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.progress-bar {
  position: absolute;
  border-radius: 8px;
  height: 100%;
  background-color: seagreen;
  align-self: flex-start;
  border: 0px;
}

.progress-value {
  z-index: 1;
  font-size: 1.5rem;
  color: #ddd;
}
</style>