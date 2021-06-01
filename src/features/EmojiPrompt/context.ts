// An order is very important, replace wisely!
import {declareAtom as atom} from '@reatom/core';
import {COLORFUL_EMOJIS_ORDERED_LIST, DEFAULT_EMOJI} from '../../constants';
import {stringToNumber} from '../../utils/crypto';
import {extractHost} from '../../utils/url';
import {domainName, email, masterPassword} from '../PasswordSalting';

const pickEmoji = (value: string) => {
    const index = stringToNumber(value) % COLORFUL_EMOJIS_ORDERED_LIST.length;

    return COLORFUL_EMOJIS_ORDERED_LIST[index];
};

const SALT_SHIFT = 'shift';
export const emojiPrompt = atom(
    ($): [string, string, string] => {
        if ($(masterPassword) === '') {
            return [
                DEFAULT_EMOJI,
                DEFAULT_EMOJI,
                DEFAULT_EMOJI,
            ];
        }
        if ($(domainName) === '') {
            return [
                pickEmoji($(masterPassword)),
                DEFAULT_EMOJI,
                DEFAULT_EMOJI,
            ];
        }

        return [
            pickEmoji($(masterPassword)),
            pickEmoji(extractHost($(domainName)) + $(email)),
            pickEmoji(extractHost($(domainName)) + $(email) + SALT_SHIFT),
        ];
    }
);
