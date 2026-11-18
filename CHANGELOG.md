# Changelog

## 2.1.0 — 2026-11-18
- **PDF import**: each selected page becomes an image (range, quality, preview, stop, one-step undo, 150 pages per import). pdf.js 6.2.108 (Apache-2.0) is vendored in `vendor/pdfjs/` and loaded only when a PDF is imported.
- `tools/build-standalone.cjs` builds the single-file HTML; `tools/build-pdfjs-bundle.cjs` repacks pdf.js.

## 2.0.0 — 2026-11-18
- **Replaces 1.1.0.** The topic-specific material of 1.1 (comics and the Holocaust: teaching packs, CBO/ICON/DCMI/SKOS selections, source presets) is kept as **examples only**, in the Examples window and as an example topic in the ontology-search subject map.
- Licences: code MIT; teaching materials CC BY 4.0 (credit to e-Lijah Lab, University of Haifa); third-party licences verified for CBO, ICON and DCMI — see `ATTRIBUTION.md`.
- Beginner's guide is closed by default (opens with one click; the choice is remembered).
- Examples library and `tools/make-example.cjs` for adding examples.
- Beginner's guide above every tab; three-step guidance inside the ontology search.
- Subject map (DDC-based) and Hebrew→English search-term translation.
- Ontology search rebuilt: BARTOC, LOV and OLS fixed; connection check, per-catalogue status, filters, one-click preview.
- Crash fixed when opening "Find and adopt ontologies".
- `start-mabat.bat` launcher for Windows (local server, no installation).
- Project file format unchanged (`mabat-project`, version 1): files from 1.x open normally.
- Removed: `vocabularies.js`, `SOURCES.md`, `QA_REVIEW.md`, the Hebrew-only demo JSON.

## 1.3.0
- Bilingual interface and data, ontology import (Turtle, RDF/XML, JSON-LD, CSV, JSKOS), catalogue search.
