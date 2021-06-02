import {forwardRef} from 'preact/compat';
import {useState} from 'preact/hooks';
import style9 from 'style9';

import {generateString} from '../../utils/random';
import {Button} from '../Button';
import {Frame} from '../layout/Frame';
import {Text, familyStyles} from '../Text';
import {CommonInputProps} from './types';

const passwordFieldStyles = style9.create({
    inputBase: {
        position: 'relative',
    },
    htmlInput: {
        position: 'absolute',
        zIndex: 3,
        color: 'transparent',
        fontWeight: 500,
        '::placeholder': {
            color: 'rgba(0, 0, 0, .4)',
            fontFamily: 'Inter',
        },
    },
    mask: {
        position: 'absolute',
        zIndex: 2,
        userSelect: 'none',
        overflowY: 'hidden',
        justifyContent: 'center',
        color: 'rgba(0, 0, 0, .8)',
    },
});

const mask = generateString(120);

// eslint-disable-next-line react/display-name
export const PasswordInput = forwardRef<HTMLInputElement, CommonInputProps>(({
    value,
    htmlInputStyles,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onValueChange,
    ...props
}: CommonInputProps, htmlInputRef) => {
    const [hidden, setHidden] = useState(true);
    const onShowButtonClick = () => setHidden(!hidden);

    return (
        <>
            <Frame styles={[...htmlInputStyles, passwordFieldStyles.inputBase]} def="input-base">
                <input
                    ref={htmlInputRef}
                    className={style9(
                        ...htmlInputStyles,
                        passwordFieldStyles.htmlInput,
                        familyStyles.monospace,
                    )}
                    value={value}
                    {...props}
                />
                <Frame styles={[
                    ...htmlInputStyles,
                    passwordFieldStyles.mask,
                ]} def="input-mask">
                    <Text family="monospace">
                        {hidden ? mask.slice(0, value.length) : value}
                    </Text>
                </Frame>
            </Frame>
            {value.length > 0 && (
                <Button variant="select" onClick={onShowButtonClick} size="s">
                    {hidden ? 'Show' : 'Hide'}
                </Button>
            )}
        </>
    );
});
