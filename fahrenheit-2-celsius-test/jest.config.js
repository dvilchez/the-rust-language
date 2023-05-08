module.exports = {
  transform: {
    "^.+\\.wasm$": "<rootDir>/wasm-loader.js",
    "^.+\\.js$": "babel-jest",
  },
  moduleNameMapper: {
    "^my-wasm-module$": "wasm.js",
  },
};
