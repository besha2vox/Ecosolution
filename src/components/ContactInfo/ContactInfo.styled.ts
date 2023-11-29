import styled from 'styled-components';

export const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;

    & address {
      margin-right: auto;
    }

    & p {
      margin-left: 50px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    & p {
      margin-left: 167px;
    }
  }

  & a:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
