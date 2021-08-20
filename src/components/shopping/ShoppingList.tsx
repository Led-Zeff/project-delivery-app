import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { ActivityIndicator, List } from 'react-native-paper';
import { ShoppingDocument } from '../../model/Shopping';
import { useStore } from '../../stores/store';
import { appStyles } from '../../theme/paperTheme';
import { ShoppingListItem } from './ShoppingListItem';

export const ShoppingList = () => {
  const {
    shoppingStore: { loadShoppingList },
  } = useStore();

  const [isLoading, setIsLoading] = useState(true);
  const [shoppingList, setShoppingList] = useState<ShoppingDocument[]>([]);

  useEffect(() => {
    console.log('Load shopping list');
    return loadShoppingList(list => {
      setShoppingList(list);
      setIsLoading(false);
    });
  }, [loadShoppingList]);

  if (isLoading) {
    return <ActivityIndicator size={50} style={appStyles.loading} />;
  }

  return (
    <List.Section>
      <List.Subheader>Por comprar</List.Subheader>
      <FlatList
        data={shoppingList}
        renderItem={({ item }) => <ShoppingListItem shoppingItem={item} />}
      />
    </List.Section>
  );
};
