import {declareAtom as atom} from '@reatom/core';
import {saltThePass} from '../../salting';
import {domainName, email, masterPassword} from '../PasswordSalting';
import {saltedPasswordLength} from '../SaltedPasswordLength';
import {hashFunction} from '../SelectHashFunction';

export const saltedPassword = atom(
    $ => saltThePass($(hashFunction), $(saltedPasswordLength), $(masterPassword), $(domainName), $(email))
);

export const showSaltedPassword = atom(
    ($, state = false) => {
        $(saltedPassword, () => (state = false));

        return state;
    },
    {
        toggle: (_: void, state) => !state,
    }
);
