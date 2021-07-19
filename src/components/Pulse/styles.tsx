import styled, { css, keyframes } from 'styled-components';

const pulsing = keyframes`
  100% {
    transform: scale(1.75);
    opacity: 0;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #1f3244;
`;
export const pulse = styled.div`
  background-color: coral;
  height: 20vmax;
  width: 20vmax;
  border-radius: 100%;
  position: relative;
`;
export const ring = styled.div`
  position: absolute;
  background-color: inherit;
  height: 100%;
  width: 100%;
  border-radius: 100%;
  opacity: 0.8;
  animation: ${pulsing} 2s ease-out infinite;

  &:nth-of-type(1) {
    animation-delay: -0.5s;
  }
  &:nth-of-type(2) {
    animation-delay: -1s;
  }
  &:nth-of-type(3) {
    animation-delay: -1.5s;
  }
`;
