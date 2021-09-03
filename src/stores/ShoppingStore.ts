import { makeAutoObservable } from 'mobx';
import API from '../api/ShoppingApi';
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

  private addToRegistry = (shopping: ShoppingDocument) => {
    this.shoppingRegistry.set(shopping.id!, shopping);
  };

  get shoppingList(): ShoppingDocument[] {
    return Array.from(this.shoppingRegistry.values());
  }
}
