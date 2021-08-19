import { createContext, useContext } from 'react';
import ShoppingStore from './ShoppingStore';

interface Store {
  shoppingStore: ShoppingStore;
}

export const store: Store = {
  shoppingStore: new ShoppingStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
