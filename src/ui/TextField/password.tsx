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
            color: 'var(--text-field-placeholder-color)',
            fontFamily: 'Inter',
        },
    },
    mask: {
        position: 'absolute',
        zIndex: 2,
        userSelect: 'none',
        overflowY: 'hidden',
        justifyContent: 'center',
        color: 'var(--text-field-color)',
        lineHeight: '28px',
        fontFamily: 'Inconsolata',
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
                <Text family="monospace" styles={[
                    ...htmlInputStyles,
                    passwordFieldStyles.mask,
                ]} def="input-mask">
                    {hidden ? mask.slice(0, value.length) : value}
                </Text>
            </Frame>
            {value.length > 0 && (
                <Button variant="select" onClick={onShowButtonClick} size="s">
                    {hidden ? 'Show' : 'Hide'}
                </Button>
            )}
        </>
    );
});
