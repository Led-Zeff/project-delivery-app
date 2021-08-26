import { makeAutoObservable } from 'mobx';
import FirebaseApp from '../api/firebase';
import { ProductDocument } from '../model/Product';

export default class ProductStore {
  constructor() {
    makeAutoObservable(this);
  }

  searchProducts = async (query: string) => {
    const products = await FirebaseApp.Products.search(query);
    const mapped: ProductDocument[] = [];
    products.forEach(prod => mapped.push({ id: prod.id, ...prod.data() }));
    return mapped;
  };
}
