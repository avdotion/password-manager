import {declareAtom as atom} from '@reatom/core';

export type Context = Readonly<{
    rootContainerId: string,
    routes: Record<string, {
        pageLocalPath: string,
    }>,
    paths: Record<string, string>,
    repoLink: string,
    title: string,
    appVersion: string,
}>;

export const rawContext = process.env.CONTEXT as unknown as Context;
export const context = atom(rawContext);
