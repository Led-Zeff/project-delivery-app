import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { FlatList } from 'react-native';
import { useStore } from '../../stores/store';
import Loading from '../shared/Loading';
import { ProductSearchItem } from './ProductSearchItem';
import { Divider } from 'react-native-paper';

export const RecentProductList = observer(() => {
  const {
    productsStore: {
      recentProducts,
      loadRecent,
      recentProductsLoaded,
      wsSubscribe,
    },
  } = useStore();

  useEffect(() => {
    if (!recentProductsLoaded) {
      console.log('Loading recent products');
      loadRecent();
    }
  }, [loadRecent, recentProductsLoaded]);

  useEffect(() => {
    wsSubscribe();
  }, [wsSubscribe]);

  if (!recentProductsLoaded) {
    return <Loading />;
  }

  return (
    <FlatList
      data={recentProducts}
      keyExtractor={item => item.id!}
      renderItem={({ item }) => <ProductSearchItem product={item} />}
      ItemSeparatorComponent={() => <Divider />}
    />
  );
});
