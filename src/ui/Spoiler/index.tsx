import {ComponentProps, JSX} from 'preact';
import style9 from 'style9';

import {Button} from '../Button';
import {Frame} from '../layout/Frame';

const spoilerStyles = style9.create({
    details: {
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
        transition: 'background-color .3s',
    },
    detailsOpen: {
        backgroundColor: 'var(--spoiler-open-bg)',
    },
    summary: {
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,

        backgroundColor: 'transparent',
        cursor: 'pointer',
        padding: '3px 16px ',
        lineHeight: '16px',
        ':hover': {
            backgroundColor: 'rgba(0, 0, 0, .05)',
        },
        transition: 'background-color .3s',
    },
    summaryOpen: {
        ':hover': {
            backgroundColor: 'transparent',
        },
    }
});

type Props = {
    summary: string,
    summaryOff?: string,
    open: boolean,
    onToggle: () => void,
} & ComponentProps<typeof Frame>;

export function Spoiler({
    summary,
    summaryOff,
    children,
    styles = [],
    open,
    tabIndex,
    onToggle,
    ...props
}: Props): JSX.Element {
    return (
        <Frame
            styles={[spoilerStyles.details, open && spoilerStyles.detailsOpen, ...styles]}
            {...props}
        >
            <Button
                variant="pseudo"
                styles={[spoilerStyles.summary, open && spoilerStyles.summaryOpen]}
                size="m"
                tabIndex={tabIndex}
                onClick={onToggle}
            >{(open && summaryOff) || summary}</Button>
            {open && children}
        </Frame>
    );
}
