<template>
  <button @click="sendCommand(command)" class="btn btn-primary" :hover-text="command">
    <b-button>{{ name }}</b-button>
  </button>
</template>

<script>
import { store } from '@/store'

export default {
  name: "APIButton",
  props: {
    name: String,
    command: String,
  },
  data() {
    return {
      store
    }
  },
  methods: {
    sendCommand(command) {
      store.CommandLog.unshift(command)
    }
  }
};
</script>

<style scoped>

button {
  position: relative;
  display: inline-block;
  margin: 0 10px 10px 0;
  /*padding: 5px 10px;*/
}

button::after {
  content: attr(hover-text);
  position: absolute;
  background: #444;
  color: #fff;
  left: 0;
  top: 100%;
  font-size: 12px;
  width: 100px;
  padding: 5px;
  border-radius: 4px;
  transition: 300ms;
  opacity: 0;
  pointer-events: none;
  transform: translateY(15px);
  z-index: 2;
}

button:hover::after {
  opacity: 1;
  transform: translateY(5px);
}
</style>
