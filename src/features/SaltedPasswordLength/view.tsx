import {useAtom} from '@reatom/react';
import style9 from 'style9';
import {Label} from '../../ui/Label';
import {TextField} from '../../ui/TextField';
import {saltedPasswordLength} from './context';

const saltedPasswordLengthStyles = style9.create({
    textFieldWrapper: {
        width: 'auto',
    },
    textFieldInput: {
        width: '50px',
    },
});

export function SaltedPasswordLength(): JSX.Element {
    const [saltedPasswordLengthValue, {change}] = useAtom(saltedPasswordLength);

    return (
        <Label label="Length:">
            <TextField
                type="number"
                size="s"
                wrapperStyles={[saltedPasswordLengthStyles.textFieldWrapper]}
                inputStyles={[saltedPasswordLengthStyles.textFieldInput]}
                value={saltedPasswordLengthValue}
                onChange={change}
            />
        </Label>
    );
}
