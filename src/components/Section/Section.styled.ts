import styled from 'styled-components';

export const SectionWrapper = styled.section<{ padding: number }>`
  padding: ${({ padding }) => padding} 0;
`;
