# מבט · Mabat — annotation, interpretation and distant reading

**e-Lijah Lab** · version 2.1

סטודיו בדפדפן לתיוג תמונות, פרשנות וקריאה מרחוק, עם איתור ואימוץ של אונטולוגיות. הכול רץ במחשב שלכם: אין שרת, אין חשבון, ושום תמונה לא נשלחת החוצה.
A browser studio for annotating images, interpreting them and reading collections at a distance, with ontology search and selective adoption. Everything runs on your computer: no server, no account, no image leaves your machine.

## Start

- **Windows:** double-click `start-mabat.bat`.
- **Any system:** open `index.html` in Chrome or Edge (or run `python -m http.server` in this folder and open `http://localhost:8000`).
- Single-file build: `node tools/build-standalone.cjs` creates `dist/Mabat-standalone.html` (also attached to releases).
- Images and **PDF files** can be added with “Add images”; each PDF page becomes an image.

## Docs

- [README (עברית)](README.he.md) · [README (English)](README.en.md)
- [Import guide](IMPORT_GUIDE.md) · [Data model](DATA_MODEL.md) · [Examples](examples/README.md) · [Changelog](CHANGELOG.md)

## Credit and licence

Code: MIT (`LICENSE`). Teaching materials and examples: CC BY 4.0 — reuse with credit to the **e-Lijah Lab, University of Haifa** (`LICENSE-CONTENT.md`). Third-party material: `ATTRIBUTION.md`.

Mabat 2.0 replaces 1.1. The comics-and-Holocaust material of 1.1 is kept as an example only; 1.1 remains available in git history (tag `v1.1.0`, branch `v1`).

## Third-party

JSZip 3.10.1 (MIT) — `vendor/JSZip-LICENSE.md`. PDF.js 6.2.108 (Apache-2.0) — `vendor/pdfjs/LICENSE`.
