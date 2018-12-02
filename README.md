# wasm-playground
A playground for compiling and running WebAssembly applications.

## Getting Started
To get started with development first install the Emscripten SDK, see [Emscripten website documentation](https://kripken.github.io/emscripten-site/docs/getting_started/downloads.html).

To activate PATH and other environment variables and persist it in shell so that you can call `emcc` directly, add the `source $EMSDK_DIR/emsdk_env.sh` command to your `.bashrc` file `/home/$USER/.bashrc`.

## Development

### Configuration
Copy `.env.example` to `.env` - `cat .env.example >> .env` 

### Build commands
    * start - Builds the project and runs the server
    * build:dev - Builds both the server and the client projects
    * build:client:dev - Builds the client project on webpack.dev.js config
    * build:server:dev - Builds the client project on webpack.server.js config
    * start:worker - Transpiles and runs the queue worker
    * test - Run the tests