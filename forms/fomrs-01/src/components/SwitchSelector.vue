<template>
  <div class="switch" @click="on = !on" :class="{on, off: !on }">
    <div v-if="on" class="button"></div>
    <div v-else class="button"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      on: false,
    };
  },
};
</script>

<style scoped>
.switch {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 15px;
  width: 40px;
  border-radius: 20px;
  border: 1px solid #aaa;
}

.button {
  position: absolute;
  margin: 0px 5px;
  height: 25px;
  width: 25px;
  border-radius: 14px;
  background-color: #fff;
  box-shadow: 0px 0px 5px #000b;
}

.off {
  background-color: #aaa;
}

.on {
  background-color: #7495c2;
}

.off .button {
  left: -10px;
}

.on .button {
  background-color: #255ca9;
  align-self: flex-end;
}
</style>