import {HTMLAttributes, ReactNode, SVGProps} from 'react';
import style9, {Style} from 'style9';

import {ExtendComponentProps, overrideComponent} from '../../utils/component';

export type Size = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

const heightStyles = style9.create<Record<Size, Style>>({
    1: {height: 4}, 2: {height: 8}, 3: {height: 12}, 4: {height: 16}, 5: {height: 20},
    6: {height: 24}, 7: {height: 28}, 8: {height: 32}, 9: {height: 36}, 10: {height: 40},
});

const widthStyles = style9.create<Record<Size, Style>>({
    1: {width: 4}, 2: {width: 8}, 3: {width: 12}, 4: {width: 16}, 5: {width: 20},
    6: {width: 24}, 7: {width: 28}, 8: {width: 32}, 9: {width: 36}, 10: {width: 40},
});

const gapStyles = style9.create<Record<Size, Style>>({
    1: {gap: 4}, 2: {gap: 8}, 3: {gap: 12}, 4: {gap: 16}, 5: {gap: 20},
    6: {gap: 24}, 7: {gap: 28}, 8: {gap: 32}, 9: {gap: 36}, 10: {gap: 40},
});

type Direction = 'column' | 'row';
const directionStyles = style9.create<Record<Direction, Style>>({
    column: {
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row',
    },
});

const frameStyles = style9.create({
    default: {
        display: 'flex',
        width: '100%',
    },
});

type ValueOf<T> = T[keyof T];
type Filter<Collection, Value> = ValueOf<{[K in keyof Collection]: Collection[K] extends Value ? never : K}>;
type ElementTag = Filter<JSX.IntrinsicElements, SVGProps<
    SVGRectElement | SVGSymbolElement | SVGClipPathElement | SVGFilterElement | SVGElement
>>;

type FrameProps = ExtendComponentProps<HTMLAttributes<HTMLElement>, {
    as?: ElementTag,
    children?: ReactNode,
    styles?: Style[],
    def?: string,

    width?: Size,
    height?: Size,
    gap?: Size,
    direction?: Direction,
}>;

export function Frame({
    as: Tag = 'div',
    children,
    styles,
    def = 'frame',

    width,
    height,
    gap,
    direction = 'column',

    ...props
}: FrameProps): JSX.Element {
    return (
        <Tag
            data-def={def}
            className={style9(
                frameStyles.default,
                width && widthStyles[width],
                height && heightStyles[height],
                gap && gapStyles[gap],
                direction && directionStyles[direction],
                ...(styles || []),
            )}
            {...props}
        >
            {children}
        </Tag>
    );
}

export const overrideFrame = overrideComponent(Frame);
