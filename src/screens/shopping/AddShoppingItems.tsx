import React, { useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { Appbar, TextInput, useTheme } from 'react-native-paper';

interface Props extends StackScreenProps<any, any> {}

export const AddShoppingItems = ({ navigation }: Props) => {
  const { colors } = useTheme();
  const [focus, setFocus] = useState(false);

  return (
    <>
      <Appbar.Header>
        {navigation.canGoBack() ? (
          <Appbar.BackAction onPress={navigation.goBack} />
        ) : null}
        <Appbar.Content title="Agregar producto" />
      </Appbar.Header>

      <TextInput
        placeholder="Buscar producto"
        mode="outlined"
        dense
        style={styles.input}
        autoFocus
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        right={
          <TextInput.Icon
            name="magnify"
            color={focus ? colors.primary : undefined}
          />
        }
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 8,
    marginVertical: 4,
  },
});
