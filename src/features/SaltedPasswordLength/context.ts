import {declareAtom as atom} from '@reatom/core';
import {SALTED_PASSWORD_DEFAULT_LENGTH, SALTED_PASSWORD_MAX_LENGTH, SALTED_PASSWORD_MIN_LENGTH} from '../../constants';

export const saltedPasswordLength = atom(
    SALTED_PASSWORD_DEFAULT_LENGTH,
    {
        change: (value: number) => {
            if (value > SALTED_PASSWORD_MAX_LENGTH) {
                return SALTED_PASSWORD_MAX_LENGTH;
            }

            if (value < SALTED_PASSWORD_MIN_LENGTH) {
                return SALTED_PASSWORD_MIN_LENGTH;
            }

            return value;
        }
    }
);
