import {JSX} from 'preact';
import style9 from 'style9';
import {ExtendComponentProps} from '../../utils/component';
import {Frame} from '../layout/Frame';
import {Text} from '../Text';

const labelStyle = style9.create({
    wrapper: {
        width: 'auto',
    },
    label: {
        color: 'var(--label-color)',
    },
    content: {
        display: 'block',
    },
});

type LabelProps = ExtendComponentProps<JSX.IntrinsicElements['label'], {
    label: string,
}>;

export function Label({
    label,
    children,
}: LabelProps): JSX.Element {
    return (
        <Frame
            as="label"
            gap={2}
            styles={[labelStyle.wrapper]}
        >
            <Text styles={[labelStyle.label]}>{label}</Text>
            <Frame styles={[labelStyle.content]}>{children}</Frame>
        </Frame>
    );
}
