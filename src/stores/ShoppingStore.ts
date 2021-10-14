import { makeAutoObservable } from 'mobx';
import API from '../api/ShoppingApi';
import { ShoppingSocket } from '../api/WebSockets';
import { ShoppingDocument } from '../model/Shopping';

export default class ShoppingStore {
  shoppingRegistry = new Map<string, ShoppingDocument>();

  constructor() {
    makeAutoObservable(this);
  }

  loadShoppingList = async () => {
    const list = await API.Shopping.getAll();
    list.forEach(this.addToRegistry);
  };

  wsSubscribe = () => {
    ShoppingSocket.subscribe(ev => {
      this.addToRegistry(ev.payload);
    });
  };

  isAdded = (productId: string) => {
    return this.shoppingList.some(item => {
      return item.product.productId === productId;
    });
  };

  addItem = async (newShopping: ShoppingDocument) => {
    if (this.isAdded(newShopping.product.productId)) {
      return;
    }

    const response = await API.Shopping.add(newShopping);
    this.addToRegistry(response);
    return response;
  };

  wsUnsubscribe = () => {
    ShoppingSocket.unsubscribe();
  };

  private addToRegistry = (shopping: ShoppingDocument) => {
    this.shoppingRegistry.set(shopping.id!, {
      ...shopping,
      createTime: new Date(shopping.createTime!),
    });
  };

  get shoppingList(): ShoppingDocument[] {
    return Array.from(this.shoppingRegistry.values()).sort(
      (a, b) => a.createTime!.getTime() - b.createTime!.getTime(),
    );
  }
}
