import React, { useState } from 'react';
import { SearchInput } from '../../components/shared/SearchInput';
import { FlatList, StyleSheet, View } from 'react-native';
import { ProductDocument } from '../../model/Product';
import { List } from 'react-native-paper';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import Loading from '../../components/shared/Loading';

export const AddShoppingItems = observer(() => {
  const [products, setProducts] = useState<ProductDocument[]>([]);
  const [loading, setLoading] = useState(false);

  const {
    productsStore: { searchProducts },
  } = useStore();

  const search = (text: string) => {
    if (text) {
      setLoading(true);
      searchProducts(text)
        .then(setProducts)
        .finally(() => setLoading(false));
    } else {
      setProducts([]);
    }
  };

  return (
    <View style={styles.container}>
      <SearchInput
        placeholder="Buscar producto"
        style={styles.input}
        onChange={search}
      />

      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={products}
          renderItem={({ item }) => <List.Item title={item.name} />}
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
