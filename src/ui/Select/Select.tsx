import style9 from 'style9';
import {ExtendComponentProps} from '../../utils/component';
import {familyStyles, sizeStyles} from '../Text';

const selectStyles = style9.create({
    reset: {
        appearance: 'none',
        backgroundColor: 'transparent',
        outline: 'none',
    },
    appearance: {
        position: 'relative',
        border: '1px solid rgba(0, 0, 0, 0.06)',
        boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.05)',
        padding: '2px 16px',
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6,
        borderBottomLeftRadius: 6,
        cursor: 'pointer',
        backgroundColor: '#fff',
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
