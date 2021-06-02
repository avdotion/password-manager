import {ComponentChildren, JSX} from 'preact';
import {useEffect, useState} from 'preact/hooks';
import {Frame} from '../../ui/layout/Frame';
import {ThemeName, THEMES, themeStyles} from './palette';

type ThemeProviderProps = {
    overrideTheme?: string,
    children?: ComponentChildren,
};

export function ThemeProvider({overrideTheme, children}: ThemeProviderProps): JSX.Element {
    const detectedTheme = useThemeListener();
    const theme = overrideTheme in THEMES ? overrideTheme : detectedTheme;

    return (
        <Frame styles={[
            themeStyles[theme],
        ]} def="theme-provider">
            {children}
        </Frame>
    );
}

function useThemeListener() {
    const isNightTime = matchMedia('(prefers-color-scheme: dark)').matches;

    const [theme, setTheme] = useState<ThemeName>(
        isNightTime ? THEMES.dark : THEMES.light
    );

    useEffect(() => {
        matchMedia('(prefers-color-scheme: dark)').addListener(
            e => e.matches && setTheme(THEMES.dark)
        );

        matchMedia('(prefers-color-scheme: light)').addListener(
            e => e.matches && setTheme(THEMES.light)
        );
    });

    return theme;
}
