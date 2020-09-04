import styled from 'styled-components';

export const StyledButton = styled.button`
  color: #fff;
  background-color: #00c8b3;
  border: none;
  border-radius: 50px;
  padding: 5px 60px;
  height: 45px;
  transition: all 0.3s ease;

  :hover {
    background-color: rgba(0, 200, 179, 0.7);
  }

  :disabled {
    color: #dddcdc;
    background-color: #f6f6f6;
  }
`;
