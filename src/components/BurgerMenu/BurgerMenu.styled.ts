import styled from 'styled-components';
import { ContainerWrapper } from '../Container/Container.styled';

export const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 36px 0;

  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.background.backdrop};
  backdrop-filter: blur(2px);

  & ${ContainerWrapper} {
    position: relative;
    display: flex;
    justify-content: end;
    align-items: center;
  }
`;

export const DropDown = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  row-gap: 8px;

  min-width: 100%;
  height: calc(100dvh - 36px * 2);

  border-radius: 25px;
  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.background.dropdown};
  backdrop-filter: blur(12.5px);

  & ul:last-child {
    margin-top: auto;
  }

  @media screen and (min-width: 768px) {
    min-width: 365px;
  }
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: flex-end;

  max-width: fit-content;
  line-height: 1;

  font-size: ${({ theme }) => theme.fontSizes[6]};
  letter-spacing: -0.8px;

  & svg {
    stroke: currentColor;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
