import React from 'react';
import { List, Text } from 'react-native-paper';
import { ShoppingDocument } from '../model/Shopping';

interface Props {
  shoppingItem: ShoppingDocument;
}

export const ShoppingListItem = ({ shoppingItem: item }: Props) => {
  return (
    <List.Item
      key={item.id}
      title={item.name}
      right={() => <Text>{item.quantity}</Text>}
    />
  );
};
