import {declareAtom as atom} from '@reatom/core';
import {SALTED_PASSWORD_DEFAULT_LENGTH} from '../../constants';
import {DEFAULT_HASH_FUNCTION_NAME, HASH_FUNCTIONS} from '../../salting';
import {restoreLocally} from '../StoreLocally';

export const hashFunctionName = atom(
    restoreLocally<number>('hashFunctionName') ?? DEFAULT_HASH_FUNCTION_NAME,
    {change: x => x}
);
export const hashFunction = atom($ => HASH_FUNCTIONS[$(hashFunctionName)]);

