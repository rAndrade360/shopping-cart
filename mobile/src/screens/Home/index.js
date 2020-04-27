import React from 'react';
import { ScrollView, View } from 'react-native';
import ButtonAdd from '../../components/ButtonAdd';
import CardItem from '../../components/CardItem';

// import { Container } from './styles';

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </ScrollView>
      <ButtonAdd />
    </View>
  );
}
