import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Appbar } from 'react-native-paper';
import { AddShoppingFab } from '../../components/shopping/AddShoppingFab';
import { ShoppingList } from '../../components/shopping/ShoppingList';

interface Props extends StackScreenProps<any, any> {}

export const ShoppingScreen = ({ navigation }: Props) => {
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Compras" />
      </Appbar.Header>

      <ShoppingList />

      <AddShoppingFab onPress={() => navigation.navigate('AddShoppingItems')} />
    </>
  );
};
