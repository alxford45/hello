import { Configuration } from "./config.types";
import {
  ENTRY,
  MODE,
  NAME,
  TSLoaderRules,
  devServer,
  htmlWebpackPlugin
} from "./config";

const config: Configuration = {
  name: NAME,
  mode: MODE,
  entry: ENTRY,
  devServer: devServer,
  module: {
    rules: [TSLoaderRules]
  },
  plugins: [htmlWebpackPlugin]
};

export default config;
