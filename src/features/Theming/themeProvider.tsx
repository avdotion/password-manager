import {ComponentChildren, JSX} from 'preact';
import {Frame} from '../../ui/layout/Frame';
import {palette, ThemeName, THEMES, themeStyles} from './palette';

type ThemeProviderProps = {
    theme: ThemeName,
    children: ComponentChildren,
};

export function ThemeProvider({children}: ThemeProviderProps): JSX.Element {
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
