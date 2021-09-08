import { makeAutoObservable } from 'mobx';
import API from '../api/ShoppingApi';
import { ShoppingSocket } from '../api/WebSockets';
import { ShoppingDocument } from '../model/Shopping';

export default class ShoppingStore {
  shoppingRegistry = new Map<string, ShoppingDocument>();

  constructor() {
    makeAutoObservable(this);
  }

  loadPage = async () => {
    const page = await API.Shopping.page();
    page.forEach(this.addToRegistry);
  };

  wsSubscribe = () => {
    ShoppingSocket.subscribe(ev => {
      console.log('event', ev);
      this.addToRegistry(ev.payload);
    });
  };

  wsUnsubscribe = () => {
    ShoppingSocket.unsubscribe();
  };

  private addToRegistry = (shopping: ShoppingDocument) => {
    this.shoppingRegistry.set(shopping.id!, shopping);
  };

  get shoppingList(): ShoppingDocument[] {
    return Array.from(this.shoppingRegistry.values());
  }
}
