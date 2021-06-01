import {declareAtom as atom} from '@reatom/core';

const scalarChange = (newValue: string): string => newValue;
export const masterPassword = atom('', {change: scalarChange});
export const domainName = atom('', {change: scalarChange});
export const email = atom('', {change: scalarChange});
