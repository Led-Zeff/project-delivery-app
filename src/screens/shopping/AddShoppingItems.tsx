import React, { useState } from 'react';
import { SearchInput } from '../../components/shared/SearchInput';
import { FlatList, StyleSheet, View } from 'react-native';
import { ProductDocument } from '../../model/Product';
import { List } from 'react-native-paper';

export const AddShoppingItems = () => {
  const [products, setProducts] = useState<ProductDocument[]>([]);

  const searchProducts = () => {
    setProducts([]);
  };

  return (
    <View style={styles.container}>
      <SearchInput
        placeholder="Buscar producto"
        style={styles.input}
        onChange={searchProducts}
      />

      <FlatList
        data={products}
        renderItem={({ item }) => <List.Item title={item.name} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  input: {
    margin: 8,
  },
});
