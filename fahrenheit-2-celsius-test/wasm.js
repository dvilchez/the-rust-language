const fs = require("fs");
const path = require("path");
const wasmFile = fs.readFileSync(
  path.join(
    __dirname,
    "../fahrenheit-2-celsius/pkg/fahrenheit_2_celsius_bg.wasm"
  )
);

const wasmModule = new WebAssembly.Module(wasmFile);
const wasmInstance = new WebAssembly.Instance(wasmModule);

module.exports = wasmInstance.exports;
