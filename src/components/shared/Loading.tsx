import React from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { appStyles } from '../../theme/paperTheme';

const Loading = () => {
  return <ActivityIndicator size={50} style={appStyles.loading} />;
};

export default Loading;
