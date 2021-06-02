const {resolve: pathResolve} = require('path');
const {readdirSync, readFileSync} = require('fs');

const getDirectories = source => readdirSync(source, {withFileTypes: true})
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

const PROJECT_ROOT = pathResolve(__dirname, '..');
const SRC = pathResolve(PROJECT_ROOT, 'src');
const PATHS = {
    PROJECT_ROOT,
    SRC,
    DIST: pathResolve(PROJECT_ROOT, 'dist'),
    PAGES: pathResolve(SRC, 'pages'),
};

const PACKAGE_JSON_PATH = pathResolve(PATHS.PROJECT_ROOT, 'package.json');
const PACKAGE_JSON = JSON.parse(readFileSync(PACKAGE_JSON_PATH, 'utf-8'));

const commons = {
    rootContainerId: 'root',
    routes: Object.fromEntries(
        getDirectories(PATHS.PAGES).map(pageName => [pageName, {
            pageLocalPath: pathResolve(PATHS.PAGES, pageName),
        }]),
    ),
    paths: PATHS,
    repoLink: PACKAGE_JSON['repository'],
};

module.exports = {
    production: {
        ...commons,
        title: 'Password Manager',
    },
    development: {
        ...commons,
        title: 'Password Manager Dev',
    },
};
