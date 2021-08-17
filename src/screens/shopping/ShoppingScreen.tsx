import React from 'react';
import { Appbar } from 'react-native-paper';
import { ShoppingList } from '../../components/ShoppingList';

export const ShoppingScreen = () => {
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Compras" />
      </Appbar.Header>
      <ShoppingList />
    </>
  );
};
