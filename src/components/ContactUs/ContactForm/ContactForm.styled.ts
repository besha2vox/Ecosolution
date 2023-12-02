import styled from 'styled-components';
import { Field, Form } from 'formik';

export const FormLayout = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 36px 12px;

  background-color: ${({ theme }) => theme.background.secondary};

  & button {
    align-self: end;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 36px 24px;
    width: 342px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 48px;
    width: calc(50% - 24px);
  }
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  & p {
    position: absolute;
    bottom: -8px;
    right: 0;
    transform: translateY(100%);

    font-size: ${({ theme }) => theme.fontSizes[1]};
    letter-spacing: -0.48px;

    color: ${({ theme }) => theme.colors.error};
  }
`;

export const Input = styled(Field)`
  padding-bottom: 8px;

  font-size: ${({ theme }) => theme.fontSizes[4]};
  letter-spacing: -0.72px;

  color: inherit;
  background-color: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.colors.accent};

  &.invalid {
    border-color: ${({ theme }) => theme.colors.error};
  }

  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }

  &#message {
    height: 147px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.accent};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes[5]};
  }
`;
