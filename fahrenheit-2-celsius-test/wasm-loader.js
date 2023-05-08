module.exports = {
  process(src, filename) {
    if (filename.endsWith(".wasm")) {
      const wasmCode = Buffer.from(src, "binary");
      return `module.exports = new WebAssembly.Module(Uint8Array.from(${JSON.stringify(
        [...wasmCode]
      )}));`;
    }
    return `module.exports = ${JSON.stringify(src)};`;
  },
};
