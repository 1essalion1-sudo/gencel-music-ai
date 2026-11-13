// Same-origin worker entry point for FFmpeg.wasm.
// The imported module and its relative dependencies are fetched as CORS-enabled ES modules.
import "https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg@0.12.10/dist/esm/worker.js";
