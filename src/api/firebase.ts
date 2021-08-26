import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import { ProductDocument } from '../model/Product';
import { ShoppingDocument } from '../model/Shopping';

const collections = {
  shopping: firestore().collection<ShoppingDocument>('shopping'),
  products: firestore().collection<ProductDocument>('products'),
};

const mapSnapshot = <T>(
  snapshot: FirebaseFirestoreTypes.QuerySnapshot<T>,
  consumer: (list: T[]) => void,
) => {
  const list: T[] = [];
  snapshot.forEach(doc => {
    list.push({ id: doc.id, ...doc.data() });
  });
  consumer(list);
};

const Shopping = {
  list: (onSnapshot: (items: ShoppingDocument[]) => void) =>
    collections.shopping.onSnapshot(snapshot =>
      mapSnapshot(snapshot, onSnapshot),
    ),
};

const Products = {
  search: (query: string) =>
    collections.products
      .where('name', '>=', query)
      .where('name', '<=', query + '\uf8ff')
      .get(),
};

const FirebaseApp = {
  Shopping,
  Products,
};

export default FirebaseApp;
