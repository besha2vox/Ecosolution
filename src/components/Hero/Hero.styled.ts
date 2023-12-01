import styled from 'styled-components';

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.accent};

  & p {
    text-align: justify;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas: 'title description' 'title button';

    & p {
      grid-area: description;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  padding: 4px 4px 4px 16px;
  justify-content: center;
  align-items: center;
  column-gap: 12px;

  max-width: fit-content;

  border-radius: 500px;
  background-color: transparent;
  border-radius: 500px;
  border: 1px solid #97d28b;

  & svg {
    stroke: currentColor;
  }

  &:hover {
    background-color: ${({ theme }) => theme.background.dark};
    color: ${({ theme }) => theme.colors.accent};
    border-color: transparent;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-area: button;
  }
`;

export const Ellipse = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.accent};
`;
