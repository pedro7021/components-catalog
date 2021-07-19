import styled, { css } from 'styled-components';

type showScrollProps = {
  showScroll: boolean;
};

export const Container = styled.a<showScrollProps>`
  ${({ theme, showScroll }) => css`
    position: fixed;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    display: ${showScroll ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    bottom: 2rem;
    right: 2rem;
    z-index: 6;
    transition: all 0.3s;
    opacity: 0.7;
    :hover {
      opacity: 1;
    }
  `}
`;
