import { keyframes } from 'styled-components';

export const openAnswerAnimation = keyframes`
0% {
  padding-top: 0;
  max-height: 0;
}
25% {
  padding-top: 16px;
}
100% {
  padding-top: 16px;
  max-height: 100vh;
}
`;

export const closeAnswerAnimation = keyframes`
0% {
  padding-top: 16px;
  max-height: 100vh;
}
25% {
  padding-top: 0;
}
100% {
  max-height: 0;
}
`;
