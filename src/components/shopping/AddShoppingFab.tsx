import React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

interface Props {
  onPress: () => void;
}

export const AddShoppingFab = (props: Props) => {
  return <FAB style={styles.fab} icon="plus" {...props} />;
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
