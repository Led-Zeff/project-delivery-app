import React, { useEffect, useRef } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { appStyles } from '../../theme/paperTheme';

const Loading = () => {
  const isVisible = useRef(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      isVisible.current = true;
    }, 300);

    return () => clearTimeout(timeout);
  });

  return isVisible ? (
    <ActivityIndicator size={50} style={appStyles.loading} />
  ) : null;
};

export default Loading;
