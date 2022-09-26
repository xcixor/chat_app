const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackBundleAnalyzer = require("webpack-bundle-analyzer");

process.env.NODE_ENV = "production";

module.exports = {
	mode: "production",
	target: "web",
	devtool: "source-map",
	entry: "./index.js",
	output: {
		path: path.resolve(__dirname, "build"),
		publicPath: "/",
		filename: "bundle.js",
	},
	plugins: [
		new webpackBundleAnalyzer.BundleAnalyzerPlugin({ analyzerMode: "static" }),

		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css",
		}),
		new webpack.DefinePlugin({
			// to ensure react is built in production mode
			"process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
			"process.env.WSS_PORT": JSON.stringify("http://localhost:9500"),
		}),
		new HtmlWebpackPlugin({
			template: "public/index.html",
			favicon: "public/favicon.ico",
			inject: true,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true,
			},
		}),
		new ESLintPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /(\.css)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							sourceMap: true,
						},
					},
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [() => [require("cssnano")]],
							},
							sourceMap: true,
						},
					},
				],
			},
		],
	},
};
