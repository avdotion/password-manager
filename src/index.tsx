import {JSX, render} from 'preact';
import {match} from 'path-to-regexp';

import {CONTEXT} from './context';

import {Root} from './features/Root';
import {valuesOf} from './utils/syntax';

const resolveCurrentPage = async (url: string): Promise<[() => JSX.Element, Record<string, unknown>]> => {
    const parsedUrl = new URL(url);
    const pathname = parsedUrl.pathname;
    const queryParams = Object.fromEntries(parsedUrl.searchParams);

    const basePrefix = (new URL(CONTEXT.selfLink)).pathname;

    for (const route of valuesOf(CONTEXT.routes)) {
        const {controller, overrideParams, path} = route;
        const matcher = match(basePrefix + path);
        const result = matcher(pathname);

        if (!result) {
            continue;
        }

        const params = {
            ...queryParams,
            ...result.params,
            ...overrideParams,
        };

        return import(`./pages/${controller}/index`)
            .then(module => [module.default, params]);
    }

    return Promise.resolve([() => <h1>Not Found!</h1>, {}]);
};

async function main() {
    const currentUrl = document.location.href;
    const [CurrentPage, params] = await resolveCurrentPage(currentUrl);

    const rootElement = document.getElementById(CONTEXT.rootContainerId);
    render(<Root Content={CurrentPage} params={params} />, rootElement);
}

main()
    .catch(e => {
        console.error(e);
    });
