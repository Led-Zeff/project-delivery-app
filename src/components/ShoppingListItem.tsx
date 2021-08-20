import React, { useState } from 'react';
import { Checkbox, List, Text } from 'react-native-paper';
import { ShoppingDocument } from '../model/Shopping';
import { FormatUtils } from '../utils/FormatUtils';

interface Props {
  shoppingItem: ShoppingDocument;
}

export const ShoppingListItem = ({ shoppingItem: item }: Props) => {
  const [checked, setChecked] = useState(false);

  return (
    <List.Item
      key={item.id}
      title={item.name}
      right={() => (
        <>
          <Text style={{ alignSelf: 'center', marginRight: 4 }}>
            {item.quantity} x {FormatUtils.currency(item.price)}
          </Text>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => setChecked(!checked)}
          />
        </>
      )}
    />
  );
};
