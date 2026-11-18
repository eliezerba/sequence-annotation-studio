# pdf.js (vendored)

Mozilla PDF.js 6.2.108, legacy build — https://mozilla.github.io/pdf.js/ — licensed under the **Apache License 2.0** (`LICENSE` in this folder). Copyright the PDF.js authors / Mozilla.

`pdfjs-bundle.js` contains `pdf.min.mjs` and `pdf.worker.min.mjs` packed as strings, so the library loads from `file://` and from the single-file build. It is loaded **only when a PDF is imported**. Rebuild with `node tools/build-pdfjs-bundle.cjs` (needs `npm install`).

Limits: no OCR; fonts that are not embedded in a PDF may render with substitute fonts, because the optional CMap and standard-font data packages are not bundled.
