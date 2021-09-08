import SockJS from 'sockjs-client';
import { ApiConf } from './ApiConf';
import { Stomp } from '@stomp/stompjs';
import { ShoppingDocument } from '../model/Shopping';

//* Socket factory to be used by StompJS */
const socketFactory = () => new SockJS(ApiConf.webSocketUrl);
//* Stomp client to subscribe to the websocket */
const stompClient = Stomp.over(socketFactory);
//* Flag to control wheter the connection has been stablished or not */
let connected = false;
//* Async function to stablish connection with the WS server */
const connect = () =>
  new Promise<void>((resolve, reject) =>
    stompClient.connect(
      {},
      () => {
        connected = true;
        resolve();
      },
      (err: any) => {
        connected = false;
        reject(err);
      },
    ),
  );

//* Stablishes connection with if server (if not connected yet) and subscribes to given destination */
const subscribe = async <T>(
  destination: string,
  callback: (event: T) => void,
) => {
  if (!connected) {
    await connect();
  }

  stompClient.subscribe(destination, msg => callback(JSON.parse(msg.body)));
};

type ShoppingEvent = { type: 'NEW'; payload: ShoppingDocument };

export const ShoppingSocket = {
  subscribe: (callback: (event: ShoppingEvent) => void) =>
    subscribe('/shopping', callback),
  unsubscribe: () => stompClient.unsubscribe('/shopping'),
};
