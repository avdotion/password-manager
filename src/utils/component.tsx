import {ComponentProps, FunctionComponent, JSX} from 'preact';

import {keysOf} from './syntax';

export function overrideComponent<FC extends FunctionComponent, P extends ComponentProps<FC>>(Component: FC) {
    return function <M extends Record<string, keyof P>>(overrideProps: P, mapping?: M) {
        // eslint-disable-next-line react/function-component-definition
        return function OverriddenComponent(mappedProps: Exclude<P, M[keyof M]> & {[K in keyof M]: P[M[K]]}): JSX.Element {
            if (!mapping) {
                return (
                    <Component {...mappedProps as never} {...overrideProps as never} />
                );
            }

            const props = {};
            for (const key of keysOf(mapping)) {
                if (key in mappedProps) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    props[mapping[key] as any] = mappedProps[key];
                } else {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    props[key as any] = mappedProps[key];
                }
            }

            return (
                <Component {...props as never} {...overrideProps} />
            );
        };
    };
}

export type ExtendComponentProps<
    ComponentProps,
    Props
> = Props & Omit<ComponentProps, keyof Props>;
