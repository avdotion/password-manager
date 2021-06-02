import {JSX} from 'preact';
import {useAtom} from '@reatom/react';

import {SALTED_PASSWORD_MAX_LENGTH, SALTED_PASSWORD_MIN_LENGTH} from '../../constants';
import {Label} from '../../ui/Label';
import {Option, Select} from '../../ui/Select';
import {range} from '../../utils/syntax';
import {saltedPasswordLength} from './context';

export function SaltedPasswordLength(): JSX.Element {
    const [saltedPasswordLengthValue, {change}] = useAtom(saltedPasswordLength);

    return (
        <Label label="Length:">
            <Select
                value={saltedPasswordLengthValue}
                tabIndex={3}
                onChange={change}
            >
                {range(SALTED_PASSWORD_MIN_LENGTH, SALTED_PASSWORD_MAX_LENGTH+1, 5).map(length => (
                    <Option value={length} key={length}>{length}</Option>
                ))}
            </Select>
        </Label>
    );
}
