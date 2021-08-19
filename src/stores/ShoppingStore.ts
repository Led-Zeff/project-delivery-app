import { makeAutoObservable } from 'mobx';
import FirebaseApp from '../api/firebase';
import { ShoppingDocument } from '../model/Shopping';

export default class ShoppingStore {
  constructor() {
    makeAutoObservable(this);
  }

  loadShoppingList = (onSnapshot: (items: ShoppingDocument[]) => void) => {
    return FirebaseApp.Shopping.list(onSnapshot);
  };
}
