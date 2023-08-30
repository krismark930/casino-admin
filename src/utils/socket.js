import VueSocketIO from 'vue-3-socket.io';
import { SOCKET_URL } from '@/config';

const socket = new VueSocketIO({
  debug: true,
  connection: SOCKET_URL,
})

export default socket;