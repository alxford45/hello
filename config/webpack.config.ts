import { Configuration } from "./config.types";
import {
  //ENTRY,
  MODE,
  NAME,
  tsLoaderRules,
  devServer,
  htmlWebpackPlugin
} from "./config";

const config: Configuration = {
  name: NAME,
  mode: MODE,
  //entry: ENTRY,
  devServer: devServer,
  module: {
    rules: [tsLoaderRules]
  },
  plugins: [htmlWebpackPlugin]
};

export default config;
