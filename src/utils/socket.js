import VueSocketIO from 'vue-3-socket.io';

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL;

const socket = new VueSocketIO({
  debug: true,
  connection: SOCKET_URL,
})

export default socket;