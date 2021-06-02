import {JSX} from 'preact';
import style9, {Style} from 'style9';
import {ExtendComponentProps} from '../../utils/component';

import {Text} from '../Text';

const buttonStyles = style9.create({
    default: {
        border: 'none',
        cursor: 'pointer',
        width: 'auto',
        alignItems: 'center',
        userSelect: 'none',
    },
    textDefault: {
        color: 'inherit',
    },
});

type VariantStyle = 'select' | 'action' | 'pseudo';
const variantStyles = style9.create<Record<VariantStyle, Style>>({
    select: {
        backgroundColor: 'var(--button-select-bg)',
        border: '1px solid rgba(0, 0, 0, 0.06)',
        boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.05)',
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6,
        borderBottomLeftRadius: 6,
    },
    action: {
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
        ':not(:disabled)': {
            backgroundColor: 'var(--button-action-bg)',
            color: 'var(--button-action-color)',
            boxShadow: '0px 1px 8px var(--button-action-shadow)',
            border: '2px solid transparent',
            transition: 'box-shadow .5s, color .2s',
        },
        ':hover:not(:disabled)': {
            boxShadow: '0px 1px 18px var(--button-action-shadow-hover)',
            color: 'rgb(255, 255, 255)',
        },
        ':active:not(:disabled)': {
            boxShadow: '0px 1px 18px var(--button-action-shadow-active), inset 0px -1px 8px var(--button-action-shadow-active-inset)',
        },
        ':disabled': {
            backgroundColor: 'transparent',
            color: 'var(--button-action-disabled-color)',
            border: '2px dashed var(--button-action-disabled-dash)',
            cursor: 'not-allowed',
        }
    },
    pseudo: {
        color: 'var(--button-pseudo-color)',
    },
});

type SizeStyle = 's' | 'm' | 'l';
const sizeStyles = style9.create<Record<SizeStyle, Style>>({
    s: {
        padding: '2px 10px',
        fontSize: 10,
    },
    m: {
        padding: '4px',
    },
    l: {
        padding: '5px 16px',
    },
});

type ButtonProps = ExtendComponentProps<JSX.IntrinsicElements['button'], {
    variant: VariantStyle,
    size?: SizeStyle,

    styles?: Style[],
}>;

export function Button({
    children: text,
    variant,
    size = 'm',
    styles,
    ...props
}: ButtonProps): JSX.Element {
    return (
        <button
            className={style9(
                buttonStyles.default,
                variantStyles[variant],
                sizeStyles[size],
                ...(styles || []),
            )}
            {...props}
        >
            <Text
                size={size}
                styles={[buttonStyles.textDefault]}
            >{text}</Text>
        </button>
    );
}
