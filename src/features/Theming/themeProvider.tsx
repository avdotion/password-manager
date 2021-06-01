import {ReactNode} from 'react';
import {Frame} from '../../ui/layout/Frame';
import {palette, ThemeName, THEMES, themeStyles} from './palette';

type Props = {
    theme: ThemeName,
    children: ReactNode,
};

export function ThemeProvider({children}: Props): JSX.Element {
    return (
        <Frame styles={[
            palette.basicColors,
            palette.themeIndependent,
            themeStyles[THEMES.light],
        ]} def="theme-provider">
            {children}
        </Frame>
    );
}
