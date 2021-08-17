import React from 'react';
import { List } from 'react-native-paper';

export const ShoppingList = () => {
  return (
    <List.Section>
      <List.Subheader>Por comprar</List.Subheader>
      <List.Item title="This" left={() => <List.Icon icon="alarm" />} />
      <List.Item title="That" left={() => <List.Icon icon="alarm-light" />} />
    </List.Section>
  );
};
