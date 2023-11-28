import styled from 'styled-components';

export const LogoWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    column-gap: 4px;
    padding: 6px 0;
    width: fit-content;
`;

export const CompanyName = styled.span`
    color: #173d33;

    font-family: ${({ theme }) => theme.fonts.logo.primary};
    font-size: ${({ theme }) => theme.fontSizes[10]};
    letter-spacing: -2px;
    line-height: 0.8;
`;

export const CompanySlogan = styled.span`
    max-width: 60px;

    font-family: ${({ theme }) => theme.fonts.logo.secondary};
    font-size: ${({ theme }) => theme.fontSizes[0]};
    line-height: 0.9;
    letter-spacing: -0.4px;

    & ._green {
        color: ${({ theme }) => theme.colors.accent};
    }
`;
