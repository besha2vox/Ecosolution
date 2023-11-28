import { useState } from 'react';

import { TDevice } from '../types';

export const useWindowWidth = (): TDevice => {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    const handleWidth = () => {
        setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWidth);

    if (windowWidth <= 768) return 'mobile';
    if (windowWidth >= 1280) return 'desktop';
    return 'tablet';
};
