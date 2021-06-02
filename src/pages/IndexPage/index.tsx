import {useAtom} from '@reatom/react';
import {JSX} from 'preact';
import style9 from 'style9';
import {context} from '../../context';

import {CopySaltedPasswordButton} from '../../features/CopySaltedPassword';
import {DynamicBackground} from '../../features/DynamicBackground';
import {EmojiPrompt} from '../../features/EmojiPrompt';
import {GeneratedPassword} from '../../features/GeneratedPassword';
import {PasswordSalting} from '../../features/PasswordSalting';
import {SaltedPasswordLength} from '../../features/SaltedPasswordLength';
import {SelectHashFunction} from '../../features/SelectHashFunction';
import {SessionTerminator} from '../../features/SessionTerminator';
import {Frame, overrideFrame} from '../../ui/layout/Frame';
import {VerticalSpacing} from '../../ui/layout/Spacing';
import {Link} from '../../ui/Link';
import {Text} from '../../ui/Text';

const indexPageStyles = style9.create({
    baseLayout: {
        maxWidth: 340,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
        padding: '30px 20px',
        backdropFilter: 'blur(10px)',
        '@media (max-width: 400px)': {
            minHeight: '100vh',
            maxWidth: '100%',
        },
    },
});

const BaseLayout = overrideFrame({styles: [indexPageStyles.baseLayout], as: 'main', def: 'base-layout'});


export function IndexPage(): JSX.Element {
    const [{repoLink, title}] = useAtom(context);

    return (
        <>
            <DynamicBackground />
            <BaseLayout>
                <Text size="xl" weight="semiBold">{title}</Text>
                <Text>...is secure and convenient!</Text>
                <VerticalSpacing size={1} />
                <Link
                    href={repoLink}
                    target="_blank"
                    tabIndex={4}
                >Source code: How it works and what to do if an app become unavailable?</Link>
                <VerticalSpacing size={10} />
                <PasswordSalting />
                <VerticalSpacing size={6} />
                <EmojiPrompt />
                <VerticalSpacing size={6} />
                <Frame direction="row" gap={6}>
                    <SelectHashFunction />
                    <SaltedPasswordLength />
                </Frame>
                <VerticalSpacing size={6} />
                <CopySaltedPasswordButton />
                <VerticalSpacing size={2} />
                <GeneratedPassword />
                <VerticalSpacing size={4} />
                <SessionTerminator />
            </BaseLayout>
        </>
    );
}
