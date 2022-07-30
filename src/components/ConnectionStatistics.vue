<template>
  <h3>Connection Statistics</h3>
  connected: {{store.ConnectionStats.connected}}<br>
  ping: {{store.ConnectionStats.ping}} ms
</template>

<script>

import {store} from "@/store";

export default {
  name: "ConnectionStatistics",
  data() {
    return {
      store
    }
  },
}
</script>

<style scoped>

</style>