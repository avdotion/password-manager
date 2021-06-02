import {DefinePlugin, Configuration} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {default as Style9Plugin} from 'style9/webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import StatoscopeWebpackPlugin from '@statoscope/webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

import {browsersList} from './browsersList';
import {getContextByType} from './contexts';

const context = getContextByType(process.env.CONTEXT_TYPE);
const shouldBuildStatoscopeReport = process.env.STATOSCOPE_REPORT === 'true';

const webpackConfig: Configuration = {
    entry: {
        app: context.compilerOnly.paths.APP_ENTRY_POINT,
    },
    output: {
        path: context.compilerOnly.paths.DIST,
        filename: '[name].[contenthash].js',
    },

    target: 'web',

    mode: context.compilerOnly.mode,
    ...(context.compilerOnly.mode === 'development' ? {
        devtool: 'inline-source-map',
        devServer: {
            contentBase: context.compilerOnly.paths.DIST,
            hot: true,
        },
    } : {}),

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        // TODO: Remove when @reatom/preact@2 become available
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
                    (Style9Plugin.loader as unknown),
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
            'process.env.RUNTIME_CONTEXT': JSON.stringify(context.runtime),
        }),
        new HtmlWebpackPlugin({
            template: context.compilerOnly.paths.HTML_TEMPLATE,
            templateParameters: {
                title: context.runtime.title,
                rootContainerId: context.runtime.rootContainerId,
            },
        }),
        new Style9Plugin(),
        new MiniCssExtractPlugin(),
        ...(shouldBuildStatoscopeReport ? [
            new StatoscopeWebpackPlugin({
                saveTo: context.compilerOnly.paths.REPORTS_STATOSCOPE_HTML,
                saveStatsTo: context.compilerOnly.paths.REPORTS_STATOSCOPE_JSON,
            }),
        ] : []),
    ],

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
        minimize: context.compilerOnly.mode === 'production',
        minimizer: [
            new TerserPlugin(),
        ],
    },
};
export default webpackConfig;
