import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.h1`
  margin-bottom: 10px;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px auto;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const LoaderContainer = styled.div`
  margin-top: 100px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
