import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { ActivityIndicator, List, useTheme } from 'react-native-paper';
import { ShoppingDocument } from '../model/Shopping';
import { useStore } from '../stores/store';
import { ShoppingListItem } from './ShoppingListItem';

export const ShoppingList = () => {
  const { colors } = useTheme();
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
    return <ActivityIndicator color={colors.accent} />;
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
