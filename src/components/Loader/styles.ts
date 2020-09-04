import styled, { keyframes } from 'styled-components';

const ring = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

type Props = {
  color: string;
  size: number;
  thickness: number;
};

export const Container = styled.div<Props>`
  margin: 0px auto;
  position: relative;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    border: ${(props) => props.thickness}px solid ${(props) => props.color};
    border-radius: 50%;
    animation: ${ring} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${(props) => props.color} transparent transparent transparent;

    :nth-child(1) {
      animation-delay: -0.45s;
    }

    :nth-child(2) {
      animation-delay: -0.3s;
    }

    :nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`;
