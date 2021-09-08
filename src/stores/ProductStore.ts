import { makeAutoObservable } from 'mobx';
import API from '../api/ShoppingApi';

export default class ProductStore {
  constructor() {
    makeAutoObservable(this);
  }

  searchProducts = (query: string) => {
    return API.Products.search(query);
  };
}
