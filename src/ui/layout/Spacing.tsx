import {overrideFrame} from './Frame';

export const VerticalSpacing = overrideFrame({def: 'spacing'}, {size: 'height'} as const);

