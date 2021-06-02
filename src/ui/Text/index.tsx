import {ComponentChildren, JSX} from 'preact';
import style9, {Style} from 'style9';
import {textColors, TextColorsStyle} from '../../features/Theming';
import {ExtendComponentProps} from '../../utils/component';

type HTMLAttributes = JSX.HTMLAttributes;

type FamilyStyle = 'default' | 'monospace';
export const {...familyStyles} = style9.create<Record<FamilyStyle, Style>>({
    default: {
        fontFamily: '\'Inter\', sans-serif',
    },
    monospace: {
        fontFamily: '\'Inconsolata\', monospace',
    },
});

type SizeStyle = 'xs' | 's' | 'm' | 'l' | 'xl';
export const {...sizeStyles} = style9.create<Record<SizeStyle, Style>>({
    xs: {
        fontSize: 9,
    },
    s: {
        fontSize: 10,
    },
    m: {
        fontSize: 11,
    },
    l: {
        fontSize: 18,
    },
    xl: {
        fontSize: 24,
    },
});

type WeightStyle = 'light' | 'regular' | 'medium' | 'semiBold' | 'bold';
export const {...weightStyles} = style9.create<Record<WeightStyle, Style>>({
    light: {
        fontWeight: 300,
    },
    regular: {
        fontWeight: 400,
    },
    medium: {
        fontWeight: 500,
    },
    semiBold: {
        fontWeight: 600,
    },
    bold: {
        fontWeight: 700,
    },
});

type AlignStyle = 'left' | 'center' | 'right';
const alignStyles = style9.create<Record<AlignStyle, Style>>({
    left: {
        textAlign: 'left',
    },
    center: {
        textAlign: 'center',
    },
    right: {
        textAlign: 'right',
    },
});

type TextProps = ExtendComponentProps<HTMLAttributes<HTMLElement>, {
    as?: 'a' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p',
    children: ComponentChildren,
    styles?: Style[],
    def?: string,

    family?: FamilyStyle,
    size?: SizeStyle,
    weight?: WeightStyle,
    align?: AlignStyle,
    color?: TextColorsStyle,
}>;

export function Text({
    children: poem,
    as: Tag = 'span',
    styles = [],
    def = 'text',

    family = 'default',
    size = 'm',
    weight = 'regular',
    align = 'left',
    color,
    ...props
}: TextProps): JSX.Element {
    return (
        <Tag
            data-def={def}
            className={style9(
                familyStyles[family],
                sizeStyles[size],
                weightStyles[weight],
                alignStyles[align],
                textColors[color],
                ...styles,
            )}
            {...props}
        >
            {poem}
        </Tag>
    );
}
