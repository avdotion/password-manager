import {ReactNode} from 'react';
import style9 from 'style9';

import {overrideFrame} from '../../ui/layout/Frame';
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
    },
});
const Easel = overrideFrame({styles: [easelStyles.defaults], def: 'easel'});

type Props = {
    provideHeader?: boolean,
    provideFooter?: boolean,
    children: ReactNode,
};

export function Root({
    children: content,
}: Props): JSX.Element {
    return (
        <ResetStyles>
            <ThemeProvider theme="light">
                <Easel>
                    {content}
                </Easel>
            </ThemeProvider>
        </ResetStyles>
    );
}
