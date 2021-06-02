import {JSX} from 'preact';
import style9, {Style} from 'style9';
import {TextColorsStyle} from '../../features/Theming';
import {ExtendComponentProps} from '../../utils/component';
import {Frame} from '../layout/Frame';
import {Text} from '../Text';

const linkStyle = style9.create({
    default: {
        fontStyle: 'italic',
        textDecorationLine: 'none',
        ':hover': {
            textDecorationLine: 'underline',
        }
    },
    mark: {
        display: 'inline',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
});

type LinkProps = ExtendComponentProps<JSX.IntrinsicElements['a'], {
    styles?: Style[],
    color?: TextColorsStyle,
}>

export function Link({
    styles = [],
    children,
    ...props
}: LinkProps): JSX.Element {
    return (
        <Text as="a" {...props} styles={[linkStyle.default, ...styles]}>
            <Frame styles={[linkStyle.mark]} as="mark">{children}</Frame>
        </Text>
    );
}
