import {JSX} from 'preact';
import {useRef, useState} from 'preact/hooks';
import style9, {Style} from 'style9';
import {ExtendComponentProps} from '../../utils/component';

import {Frame} from '../layout/Frame';
import {familyStyles, sizeStyles, weightStyles} from '../Text';
import {EmailInput} from './email';
import {NumberInput} from './number';
import {PasswordInput} from './password';
import {TextInput} from './text';
import {UrlInput} from './url';

const textFieldStyles = style9.create({
    wrapper: {
        backgroundColor: 'rgb(255, 255, 255)',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        cursor: 'text',
        position: 'relative',
        boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.05)',
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',
        borderBottomRightRadius: '4px',
        borderBottomLeftRadius: '4px',
        transition: 'box-shadow .2s',
    },
    wrapperFocused: {
        boxShadow: '0px 1px 12px rgba(0, 0, 0, 0.15)',
    },
    htmlInput: {
        border: 'none',
        outline: 'none',
        width: '100%',
        height: '28px',
        padding: 0,

        backgroundColor: 'transparent',
        color: 'rgba(0, 0, 0, .8)',
        caretColor: 'rgba(0, 0, 0, .8)',

        fontSize: 14,

        '::placeholder': {
            color: 'rgba(0, 0, 0, .4)',
            fontWeight: 500,
        },
    },
});

type TextFieldSize = 's' | 'm';
const textFieldWrapperSize = style9.create<Record<TextFieldSize, Style>>({
    s: {
        padding: '2px 16px',
    },
    m: {
        padding: '6px 22px',
    },
});
const textFieldHtmlInputSize = style9.create<Record<TextFieldSize, Style>>({
    s: {
        height: '20px',
    },
    m: {
        height: '28px',
    },
});

const INPUT_COMPONENTS = {
    password: PasswordInput,
    text: TextInput,
    url: UrlInput,
    email: EmailInput,
    number: NumberInput,
} as const;
type InputType = keyof typeof INPUT_COMPONENTS;

type InputProps = ExtendComponentProps<JSX.IntrinsicElements['input'], {
    type: InputType,
    size?: TextFieldSize,
    value: string | number,
    wrapperStyles?: Style[],
    inputStyles?: Style[],
    onChange: (newValue: string | number) => void,
}>;

export function TextField({
    type,
    size = 'm',
    wrapperStyles = [],
    inputStyles = [],
    onChange,
    ...props
}: InputProps): JSX.Element {
    const onInputChange = event => onChange(event.target.value);

    const htmlInputRef = useRef<HTMLInputElement | null>(null);
    const onWrapperClick = () => htmlInputRef.current && htmlInputRef.current.focus();

    const [focused, setFocused] = useState(false);
    const onInputFocus = () => setFocused(true);
    const onInputBlur = () => setFocused(false);

    const InputComponent = INPUT_COMPONENTS[type] || TextInput;

    return (
        <Frame
            styles={[
                textFieldStyles.wrapper,
                textFieldWrapperSize[size],
                focused && textFieldStyles.wrapperFocused,
                ...wrapperStyles,
            ]}
            def="pseudo-input"
            onClick={onWrapperClick}
        >
            <InputComponent
                // @ts-expect-error TODO: the ref is not a ref
                ref={htmlInputRef}
                htmlInputStyles={[
                    textFieldStyles.htmlInput,
                    textFieldHtmlInputSize[size],
                    familyStyles.default,
                    sizeStyles.m,
                    weightStyles.regular,
                    ...inputStyles,
                ]}
                type={type}
                onChange={onInputChange}
                onValueChange={onChange}
                onFocus={onInputFocus}
                onBlur={onInputBlur}
                {...props}
            />
        </Frame>
    );
}
