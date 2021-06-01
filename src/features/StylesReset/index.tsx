import 'modern-css-reset';

import {overrideFrame} from '../../ui/layout/Frame';

const defaultStyles = {
    font: {
        fontFamily: 'Inter, sans-serif',
    },
};

export const ResetStyles = overrideFrame({def: 'reset-styles', styles: [defaultStyles.font]});
