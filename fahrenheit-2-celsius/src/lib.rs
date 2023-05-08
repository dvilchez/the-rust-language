use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn f_to_c(f: f64) -> f64 {
    (f - 32.0) * 5.0 / 9.0
}
