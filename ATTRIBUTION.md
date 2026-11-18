# Attribution and licence check

Checked 2026-11-18 against the official sources below. No external service is contacted automatically by the application; online catalogue search and loading happen only when you press the buttons.

## Bundled material (appears in Examples)

| Material | In Mabat | Licence | Verified from | Credit to give |
|---|---|---|---|---|
| Comic Book Ontology (CBO) 0.16.0 | 57 class labels + 20 relation candidates (selection; Hebrew labels are local) | CC BY 4.0 | README of https://github.com/comicmeta/ComicBookOntology | Sean Petiya (2015). Comic Book Ontology. http://comicmeta.org/cbo |
| ICON ontology 2.2.0 | 25 classes + 12 property candidates (selection; Hebrew labels are local) | CC BY 4.0 | https://w3id.org/icon/ontology/ | Sartini, Baroncini, van Erp, Tomasi, Gangemi (2023). ICON. J. Comput. Cult. Herit. 16(3), 59. https://doi.org/10.1145/3594724 |
| DCMI Type Vocabulary | 12 class labels (Hebrew labels are local) | CC BY 4.0 ("unless indicated otherwise, DCMI documents are licensed under CC BY 4.0") | https://www.dublincore.org/ | DCMI — https://www.dublincore.org/specifications/dublin-core/dcmi-terms/ |
| SKOS | 12 term URIs/labels (Hebrew labels are local) | W3C document licence | **Not re-verified in this check** (only URIs and short names are used) | W3C — https://www.w3.org/2004/02/skos/core |
| CBML (Walsh 2012) | Inspiration only; nothing copied | — | — | J. A. Walsh, "Comic Book Markup Language", DHQ 2012 |
| Local packs, example projects, schematic illustrations, example vocabulary files | Created for Mabat | CC BY 4.0 (see `LICENSE-CONTENT.md`) | Author's decision | e-Lijah Lab, University of Haifa |

## Prepared sources (links only — no data bundled)

- **EHRI** — https://portal.ehri-project.eu/vocabularies. No EHRI dataset is bundled: a redistribution licence was not verified. The Holocaust-comics pack is a local discussion proposal and must not be attributed to EHRI.
- **Getty AAT** — https://www.getty.edu/research-conservation/tools-databases/vocabularies/data-services/. Not bundled. Getty states ODC-By 1.0 attribution requirements (carried over from release 1.1, not re-verified): include the Getty credit and source identifiers when you reuse records.
- **Iconclass** (https://iconclass.org/help/lod), **CIDOC CRM** (https://cidoc-crm.org/versions-of-the-cidoc-crm): not bundled.

## Software

- JSZip 3.10.1 (MIT) — `vendor/JSZip-LICENSE.md`.
- PDF.js 6.2.108, legacy build (Apache License 2.0), Mozilla and the PDF.js contributors — https://mozilla.github.io/pdf.js/ — `vendor/pdfjs/LICENSE`. Used to turn PDF pages into images in the browser; loaded only when a PDF is imported.
- xml-js 1.6.11 (MIT) — development/test dependency only; not loaded by the app.
- The e-Lijah Lab logo (`assets/elijah-lab-logo.png`) is the lab's own mark; it is not covered by the repository licences.

## Notes

Bundled selections are not complete copies of the source vocabularies and do not assert complete conformance. Absent edges do not mean concepts are unrelated. Search results and catalogue records are discovery metadata; check each vocabulary's own licence before reusing its terms.
