import { makeAutoObservable, runInAction } from 'mobx';
import API from '../api/ShoppingApi';
import { ProductSocket } from '../api/WebSockets';
import { ProductDocument } from '../model/Product';

export default class ProductStore {
  private recentProductsMap = new Map<String, ProductDocument>();
  recentProductsLoaded = false;

  constructor() {
    makeAutoObservable(this);
  }

  searchProducts = (query: string) => {
    return API.Products.search(query);
  };

  loadRecent = async () => {
    try {
      const products = await API.Products.getRecents();
      products.forEach(this.addToRegistry);
    } finally {
      runInAction(() => {
        this.recentProductsLoaded = true;
      });
    }
  };

  wsSubscribe = () => {
    ProductSocket.subscribe(event => {
      console.log(event);
      runInAction(() => this.addToRegistry(event.payload));
    });
  };

  wsUnsubscribe = () => {
    ProductSocket.unsubscribe();
  };

  get recentProducts() {
    return Array.from(this.recentProductsMap.values()).sort(
      (a, b) => b.lastTimeAdded.getTime() - a.lastTimeAdded.getTime(),
    );
  }

  private addToRegistry = (product: ProductDocument) => {
    this.recentProductsMap.set(product.name, {
      ...product,
      lastTimeAdded: new Date(product.lastTimeAdded),
    });
  };
}
