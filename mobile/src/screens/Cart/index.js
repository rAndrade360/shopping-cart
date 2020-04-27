import React from 'react';
import { View } from 'react-native';

import Message from '../../components/Message';
import ButtonAdd from '../../components/ButtonAdd';

import { Container } from './styles';

export default function Cart() {
  return (
    <View style={{ flex: 1 }}>
      <Message />

      <ButtonAdd />
    </View>
  );
}
