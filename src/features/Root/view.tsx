import {JSX} from 'preact';
import {createStore} from '@reatom/core';
import {reatomContext} from '@reatom/react';
import style9 from 'style9';

import {context} from '../../context';
import {overrideFrame} from '../../ui/layout/Frame';
import {StoreLocallyConnector} from '../StoreLocally';
import {ResetStyles} from '../StylesReset';
import {ThemeProvider} from '../Theming';

const easelStyles = style9.create({
    defaults: {
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4F4F4',
        position: 'relative',
        overflowY: 'hidden',
        '@media (max-width: 400px)': {
            minHeight: 'auto',
        },
    },
});
const Easel = overrideFrame({styles: [easelStyles.defaults], def: 'easel'});

type Props = {
    Content: () => JSX.Element,
};

export function Root({
    Content,
}: Props): JSX.Element {
    const store = createStore();
    store.init(context);

    return (
        <ResetStyles>
            <ThemeProvider theme="light">
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
