# ts-web

Typescript environment for local web development. Uses webpack for dev server.

# npm scripts

## npm run dev

Starts webpack-dev-server at port 8080 serving content from src/\*\*

# usage

    git clone https://github.com/alxford45/ts-web.git
    cd ts-env
    npm i
    npm run dev

# configuration

Customize the webpack configuration by editing constants in config/config.ts.

Add additional plugins or loaders by defining new constants in config/config.ts and importing them into config/webpack.config.ts.

Add or remove required webpack parameters by editing config/config.types.ts.

# dependencies

<ul>
  <li>typescript</li>
  <li>ts-node</li>
  <li>ts-loader</li>
  <li>webpack</li>
  <li>webpack-cli</li>
  <li>webpack-dev-server</li>
  <li>html-webpack-plugin</li>
  <li>@types/node</li>
  <li>@types/webpack</li>
  <li>@types/webpack-dev-server</li>
  <li>@types/html-webpack-plugin</li>
</ul>
