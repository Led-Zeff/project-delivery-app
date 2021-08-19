import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import { ShoppingDocument } from '../model/Shopping';

const collections = {
  shopping: firestore().collection<ShoppingDocument>('shopping'),
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
  list: (onSnapshot: (item: ShoppingDocument[]) => void) =>
    collections.shopping.onSnapshot(snapshot =>
      mapSnapshot(snapshot, onSnapshot),
    ),
};

const FirebaseApp = {
  Shopping,
};

export default FirebaseApp;
