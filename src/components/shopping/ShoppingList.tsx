import React, { useEffect, useState } from 'react';
import { Stomp } from '@stomp/stompjs';
import { FlatList } from 'react-native';
import { ActivityIndicator, List } from 'react-native-paper';
import SockJS from 'sockjs-client';
import { useStore } from '../../stores/store';
import { appStyles } from '../../theme/paperTheme';
import { ShoppingListItem } from './ShoppingListItem';

export const ShoppingList = () => {
  const { shoppingStore } = useStore();
  const { shoppingList } = shoppingStore;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('Loading shopping list');
    shoppingStore.loadPage().finally(() => setIsLoading(false));
  }, [shoppingStore]);

  useEffect(() => {
    const socket = new SockJS('http://localhost:8080/delivery-ws');
    socket.onopen = console.log;
    socket.onmessage = console.log;
    const client = Stomp.over(socket);
    client.connect({}, () => {
      client.subscribe('/shopping', msg => console.log(msg.body));
    });
  }, []);

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
};
