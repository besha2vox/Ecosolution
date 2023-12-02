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
