import {useAtom} from '@reatom/react';
import {ComponentProps} from 'react';
import style9 from 'style9';

import {Frame} from '../../ui/layout/Frame';
import {Spoiler} from '../../ui/Spoiler';
import {Text} from '../../ui/Text';
import {saltedPassword, showSaltedPassword} from './context';

const generatedPasswordStyles = style9.create({
    spoiler: {
        height: 48,
    },
    valueWrapper: {
        padding: '2px',
    },
});

export function GeneratedPassword(props: Partial<ComponentProps<typeof Spoiler>>): JSX.Element {
    const [saltedPasswordValue] = useAtom(saltedPassword);
    const [showSaltedPasswordValue, {toggle}] = useAtom(showSaltedPassword);

    return (
        <Spoiler
            summary="🙈 Show generated password"
            summaryOff="🙊 Hide generated password"
            styles={[generatedPasswordStyles.spoiler]}
            open={showSaltedPasswordValue}
            onToggle={toggle}
            {...props}
        >
            <Frame styles={[generatedPasswordStyles.valueWrapper]}>
                <Text family="monospace" align="center">{saltedPasswordValue || '< empty >'}</Text>
            </Frame>
        </Spoiler>
    );
}
