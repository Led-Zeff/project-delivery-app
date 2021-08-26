import { makeAutoObservable } from 'mobx';

export default class ShoppingStore {
  constructor() {
    makeAutoObservable(this);
  }
}
