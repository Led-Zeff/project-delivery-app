import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { ActivityIndicator, List } from 'react-native-paper';
import { useStore } from '../../stores/store';
import { appStyles } from '../../theme/paperTheme';
import { ShoppingListItem } from './ShoppingListItem';

export const ShoppingList = observer(() => {
  const {
    shoppingStore: { loadPage, shoppingList, wsSubscribe, wsUnsubscribe },
  } = useStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('Loading shopping list');
    loadPage().finally(() => setIsLoading(false));
  }, [loadPage]);

  useEffect(() => {
    wsSubscribe();

    return wsUnsubscribe;
  }, [wsSubscribe, wsUnsubscribe]);

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
});
