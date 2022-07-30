<template>
  <form @submit.prevent="sendInputCommand" class="InputForm">
    <input v-model="newCommand" class="InputTextBox"/>
    <button>Send</button>
  </form>
</template>

<script>
import { store } from '@/store'

export default {
  name: "APITextBox",
  data() {
    return {
      store,
      newCommand:""
    }
  },
  methods: {
    sendInputCommand() {
      store.CommandLog.unshift(this.newCommand)
      this.newCommand = ""
    }
  }
}
</script>

<style scoped>
.InputForm {
  padding: 2px;
  display: flex;
}
.InputTextBox {
  flex-grow: 1;
}
</style>