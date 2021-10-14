import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { ProductDocument } from '../../model/Product';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import Loading from '../../components/shared/Loading';
import { RecentProductList } from '../../components/shopping/RecentProductList';
import { ProductSearchItem } from '../../components/shopping/ProductSearchItem';
import { Searchbar } from 'react-native-paper';

export const AddShoppingItems = observer(() => {
  const [products, setProducts] = useState<ProductDocument[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');

  const {
    productsStore: { searchProducts },
  } = useStore();

  const search = (text: string) => {
    setSearchText(text);

    if (text) {
      setLoading(true);
      searchProducts(text)
        .then(r => appendSearch(r, text))
        .finally(() => setLoading(false));
    } else {
      setProducts([]);
    }
  };

  const onAdded = () => {
    setSearchText('');
  };

  const appendSearch = (productsResult: ProductDocument[], text: string) => {
    if (
      productsResult.some(
        p => p.name.toLocaleUpperCase() === text.toLocaleUpperCase(),
      )
    ) {
      setProducts(productsResult);
    } else {
      setProducts([
        { name: text, lastTimeAdded: new Date() },
        ...productsResult,
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Searchbar
        value={searchText}
        onChangeText={search}
        placeholder="Nombre del producto"
        style={styles.input}
      />

      {!searchText.trim() ? (
        <RecentProductList />
      ) : loading ? (
        <Loading />
      ) : (
        <FlatList
          data={products}
          keyExtractor={({ id, name }) => id || name}
          renderItem={({ item }) => (
            <ProductSearchItem product={item} onAdded={onAdded} />
          )}
        />
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  input: {
    margin: 8,
  },
});
