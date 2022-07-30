<template>
  <ul class="no-bullets">
    <li v-for="command in store.CommandLog" :key="command">
      <span>{{ command }}</span>
    </li>
  </ul>
</template>

<script>
import {store} from "@/store";

export default {
  name: "APIConsole",
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
}
</script>

<style scoped>
ul.no-bullets {
  height: 500px;
  width: auto;
  list-style-type: none; /* Remove bullets */
  /*padding: 5px;*/
  padding-left: 5px;
  padding-top: 5px;
  padding-bottom: 0;
  margin: 0;
  text-align: left;

  overflow: auto;
  display: flex;
  flex-direction: column-reverse;
}
</style>