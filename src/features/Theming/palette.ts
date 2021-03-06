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
        '--base-layout-bg'?: string,
        '--button-action-bg'?: string,
        '--button-action-color'?: string,
        '--button-action-disabled-color'?: string,
        '--button-action-disabled-dash'?: string,
        '--button-action-shadow'?: string,
        '--button-action-shadow-active'?: string,
        '--button-action-shadow-active-inset'?: string,
        '--button-action-shadow-hover'?: string,
        '--button-pseudo-color'?: string,
        '--button-select-bg'?: string,
        '--label-color'?: string,
        '--link-mark-bg'?: string,
        '--link-mark-color'?: string,
        '--root-bg'?: string,
        '--select-bg'?: string,
        '--select-border'?: string,
        '--select-color'?: string,
        '--select-shadow'?: string,
        '--spoiler-open-bg'?: string,
        '--text-color'?: string,
        '--text-field-bg'?: string,
        '--text-field-color'?: string,
        '--text-field-placeholder-color'?: string,
        '--text-field-shadow'?: string,
        '--text-field-shadow-focus'?: string,

    }
}

export const THEMES = {
    light: 'light',
    dark: 'dark',
    black: 'black',
} as const;
export type ThemeName = keyof typeof THEMES;
export const {...themeStyles} = style9.create<Record<ThemeName, Style>>({
    light: {
        '--base-layout-bg': 'rgba(255, 255, 255, 0.3)',
        '--button-action-bg': 'rgba(0, 0, 0, 1)',
        '--button-action-color': 'rgba(255, 255, 255, .8)',
        '--button-action-disabled-color': 'rgba(0, 0, 0, 0.5)',
        '--button-action-disabled-dash': 'rgba(0, 0, 0, 0.5)',
        '--button-action-shadow': 'rgba(0, 0, 0, 0.4)',
        '--button-action-shadow-active': 'rgba(0, 0, 0, 0.4)',
        '--button-action-shadow-active-inset': 'rgba(255, 255, 255, 0.6)',
        '--button-action-shadow-hover': 'rgba(0, 0, 0, 0.4)',
        '--button-pseudo-color': 'rgba(0, 0, 0, 0.8)',
        '--button-select-bg': 'rgba(255, 255, 255, 1)',
        '--label-color': 'rgba(0, 0, 0, .5)',
        '--link-mark-bg': 'rgba(255, 255, 255, 0.8)',
        '--link-mark-color': 'rgba(0, 0, 0, 0.8)',
        '--root-bg': 'rgb(244, 244, 244)',
        '--select-bg': 'rgba(255, 255, 255, 1)',
        '--select-border': 'rgba(0, 0, 0, 0.05)',
        '--select-color': 'rgba(0, 0, 0, 0.8)',
        '--select-shadow': 'rgba(0, 0, 0, 0.05)',
        '--spoiler-open-bg': 'rgba(0, 0, 0, .05)',
        '--text-color': 'rgba(0, 0, 0, 0.9)',
        '--text-field-bg': 'rgba(255, 255, 255, 1)',
        '--text-field-color': 'rgba(0, 0, 0, .8)',
        '--text-field-placeholder-color': 'rgba(0, 0, 0, .4)',
        '--text-field-shadow': 'rgba(0, 0, 0, 0.05)',
        '--text-field-shadow-focus': 'rgba(0, 0, 0, 0.15)',
    },
    dark: {
        '--base-layout-bg': 'rgba(255, 255, 255, 0.05)',
        '--button-action-bg': 'rgba(0, 0, 0, 0.6)',
        '--button-action-color': 'rgba(255, 255, 255, .6)',
        '--button-action-disabled-color': 'rgba(255, 255, 255, 0.2)',
        '--button-action-disabled-dash': 'rgba(255, 255, 255, 0.2)',
        '--button-action-shadow': 'rgba(0, 0, 0, 0.4)',
        '--button-action-shadow-active': 'rgba(0, 0, 0, 0.4)',
        '--button-action-shadow-active-inset': 'rgba(255, 255, 255, 0.1)',
        '--button-action-shadow-hover': 'rgba(0, 0, 0, 0.4)',
        '--button-pseudo-color': 'rgba(255, 255, 255, 0.5)',
        '--button-select-bg': 'rgba(0, 0, 0, 0.2)',
        '--label-color': 'rgba(255, 255, 255, .5)',
        '--link-mark-bg': 'rgba(255, 255, 255, 0.1)',
        '--link-mark-color': 'rgba(255, 255, 255, 0.6)',
        '--root-bg': 'rgb(40, 40, 40)',
        '--select-bg': 'rgba(0, 0, 0, 0.2)',
        '--select-border': 'rgba(0, 0, 0, 0.05)',
        '--select-color': 'rgba(255, 255, 255, 0.7)',
        '--select-shadow': 'rgba(0, 0, 0, 0.05)',
        '--spoiler-open-bg': 'rgba(0, 0, 0, .05)',
        '--text-color': 'rgba(255, 255, 255, 0.8)',
        '--text-field-bg': 'rgba(255, 255, 255, 0.3)',
        '--text-field-color': 'rgba(0, 0, 0, .8)',
        '--text-field-placeholder-color': 'rgba(0, 0, 0, .4)',
        '--text-field-shadow': 'rgba(0, 0, 0, 0.05)',
        '--text-field-shadow-focus': 'rgba(0, 0, 0, 0.15)',
    },
    black: {
        '--base-layout-bg': 'rgba(255, 255, 255, 0.05)',
        '--button-action-bg': 'rgba(0, 0, 0, 1)',
        '--button-action-color': 'rgba(255, 255, 255, .8)',
        '--button-action-disabled-color': 'rgba(255, 255, 255, 0.2)',
        '--button-action-disabled-dash': 'rgba(255, 255, 255, 0.2)',
        '--button-action-shadow': 'rgba(0, 0, 0, 0.4)',
        '--button-action-shadow-active': 'rgba(0, 0, 0, 0.4)',
        '--button-action-shadow-active-inset': 'rgba(255, 255, 255, 0.2)',
        '--button-action-shadow-hover': 'rgba(0, 0, 0, 0.4)',
        '--button-pseudo-color': 'rgba(255, 255, 255, 0.5)',
        '--button-select-bg': 'rgba(255, 255, 255, 0.1)',
        '--label-color': 'rgba(255, 255, 255, .4)',
        '--link-mark-bg': 'rgba(255, 255, 255, 0.1)',
        '--link-mark-color': 'rgba(255, 255, 255, 0.5)',
        '--root-bg': 'rgb(10, 10, 10)',
        '--select-bg': 'rgba(0, 0, 0, 0.6)',
        '--select-border': 'rgba(0, 0, 0, 0.05)',
        '--select-color': 'rgba(255, 255, 255, 0.8)',
        '--select-shadow': 'rgba(0, 0, 0, 0.05)',
        '--spoiler-open-bg': 'rgba(0, 0, 0, .3)',
        '--text-color': 'rgba(255, 255, 255, 0.8)',
        '--text-field-bg': 'rgba(0, 0, 0, 0.5)',
        '--text-field-color': 'rgba(255, 255, 255, .5)',
        '--text-field-placeholder-color': 'rgba(255, 255, 255, .3)',
        '--text-field-shadow': 'rgba(0, 0, 0, 0.05)',
        '--text-field-shadow-focus': 'rgba(0, 0, 0, 0.15)',
    },
});
