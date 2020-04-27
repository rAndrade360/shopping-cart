import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 10px;
`;
 export const Avatar = styled.Image`
    width: 100%;
    height: 250px;
 `;

 export const Name = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
 `;

export const BodyContainer = styled.View`
  padding: 15px;
  background-color: #FFF;
`;

export const ActionButton = styled.TouchableOpacity`
    background-color: #9C27B0;
    justify-content: center;
    align-items: center;
    padding: 12px;
    border-radius: 5px;
    margin-top: 5px;
`;
export const TextActionButton = styled.Text`
    color: #FFF;
    font-size: 16px;
`;