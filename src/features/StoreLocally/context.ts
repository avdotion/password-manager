import {declareAtom as atom} from '@reatom/core';
import {saltedPasswordLength} from '../SaltedPasswordLength';

import {hashFunctionName} from '../SelectHashFunction';
import {storeLocally} from './storeLocally';

export const storeLocallyObserver = atom($ => {
    $(hashFunctionName, value => {
        storeLocally('hashFunctionName', value);
    });
    $(saltedPasswordLength, value => storeLocally('saltedPasswordLength', value));
});
