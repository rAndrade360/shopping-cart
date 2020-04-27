import React from 'react';
import { StyleSheet } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {showModal} from '../../store/ducks/modal';
import { Container } from './styles';

export default function ButtonAdd() {
  const dispatch = useDispatch();

  const handleClick = ()=>{
    dispatch(showModal())
  }

  return (
    <Container onPress={handleClick}>
      <LinearGradient style={styles.buttonAdd}  colors={['#D500F9', '#4A148C']}>
        <Icon name="plus" size={34} color={'#FFF'} /> 
      </LinearGradient>  
    </Container>     
  );
}

const styles = StyleSheet.create({
    buttonAdd:{
        width: 70,
        height: 70,
        borderRadius: 35,
        justifyContent: "center",
        alignItems: "center",
        elevation: 6,
        shadowColor: '#9C27B0',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5
    }
})
