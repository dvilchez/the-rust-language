const wasmExports = require("./wasm");

test("test Wasm function", () => {
  expect(wasmExports.f_to_c(100)).toEqual(37.77777777777778);
});
