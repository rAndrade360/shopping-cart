import React from 'react';
import {
  Container,
  Form,
  TextField,
  ButtonSubmit,
  TextButtonSubmit,
  ButtonClose,
  FormTitle,
} from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { hideModal } from '../../store/ducks/modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Add() {
  const isShow = useSelector((state) => state.modal.showModal);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(hideModal());
  };

  return (
    <Container visible={isShow} style={{ flex: 1 }}>
      <ButtonClose onPress={handleClose}>
        <Icon name="close-circle" color="#9C27B0" size={35} />
      </ButtonClose>
      <Form>
        <FormTitle>Adicionar Carro</FormTitle>
        <TextField placeholder="Marca do carro" />
        <TextField placeholder="Url da imagem" />
        <ButtonSubmit>
          <TextButtonSubmit>Cadastrar</TextButtonSubmit>
        </ButtonSubmit>
      </Form>
    </Container>
  );
}
