import {
  Output as IOutput,
  Configuration as IConfiguration,
  Resolve as IResolve,
  Module as IModule,
  RuleSetRule as IRuleSetRule,
  RuleSetCondition,
  RuleSetUse
} from "webpack";
import { Configuration as IDevConfig } from "webpack-dev-server";
import { Tapable } from "tapable";

export type Output = IOutput & {
  path: string;
  filename: string;
};

export type DevServer = IDevConfig & {
  host: string;
  hot: boolean;
  port: number;
};
export type Resolve = IResolve & {
  extensions: string[];
};
export type Module = IModule & {
  rules: RuleSetRule[];
};
export type RuleSetRule = IRuleSetRule & {
  test: RuleSetCondition;
  use: RuleSetUse;
  exclude: RuleSetCondition;
  resolve: Resolve;
};
export type Mode = "development" | "production" | "none";
export type Configuration = IConfiguration & {
  name: string;
  mode: Mode;
  entry: string;
  devServer: DevServer;
  module: Module;
  plugins: Tapable.Plugin[];
  //output: Output
};
