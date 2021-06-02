import {JSX} from 'preact';
import style9 from 'style9';
import {ExtendComponentProps} from '../../utils/component';
import {familyStyles, sizeStyles} from '../Text';

const selectStyles = style9.create({
    reset: {
        appearance: 'none',
        backgroundColor: 'transparent',
    },
    appearance: {
        position: 'relative',
        border: '1px solid var(--select-border)',
        boxShadow: '0px 1px 1px var(--select-shadow)',
        padding: '2px 16px',
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6,
        borderBottomLeftRadius: 6,
        cursor: 'pointer',
        backgroundColor: 'var(--select-bg)',
        color: 'var(--select-color)',
    },
});

type SelectProps = ExtendComponentProps<JSX.IntrinsicElements['select'], {
    onChange: (value: string) => void,
}>;

export function Select({
    onChange,
    ...props
}: SelectProps): JSX.Element {
    return (
        <select
            className={style9(
                selectStyles.reset,
                selectStyles.appearance,
                familyStyles.default,
                sizeStyles.m,
            )}
            onChange={e => onChange(e.target.value)}
            {...props}
        />
    );
}
