import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from "html-webpack-plugin";
import {buildPlugin} from "./config/build/buildPlugin";
import {buildLoaders} from "./config/build/buildLoaders";

const config:webpack.Configuration = {
    mode: "development",
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    plugins: buildPlugin(),
    module: {
        rules: buildLoaders()
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
}

export default config;