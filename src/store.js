import { reactive } from "vue";

export const store = reactive({
  CommandLog: ["Initial Command", "Command 2"],
  ConnectionStats: {
    connected: true,
    ping: "5",
    ip: "192.168.0.1",
  },
});
