import style9, {Style} from 'style9';
import {ExtendComponentProps} from '../../utils/component';

import {Text} from '../Text';

const buttonStyles = style9.create({
    defaults: {
        border: 'none',
        cursor: 'pointer',
        width: 'auto',
        alignItems: 'center',
        ':focus': {
            outline: 'none',
        },
        userSelect: 'none',
        color: '#000',
    },
});

type VariantStyle = 'select' | 'action' | 'pseudo';
const variantStyles = style9.create<Record<VariantStyle, Style>>({
    select: {
        backgroundColor: '#FFF',
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
            backgroundColor: '#000000',
            color: 'rgba(255, 255, 255, .8)',
            boxShadow: '0px 1px 8px rgba(0, 0, 0, 0.4)',
            border: '2px solid transparent',
            transition: 'box-shadow .5s, color .2s',
        },
        ':hover:not(:disabled)': {
            boxShadow: '0px 1px 18px rgba(0, 0, 0, 0.4)',
            color: 'rgb(255, 255, 255)',
        },
        ':active:not(:disabled)': {
            boxShadow: '0px 1px 18px rgba(0, 0, 0, 0.4), inset 0px -1px 8px rgba(255, 255, 255, 0.6)',
        },
        ':disabled': {
            backgroundColor: 'transparent',
            border: '2px dashed grey',
            cursor: 'not-allowed',
        }
    },
    pseudo: {},
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

type ButtonProps2 = ExtendComponentProps<JSX.IntrinsicElements['button'], {
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
}: ButtonProps2): JSX.Element {
    return (
        <button
            className={style9(
                buttonStyles.defaults,
                variantStyles[variant],
                sizeStyles[size],
                ...(styles || []),
            )}
            {...props}
        >
            <Text size={size}>{text}</Text>
        </button>
    );
}
