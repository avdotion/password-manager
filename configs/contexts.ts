import {resolve as pathResolve} from 'path';
import {readFileSync} from 'fs';
import {invariant} from './utils';

const PROJECT_ROOT = pathResolve(__dirname, '..');
const SRC = pathResolve(PROJECT_ROOT, 'src');
const PACKAGE_JSON = pathResolve(PROJECT_ROOT, 'package.json');
const REPORTS = pathResolve(PROJECT_ROOT, 'reports');
const PATHS = {
    PROJECT_ROOT,
    SRC,
    DIST: pathResolve(PROJECT_ROOT, 'dist'),
    PAGES: pathResolve(SRC, 'pages'),
    PACKAGE_JSON,
    APP_ENTRY_POINT: pathResolve(SRC, 'index.tsx'),
    HTML_TEMPLATE: pathResolve(SRC, 'index.html'),
    REPORTS,
    REPORTS_STATOSCOPE_HTML: pathResolve(REPORTS, 'statoscope-[contenthash].html'),
    REPORTS_STATOSCOPE_JSON: pathResolve(REPORTS, 'statoscope-[contenthash].json'),
} as const;

const packageJson = JSON.parse(readFileSync(PATHS.PACKAGE_JSON, 'utf-8'));

const version: string = packageJson['version'];
invariant(typeof version === 'string', 'App version must be specified in package.json!');

const repoLink: string = packageJson['repository'];
invariant(typeof version === 'string', 'Repository url must be specified in package.json!');

const selfLink: string = packageJson['homepage'];
invariant(typeof version === 'string', 'Homepage url must be specified in package.json!');

type Route<N> = {
    name: N,
    controller: string,
    overrideParams: Record<string, unknown>,
    path: string,
};
export type RuntimeContext = {
    readonly type: string,
    readonly title: string,

    rootContainerId: string,
    readonly version: string,
    readonly repoLink: string,
    readonly selfLink: string,
    routes: Readonly<{[N in string]: Route<N>}>,
};
export type Context = {
    readonly type: string,
    compilerOnly: Readonly<{
        mode: 'development' | 'production',
        paths: typeof PATHS,
    }>,
    runtime: RuntimeContext,
}

const routes: Context['runtime']['routes'] = {
    index: {
        name: 'index',
        controller: 'IndexPage',
        overrideParams: {},
        path: '/',
    },
};
export const contexts: Record<string, Context> = {
    development: {
        type: 'development',
        compilerOnly: {
            mode: 'development',
            paths: PATHS,
        },
        runtime: {
            type: 'development',
            title: 'Password Manager Dev',

            rootContainerId: 'root',
            version,
            repoLink,
            selfLink,
            routes,
        },
    },
    production: {
        type: 'production',
        compilerOnly: {
            mode: 'production',
            paths: PATHS,
        },
        runtime: {
            type: 'production',
            title: 'Password Manager',

            rootContainerId: 'root',
            version,
            repoLink,
            selfLink,
            routes,
        },
    },
};

export function getContextByType(CONTEXT_TYPE: string | undefined): Context {
    invariant(CONTEXT_TYPE in contexts, `Wrong CONTEXT_TYPE, available: ${Object.keys(contexts).join(', ')}`);

    return contexts[CONTEXT_TYPE];
}
