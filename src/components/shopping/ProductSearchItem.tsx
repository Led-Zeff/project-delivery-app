import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { StyleSheet, View } from 'react-native';
import { Colors, List, Text, TouchableRipple } from 'react-native-paper';
import { ProductDocument } from '../../model/Product';
import { appSpacing, appStyles } from '../../theme/paperTheme';
import { useStore } from '../../stores/store';
import { ShoppingDocument } from '../../model/Shopping';

interface Props {
  product: ProductDocument;
  onAdded?: () => void;
}

export const ProductSearchItem = observer(({ product, onAdded }: Props) => {
  const {
    shoppingStore: { isAdded, addItem },
  } = useStore();
  const [isNewAdded, setIsNewAdded] = useState(false);

  const addToShoppingList = () => {
    const item: ShoppingDocument = {
      product: {
        name: product.name,
        productId: product.id ?? '',
      },
      quantity: 1,
    };

    addItem(item).then(shopping => {
      if (shopping) {
        setIsNewAdded(true);
      }
      onAdded && onAdded();
    });
  };

  return (
    <TouchableRipple onPress={addToShoppingList}>
      <View style={styles.container}>
        <Text style={[appStyles.text, styles.name]}>{product.name}</Text>

        {isAdded(product.id || product.name) || isNewAdded ? (
          <List.Icon icon="basket" color={Colors.green300} />
        ) : null}
      </View>
    </TouchableRipple>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: appSpacing.md,
    paddingRight: appSpacing.sm,
    height: 50,
  },
  name: {
    flex: 1,
    marginVertical: appSpacing.sm,
  },
});
