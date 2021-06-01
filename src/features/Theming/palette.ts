import style9, {Style} from 'style9';

declare module 'style9' {
    interface CustomProperties {
        gap?: string | number;
        transition?: string,
        ':not(:disabled)'?: Style,
        ':hover:not(:disabled)'?: Style,
        ':active:not(:disabled)'?: Style,
    }
}

declare module 'style9' {
    interface CustomProperties {
        '--green'?: string;
        '--red'?: string;
        '--accent'?: string;
        '--accent-bg'?: string;
        '--root-bg'?: string;
        '--content-bg'?: string;
        '--inactive-element-bg'?: string;
        '--inactive-element-text'?: string;
        '--content-text'?: string;
    }
}

export const {...palette} = style9.create({
    basicColors: {
        '--green': '2, 184, 110',
        '--red': '225, 73, 65',
    },
    themeIndependent: {
        '--accent': 'rgb(var(--green))',
        '--accent-bg': 'rgba(var(--green), 0.1)',
        '--root-bg': 'rgb(214, 218, 224)',
    },
});

export const THEMES = {
    light: 'light',
    dark: 'dark',
    black: 'black',
} as const;
export type ThemeName = keyof typeof THEMES;
export const {...themeStyles} = style9.create<Record<ThemeName, Style>>({
    light: {
        '--content-bg': 'rgb(255, 255, 255)',
        '--inactive-element-bg': 'rgb(246, 248, 249)',
        '--inactive-element-text': 'rgb(108, 114, 122)',
        '--content-text': 'rgb(64, 64, 68)',
    },
    dark: {
        '--content-bg': 'rgb(47, 49, 55)',
        '--inactive-element-bg': 'rgb(56, 59, 66)',
        '--inactive-element-text': 'rgb(134, 140, 147)',
        '--content-text': 'rgb(243, 244, 244)',
    },
    black: {
        '--content-bg': 'rgb(28, 29, 34)',
        '--inactive-element-bg': 'rgb(37, 38, 45)',
        '--inactive-element-text': 'rgb(140, 146, 153)',
        '--content-text': 'rgb(245, 245, 247)',
    },
});

export type TextColorsStyle = 'accent' | 'inactiveElement' | 'content';
export const {...textColors} = style9.create<Record<TextColorsStyle, Style>>({
    accent: {
        color: 'var(--accent)',
    },
    inactiveElement: {
        color: 'var(--inactive-element-text)',
    },
    content: {
        color: 'var(--content-text)',
    },
});
