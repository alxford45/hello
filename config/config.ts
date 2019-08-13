import HtmlWebpackPlugin from "html-webpack-plugin";
import { DevServer, RuleSetRule, Mode } from "./config.types";

export const MODE: Mode = "development";
export const NAME: string = "web";
//export const ENTRY: string = "./src/ts/index.ts";

export const devServer: DevServer = {
  host: "localhost",
  port: 8080,
  hot: false,
  filename: "main.js"
};
export const tsLoaderRules: RuleSetRule = {
  test: /\.tsx?$/,
  use: "ts-loader",
  exclude: /node_modules/,
  resolve: {
    extensions: [".ts", ".js", ".tsx"]
  }
};

export const htmlWebpackPlugin: HtmlWebpackPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html"
});
