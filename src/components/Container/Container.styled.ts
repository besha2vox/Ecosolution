import styled from 'styled-components';

import { TDevice } from '../../types';

interface CContainerWrapperProps {
    device: TDevice;
}

export const ContainerWrapper = styled.div<CContainerWrapperProps>`
    margin: 0 auto;
    padding: 0 20px;
    max-width: ${({ theme, device }) => theme.breakpoints[device]};
`;
