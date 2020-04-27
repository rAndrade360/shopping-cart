import styled from 'styled-components/native';

export const Container = styled.Modal`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;
export const Form = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const FormTitle = styled.Text`
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #999;
`;

export const TextField = styled.TextInput`
  padding: 10px;
  width: 80%;
  border: 1px solid #3333;
  margin-bottom: 15px;
  border-radius: 7px;
`;

export const ButtonSubmit = styled.TouchableOpacity`
  width: 80%;
  justify-content: center;
  align-items: center;
  background-color: #9c27b0;
  padding: 15px;
  border-radius: 7px;
  box-shadow: 1px 1px 1px #333;
  elevation: 1;
`;

export const TextButtonSubmit = styled.Text`
  color: #fff;
`;

export const ButtonClose = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
`;
