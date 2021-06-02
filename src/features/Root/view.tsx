import {JSX} from 'preact';
import {createStore} from '@reatom/core';
import {reatomContext} from '@reatom/react';
import style9 from 'style9';

import {overrideFrame} from '../../ui/layout/Frame';
import {StoreLocallyConnector} from '../StoreLocally';
import {ResetStyles} from '../StylesReset';
import {ThemeProvider, THEMES} from '../Theming';

const easelStyles = style9.create({
    defaults: {
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'var(--root-bg)',
        position: 'relative',
        overflowY: 'hidden',
        '@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3)': {
            minHeight: 'auto',
        },
    },
});
const Easel = overrideFrame({styles: [easelStyles.defaults], def: 'easel'});

type Props = {
    Content: () => JSX.Element,
    params: Record<string, unknown>,
};

export function Root({
    Content,
    params,
}: Props): JSX.Element {
    const store = createStore();

    return (
        <ResetStyles>
            <ThemeProvider overrideTheme={params?.theme as string | undefined}>
                <Easel>
                    <reatomContext.Provider value={store}>
                        <Content />
                        <StoreLocallyConnector />
                    </reatomContext.Provider>
                </Easel>
            </ThemeProvider>
        </ResetStyles>
    );
}
