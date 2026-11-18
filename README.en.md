# Mabat 2.0 — annotation, interpretation and distant reading

**e-Lijah Lab · 17 November 2026**

On Windows, double-click `start-mabat.bat`: it starts a small local server using the built-in PowerShell (no installation) and opens Mabat at `http://localhost:8765`. Keep its window open while working. Alternatively, extract the complete ZIP and open `index.html` in a current Chrome or Edge browser. Keep all files plus `assets/` and `vendor/` together. No installation, build, API key or server is required. Static hosting is also supported. Mabat 1.0 projects remain supported; the application is separate from the older single-image tool.

## New in 2.1: PDF import

Upload a PDF with the “Add images” button (alone or together with ordinary images). Every selected page becomes a separate image, in order, titled like “file · p. 3”, with the source page number kept in the page field. Choose a range (e.g. `1-5, 8, 10-12`) and a quality (1000, 1600 or 2400 px wide), see a preview of the first page, stop midway (pages already read are kept) and undo the whole import in one step. Up to 150 pages per import. There is no text recognition (OCR) and password-protected files are not supported. Reading happens in the browser with Mozilla’s pdf.js (Apache 2.0); no file leaves your computer.

## Version 2.0 replaces 1.1

Version 1.1 was focused on a single topic — comics and the Holocaust — with built-in term packs and ontologies. Version 2.0 is a general tool with no predefined topic. The 1.1 material is kept **as an example only**: in the Examples window and in the subject map of the ontology search (“Research topic example: comics and the Holocaust”). You may adopt terms from it or ignore it. The old version stays in the git history (tag `v1.1.0`, branch `v1`).

## Credit and licence

Code: MIT. Teaching materials, examples and schematic illustrations: CC BY 4.0 — free to reuse **with credit** to the e-Lijah Lab, University of Haifa. Third-party material keeps its own licence: see `ATTRIBUTION.md`, `LICENSE` and `LICENSE-CONTENT.md`.

## New in 2.0

- **Examples library** (the “Examples” button at the top): complete projects to open, vocabularies to browse and adopt from, and source lists. An example changes nothing until you choose to open it, and opening a project example asks for confirmation when you already have work. The first example: “Teaching example · from page to pattern”.
- **Add your own example** with one command: `node tools/make-example.cjs` (see `examples/README.md`). This is also how the material of the previous version can be added as an example.
- **The project file format is unchanged**: projects from 1.x open normally in 2.0.

## New in 1.3.1

- **Beginner’s guide** above every tab: six steps (images → vocabulary → annotate → interpret → distant reading → backup). It updates itself from your progress, explains each step in plain language and has a button that takes you to the right place. It can be closed; the choice is remembered.
- **The discovery dialog walks you through three steps:** search → choose → load and adopt, with an explanation of what “adopt” means.
- **Subject map:** a tree of ten classes and dozens of sub-fields based on the Dewey Decimal Classification (DDC), which BARTOC uses to classify every vocabulary. Choosing a subject fills the search fields and searches, including an extra BARTOC query by DDC code. It preloads no ontology.
- **Hebrew → English search-term translation:** a built-in glossary (`glossary.js`, extendable) followed, where available, by Chrome’s built-in translator. It runs automatically when you searched in Hebrew only, is visible and editable, and is used for searching only. Project data is not translated.

## What changed in 1.3.1

- Fixed a crash when opening **Concepts and relations → Find and adopt ontologies** (`Cannot access 'H' before initialization`).
- Fixed the LOV search address (it returned HTTP 404) and the OLS search (its response format was not read, so it always returned zero results). OLS now filters the catalogue’s ontology list locally and falls back to the OLS search endpoint.
- BARTOC search has a fallback endpoint and loads the full record (including data distributions) when a result lacks one.
- New discovery interface: **Check connection** button, a status chip per catalogue, filters (catalogue, loadable file, Hebrew), result badges (type, file available, Hebrew), one-click **Load preview** on cards with a file, size warnings for very large ontologies, `http` distribution links upgraded to HTTPS, clearer error messages, a progress notice and automatic scrolling to details.
- Removed unneeded files: `vocabularies.js` (an empty list that nothing used), `SOURCES.md` (merged into `IMPORT_GUIDE.md`), `QA_REVIEW.md` (a 1.1 review log).

## What changed in 1.3

- Hebrew and English interfaces, including RTL/LTR direction.
- Separate Hebrew/English data fields for project names, image titles and works, groups, concepts, definitions, annotation descriptions, claims and notes. Either language may be omitted. UI language never rewrites research data or invents translations.
- A bilingual display switch; additional imported languages are preserved.
- New projects start with no preloaded vocabulary or topic-specific ontology. Build terms yourself or find a source; temporary previews are not part of the project file.
- Multilingual vocabulary search, concept/property filtering, pagination, selection retained across filters and optional ancestor inclusion.
- Improved nested RDF/XML, Turtle blank-node/list parsing, locally contextualised/expanded JSON-LD, SKOS-XL, multilingual CSV and SPARQL s/p/o JSON results.
- Built-in source shortcuts, temporary HTTPS loading and local file import with explicit import reports. Source URLs and previews are not stored in project files.
- A full in-app working guide, contextual information dialogs that preserve open forms, and the original lab logo in the header.
- Topic-oriented search across BARTOC, LOV and OLS, with separate fields for research field, material, question, keywords and English/source-language terms.

## Workflow

1. Add and order images, independently of source page numbers; assign works.
2. Create vocabulary groups and terms, or find a vocabulary source and adopt selected entries. Keep visual description, structure and interpretation distinct.
3. Annotate a point, rectangle, polygon or whole page. Finish polygons with double-click or Enter; Escape cancels unfinished drawing. Move or redraw existing regions without changing identity.
4. Add interpretation claims with one or more annotations as evidence, explanation and confidence. Create custom relations within or across pages.
5. Mark reviewed groups on each page. Heatmap zeros differ from unreviewed pages.
6. Explore heatmaps, distinct-record/page/work frequencies, co-occurrence, evidence networks and tables. Return from a result to its source evidence.
7. Download a full project ZIP before ending a session. The workflow begins with your own material; no topic or vocabulary is predefined.

## Source loading

Search uses BARTOC, a broad registry covering knowledge organization systems across subjects, languages and formats; LOV, focused on Linked Data vocabularies and title/prefix search; and OLS, focused on scientific and biomedical ontologies. Their coverage and search methods differ, so results are candidates to review, not automatic recommendations. When a supported distribution is found, load it into preview and select terms to adopt. Otherwise, open the source record, download a supported file and import it locally. Online search and loading depend on remote service availability and browser CORS permissions. A registry's metadata license does not replace the license of each listed vocabulary.

Found and loaded sources remain only in the current session preview and can be removed from view. They are not saved in the project file. Adopted concepts remain with their source identifiers. Failed local imports show the filename, error and supported formats.

The source panel has no topic-specific presets. Open a general catalogue, add a data-file URL from any source or import a local file. JSKOS files containing concepts are supported; a catalogue record alone does not contain the ontology terms.

Requests are made only after explicit loading and contain no images or project data. Remote availability and CORS permissions can prevent loading. In that case, download the source data file and import it locally. A source is reported as loaded only after successful retrieval and parsing. Live catalogue APIs could not be reached from the build environment; use **Check connection** in the discovery dialog on your own machine.

Source URIs, language labels/definitions, alternative labels, broader concepts and supported relationships are retained. The importer extracts schema metadata rather than implementing all RDF/OWL semantics. It does not run inference or automatically fetch remote JSON-LD contexts or owl:imports. Data properties are retained as schema metadata and are excluded from ordinary item-to-item relation creation. See IMPORT_GUIDE.md.

## Persistence and collaboration

Autosave uses browser-local IndexedDB. It depends on the computer, browser profile and origin/file path; download ZIPs as portable backups. A full package contains images, adopted or locally created terms, translations, annotations, claims and relations. It does not include ontology files or source previews.

For collaborative work, distribute one shared baseline package so image IDs agree. Merging unifies identical page IDs/image bytes, preserves conflicting annotations/claims separately, combines review coverage and retains nonconflicting image translations. Conflicting page metadata keeps the main project's values and is reported. There is no real-time collaboration or visual deduplication of independently uploaded images.

CSV exports include separate Hebrew/English columns and JSON language maps. Vocabulary exports retain typed concept relationships. Only the full project ZIP contains all image bytes. Undo covers up to 18 actions in the current session.

## Verification

Version 1.3.1 was exercised in headless Chromium with simulated catalogue responses: every tab, search across the three catalogues, filters, load preview, term adoption, a blocked catalogue, and local import of the example CSV, Turtle, RDF/XML and JSON-LD files. The live BARTOC, LOV and OLS services were not reachable from the build environment, so their real responses are unverified. If a catalogue fails on your machine, the exact message shown in its status chip will let the request be adjusted precisely.

Developer tests only: `npm install` then `npm test`. Normal use requires no npm. The test suite uses xml-js as an XML adapter and a minimal DOM harness; these are not real-browser tests.
