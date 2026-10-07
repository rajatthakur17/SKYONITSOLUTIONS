// scripts/ensure_wasm_compiler.cjs
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const bindingDir = path.join(rootDir, 'node_modules', '@astrojs', 'compiler-binding');
const wasmTargetDir = path.join(rootDir, 'node_modules', '@astrojs', 'compiler-binding-wasm32-wasi');

if (!fs.existsSync(bindingDir)) {
  process.exit(0);
}

const wasiCjsInBinding = path.join(bindingDir, 'astro.wasi.cjs');
const wasmWasmInBinding = path.join(bindingDir, 'astro.wasm32-wasi.wasm');
const wasiPkgExists = fs.existsSync(path.join(wasmTargetDir, 'astro.wasi.cjs'));

if (!wasiPkgExists || !fs.existsSync(wasiCjsInBinding) || !fs.existsSync(wasmWasmInBinding)) {
  console.log('[ensure-wasm] Ensuring @astrojs/compiler-binding-wasm32-wasi for Windows Smart App Control compatibility...');
  try {
    if (!wasiPkgExists) {
      execSync('npm install --no-save --force @astrojs/compiler-binding-wasm32-wasi@0.5.1', {
        cwd: rootDir,
        stdio: 'inherit'
      });
    }

    if (fs.existsSync(wasmTargetDir)) {
      const filesToCopy = ['astro.wasi.cjs', 'astro.wasm32-wasi.wasm'];
      for (const file of filesToCopy) {
        const src = path.join(wasmTargetDir, file);
        const dst = path.join(bindingDir, file);
        if (fs.existsSync(src)) {
          fs.copyFileSync(src, dst);
        }
      }
    }
    console.log('[ensure-wasm] Astro WASM fallback successfully established.');
  } catch (err) {
    console.error('[ensure-wasm] Failed to setup WASM compiler fallback:', err.message);
  }
}
