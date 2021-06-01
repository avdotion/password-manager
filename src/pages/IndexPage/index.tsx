import {createStore} from '@reatom/core';
import style9 from 'style9';
import {reatomContext} from '@reatom/react';

import {CopySaltedPasswordButton} from '../../features/CopySaltedPassword';
import {DynamicBackground} from '../../features/DynamicBackground';
import {EmojiPrompt} from '../../features/EmojiPrompt';
import {GeneratedPassword} from '../../features/GeneratedPassword';
import {PasswordSalting} from '../../features/PasswordSalting';
import {SaltedPasswordLength} from '../../features/SaltedPasswordLength/view';
import {SelectHashFunction} from '../../features/SelectHashFunction';
import {SessionTerminator} from '../../features/SessionTerminator';
import {Frame, overrideFrame} from '../../ui/layout/Frame';
import {VerticalSpacing} from '../../ui/layout/Spacing';
import {Text} from '../../ui/Text';
import {Root} from '../../features/Root';

const indexPageStyles = style9.create({
    baseLayout: {
        maxWidth: 340,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
        padding: '30px 20px',
        backdropFilter: 'blur(10px)',
    },
});

const BaseLayout = overrideFrame({styles: [indexPageStyles.baseLayout], as: 'main', def: 'base-layout'});


export function IndexPage(): JSX.Element {
    const store = createStore();

    return (
        <Root>
            <reatomContext.Provider value={store}>
                <DynamicBackground />
                <BaseLayout>
                    <Text size="xl" weight="semiBold">Password Manager</Text>
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
            </reatomContext.Provider>
        </Root>
    );
}
