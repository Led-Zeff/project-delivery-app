import React, { useState } from 'react';
import { TextStyle } from 'react-native';
import { Searchbar } from 'react-native-paper';

interface Props {
  style?: TextStyle;
  placeholder?: string;
  onChange?: (text: string) => void;
}

export const SearchInput = ({ onChange, ...props }: Props) => {
  const [search, setSearch] = useState('');

  const onChangeText = (text: string) => {
    setSearch(text);
    onChange && onChange(text);
  };

  return (
    <Searchbar
      value={search}
      onChangeText={onChangeText}
      {...props}
      autoFocus
    />
  );
};
