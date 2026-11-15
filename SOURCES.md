# Sources and attribution

Checked 2026-11-15. No external service is contacted automatically by the application.

## Comic Book Ontology (CBO)

Sean Petiya. Comic Book Ontology, version 0.16.0 (2023-06-15).

- https://comicmeta.org/cbo/
- https://github.com/comicmeta/ComicBookOntology

The included selection consists of source identifiers and locally translated labels for a few named classes. It is not a copy of the complete vocabulary. Only explicitly selected class relations are included; the display does not claim to reproduce all CBO axioms. See the source repository for original distribution and licensing details.

## CBML

John A. Walsh. “Comic Book Markup Language: An Introduction and Rationale.” Digital Humanities Quarterly, 2012.

- https://dcl.luddy.indiana.edu/cbml/

CBML is a TEI-based XML vocabulary, not an OWL ontology. The local comics teaching pack is inspired by its structural distinctions and other common comics terminology; it is not an official CBML release, a complete conversion or a CBML import/export implementation.

## ICON

Bruno Sartini, Sofia Baroncini, Marieke van Erp, Francesca Tomasi and Aldo Gangemi. 2023. “ICON: An Ontology for Comprehensive Artistic Interpretations.” Journal on Computing and Cultural Heritage 16(3), Article 59. DOI: https://doi.org/10.1145/3594724

- Ontology: https://w3id.org/icon/ontology/
- Source RDF: https://raw.githubusercontent.com/br0ast/ICON/main/Ontology/current/icon.rdf
- Version checked: 2.2.0. License stated in source: CC BY 4.0.

The included selection comprises Recognition and three interpretation-level classes, with local Hebrew labels. The application uses its own claim/evidence model; it does not implement all ICON constraints or assert complete ICON conformance.

## EHRI

- https://portal.ehri-project.eu/vocabularies
- https://documentation.ehri-project.eu/en/latest/administration/skos-ingest.html
- Francesco Gelati. 2019. “Implementing an archival, multilingual and Semantic Web-compliant taxonomy by means of SKOS.” https://aclanthology.org/W19-9005/

EHRI vocabularies are offered as a prepared import source. No EHRI dataset is bundled: a suitable distribution and redistribution license were not verified for this package. The local Holocaust-comics teaching pack must not be attributed to EHRI.

## Getty AAT

- https://www.getty.edu/research-conservation/tools-databases/vocabularies/data-services/

Prepared import source only. No Getty dataset is bundled. Getty states ODC-By 1.0 attribution requirements for its vocabulary data; include the required Getty credit and source identifiers when importing and redistributing such records.

## Local teaching packs and illustrations

The generic starter pack, Holocaust-comics discussion pack, schematic demo illustrations and example vocabularies were created for this tool. They are educational starting points, not research findings or historical source reproductions. Local teaching sample data and illustrations may be reused under CC0-1.0. Their labels do not establish mappings to external authority IDs unless an explicit source URI is present.

## JSZip

JSZip 3.10.1, by Stuart Knightley, David Duponchel, Franz Buchinger, António Afonso and contributors. Distributed here under its MIT license; see `vendor/JSZip-LICENSE.md`. https://stuk.github.io/jszip/

## Release 1.1 additions and corrections

Bundled inventories (204 total terms and relation types): generic starter 10, local comics pack 23, CBO selection 77, ICON selection 37, local Holocaust-comics pack 33, DCMI Type 12, SKOS selection 12. CBO and ICON remain selections, not full semantic implementations. Only selected explicit hierarchy assertions are included; absent edges do not assert that concepts are unrelated.

CBO licensing was verified from the official repository README: CC BY 4.0. The expanded selection includes 57 named classes and 20 relation candidates. ICON includes 25 named classes and 12 property candidates; union-valued domains/ranges are deliberately not collapsed to arbitrary single members.

Additional authoritative references:

- DCMI Terms: https://www.dublincore.org/specifications/dublin-core/dcmi-terms/
- DCMI RDF representations: https://www.dublincore.org/schemas/rdfs/
- DCMI Type RDF: https://www.dublincore.org/specifications/dublin-core/dcmi-terms/dublin_core_type.rdf
- DCMI documents: CC BY 4.0 unless otherwise indicated; Hebrew labels here are locally adapted.
- SKOS namespace: https://www.w3.org/2004/02/skos/core
- SKOS RDF: https://www.w3.org/2009/08/skos-reference/skos.rdf
- RDF 1.1 Turtle: https://www.w3.org/TR/turtle/
- Iconclass linked data: https://iconclass.org/help/lod
- Iconclass simple JSON example: https://iconclass.org/52D1.json
- CIDOC CRM versions: https://cidoc-crm.org/versions-of-the-cidoc-crm

Iconclass's documented simple JSON response uses `n`, `p`, `txt`, `kw`; the importer preserves supplied languages and uses the nearest broader entry in its path. No Iconclass or CIDOC dataset is bundled.

The original e-Lijah Lab logo is reused from the provided prior-system asset. The header displays the lab portion of the existing partner-logo strip by CSS framing; it is not a newly generated or redrawn logo.

xml-js 1.6.11 (MIT) is a development/test dependency for an XML adapter. It is not loaded by the browser application and is not bundled as runtime vendor code.
