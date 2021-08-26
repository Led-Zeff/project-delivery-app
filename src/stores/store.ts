import { createContext, useContext } from 'react';
import ProductStore from './ProductStore';
import ShoppingStore from './ShoppingStore';

interface Store {
  shoppingStore: ShoppingStore;
  productsStore: ProductStore;
}

export const store: Store = {
  shoppingStore: new ShoppingStore(),
  productsStore: new ProductStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
