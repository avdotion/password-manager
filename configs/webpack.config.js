const {resolve: pathResolve} = require('path');
const {DefinePlugin} = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Style9Plugin = require('style9/webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StatoscopeWebpackPlugin = require('@statoscope/webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const browsersList = require('./browserslist');
const contextFactory = require('./context');

const ENVIRONMENT = process.env.ENVIRONMENT;
const context = contextFactory[ENVIRONMENT];

const STATOSCOPE = process.env.STATOSCOPE === 'true';

module.exports = {
    entry: {
        app: pathResolve(context.paths.SRC, 'index.tsx'),
    },
    output: {
        path: context.paths.DIST,
        filename: '[name].bundle.js',
    },
    mode: ENVIRONMENT,
    target: 'web',
    ...(ENVIRONMENT === 'development' && {
        devtool: 'inline-source-map',
        devServer: {
            contentBase: context.paths.DIST,
            hot: true,
        },
    }),
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
            react: 'preact/compat',
            'react-dom': 'preact/compat',
        },
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts|js|mjs|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', {
                                    targets: browsersList,
                                }],
                                ['@babel/preset-typescript', {
                                    jsxPragma: 'h',
                                }],
                            ],
                            plugins: [
                                ['@babel/plugin-transform-react-jsx', {
                                    runtime: 'automatic',
                                    importSource: 'preact',
                                }],
                            ],
                        }
                    },
                    Style9Plugin.loader,
                ]
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    ['postcss-preset-env', {browsers: browsersList}],
                                    ['flex-gap-polyfill'],
                                ],
                            },
                        },
                    },
                ]
            },
        ],
    },
    plugins: [
        new DefinePlugin({
            'process.env.CONTEXT': JSON.stringify(context),
        }),
        new HtmlWebpackPlugin({
            template: pathResolve(context.paths.SRC, 'index.html'),
            templateParameters: {
                title: context.title,
                rootContainerId: context.rootContainerId,
            },
        }),
        new Style9Plugin(),
        new MiniCssExtractPlugin(),
        STATOSCOPE && (
            new StatoscopeWebpackPlugin({
                saveTo: pathResolve(context.paths.PROJECT_ROOT, 'reports', 'stats-[hash]-statoscope.html'),
                saveStatsTo: pathResolve(context.paths.PROJECT_ROOT, 'reports', 'stats-[hash]-statoscope.json'),
            })
        ),
    ].filter(Boolean),
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    type: 'css/mini-extract',
                    chunks: 'all',
                    enforce: true,
                }
            }
        },
        minimize: ENVIRONMENT === 'production',
        minimizer: [
            new TerserPlugin(),
        ],
    },
};
