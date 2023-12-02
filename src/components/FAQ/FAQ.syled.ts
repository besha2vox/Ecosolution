import styled, { css } from 'styled-components';

import { closeAnswerAnimation, openAnswerAnimation } from './animations';

export const containerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: flex-start;
    flex-direction: row-reverse;
    column-gap: 24px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    column-gap: 48px;
  }
`;

export const QAndAList = styled.ul`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: calc((100% - 24px) / 2);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: calc((100% - 48px) / 2);
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: start;
  column-gap: 8px;
  padding: 16px 0;

  text-align: justify;

  border-top: 1px solid ${({ theme }) => theme.colors.accent};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    column-gap: 16px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    column-gap: 24px;
    padding: 24px 0;
  }
`;

export const Button = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  & .plus {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;
    transition: opacity ${({ theme }) => theme.transition};
  }

  &.active {
    & .plus {
      opacity: 0;
    }
  }
`;

export const Question = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[4]};
  letter-spacing: -0.97px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes[6]};
  }
`;

export const Answer = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[2]};
  letter-spacing: -0.56px;
  max-height: 0;
  overflow: hidden;

  &.open {
    animation-name: ${openAnswerAnimation};
    animation-fill-mode: forwards;
  }

  &.close {
    max-height: 100vh;
    animation-name: ${closeAnswerAnimation};
    animation-fill-mode: forwards;
  }

  animation-duration: 300ms;
  animation-timing-function: linear;
  animation-iteration-count: 1;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes[3]};
  }
`;

export const FAQWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  row-gap: 12px;

  width: calc((100% - 24px) / 2);

  & p {
    margin-top: auto;
  }

  & button {
    margin: 0 auto;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: calc((100% - 48px) / 2);
    text-align: center;

    & h2 {
      margin: 0 auto;
      max-width: 398px;
      text-align: start;
    }

    & p {
      font-size: ${({ theme }) => theme.fontSizes[6]};
    }
  }
`;
