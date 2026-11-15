# Mabat 1.1 — annotation, interpretation and distant reading

**e-Lijah Lab · 15 November 2026**

Extract the complete ZIP and open `index.html` in a current Chrome or Edge browser. Keep all files plus `assets/` and `vendor/` together. No installation, build, API key or server is required. Static hosting is also supported. Mabat 1.0 projects remain supported; the application is separate from the older single-image tool.

## What changed

- Hebrew and English interfaces, including RTL/LTR direction.
- Separate Hebrew/English data fields for project names, image titles and works, groups, concepts, definitions, annotation descriptions, claims and notes. Either language may be omitted. UI language never rewrites research data or invents translations.
- A bilingual display switch; additional imported languages are preserved.
- **204 terms and relation types in seven packs:** generic starter, comics structure, CBO, ICON, Holocaust-comics discussion, DCMI Type and SKOS.
- Multilingual vocabulary search, concept/property filtering, pagination, selection retained across filters and optional ancestor inclusion.
- Improved nested RDF/XML, Turtle blank-node/list parsing, locally contextualised/expanded JSON-LD, SKOS-XL, multilingual CSV and SPARQL s/p/o JSON results.
- HTTPS data-source loading, custom source profiles, cached previews stored in the project, and explicit import reports.
- A full in-app working guide, contextual information dialogs that preserve open forms, and the original lab logo in the header.

## Workflow

1. Add and order images, independently of source page numbers; assign works.
2. Create vocabulary groups and terms, or inspect a source pack and adopt selected entries. Keep visual description, structure and interpretation distinct.
3. Annotate a point, rectangle, polygon or whole page. Finish polygons with double-click or Enter; Escape cancels unfinished drawing. Move or redraw existing regions without changing identity.
4. Add interpretation claims with one or more annotations as evidence, explanation and confidence. Create custom relations within or across pages.
5. Mark reviewed groups on each page. Heatmap zeros differ from unreviewed pages.
6. Explore heatmaps, distinct-record/page/work frequencies, co-occurrence, evidence networks and tables. Return from a result to its source evidence.
7. Download a full project ZIP before ending a session. Try the teaching demo first; its images are schematic, not historical sources.

## Source loading

Bundled packs are available offline and clearly labelled as selections or local teaching proposals. Connection profiles cover CBO, ICON, SKOS, Dublin Core, Iconclass and Getty AAT; EHRI and CIDOC CRM are provided as official-source references without invented distribution URLs. Add your own HTTPS data-file URL or import a local file.

Requests are made only after explicit loading and contain no images or project data. Remote availability and CORS permissions can prevent loading. In that case, download the source data file and import it locally. A source is reported as loaded only after successful retrieval and parsing. Online source profiles were not all live-tested in a real browser.

Source URIs, language labels/definitions, alternative labels, broader concepts and supported relationships are retained. The importer extracts schema metadata rather than implementing all RDF/OWL semantics. It does not run inference or automatically fetch remote JSON-LD contexts or owl:imports. Data properties are retained as schema metadata and are excluded from ordinary item-to-item relation creation. See IMPORT_GUIDE.md and SOURCES.md.

## Persistence and collaboration

Autosave uses browser-local IndexedDB. It depends on the computer, browser profile and origin/file path; download ZIPs as portable backups. A full package contains images, vocabulary, translations, annotations, claims, relations and stored source previews.

For classroom aggregation, distribute one shared baseline package so image IDs agree. Merging unifies identical page IDs/image bytes, preserves conflicting annotations/claims separately, combines review coverage and retains nonconflicting image translations. Conflicting page metadata keeps the main project's values and is reported. There is no real-time collaboration or visual deduplication of independently uploaded images.

CSV exports include separate Hebrew/English columns and JSON language maps. Vocabulary exports retain typed concept relationships. Only the full project ZIP contains all image bytes. Undo covers up to 18 actions in the current session.

## Verification

Data/import/bilingual/merge tests and full image ZIP round trips passed, including autosave/restore through an IndexedDB adapter. Network SVGs were separately inspected. Chromium execution was blocked by the preparation environment, so **actual browser layout, real IndexedDB and live CORS were not fully verified**. See QA_REVIEW.md for specific defects found and corrected.

Developer tests only: `npm install` then `npm test`. Normal use requires no npm. The test suite uses xml-js as an XML adapter and a minimal DOM harness; these are not real-browser tests.
