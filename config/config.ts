import HtmlWebpackPlugin from "html-webpack-plugin";
import { DevServer, RuleSetRule, Mode } from "./config.types";

export const MODE: Mode = "development";
export const NAME: string = "web";
export const ENTRY: string = "./src/index.ts";

export const devServer: DevServer = {
  host: "localhost",
  port: 8080,
  hot: false,
  filename: "main.js"
};
export const TSLoaderRules: RuleSetRule = {
  test: /\.ts?$/,
  use: "ts-loader",
  exclude: /node_modules/,
  resolve: {
    extensions: [".ts", ".js"]
  }
};
export const htmlWebpackPlugin: HtmlWebpackPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html"
});
