import {declareAtom as atom} from '@reatom/core';
import {DEFAULT_HASH_FUNCTION_NAME, HASH_FUNCTIONS} from '../../salting';

export const hashFunctionName = atom(DEFAULT_HASH_FUNCTION_NAME, {change: x => x});
export const hashFunction = atom($ => HASH_FUNCTIONS[$(hashFunctionName)]);

