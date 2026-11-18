# Vocabulary and ontology import — Mabat 1.3

Open **Concepts and relations → Find and adopt ontologies**. A new project has no preloaded ontology. Search a catalogue, import a file, or add a data-file URL. The source is shown in a temporary session preview; only terms you explicitly adopt enter the research model.

Source previews and custom source URLs exist only during the current app session. Use **Remove source from view** to clear an unsuitable source. Project files store adopted terms and their source identifiers, never the source ontology file or its preview.

Choose **Find vocabularies online** to search BARTOC, LOV and OLS by research field, material description, question and keywords; include English or source-language terms when helpful. Search results are registry records, not necessarily downloadable ontology files. Open a result to inspect its metadata and any data distributions. A supported HTTPS distribution can be loaded into the existing preview and selective-adoption flow. If none is available or the remote server blocks browser access, download the data file from the source record and import it locally. Searches use different catalog capabilities: BARTOC is broad across knowledge organization systems; LOV focuses on Linked Data vocabulary titles/prefixes; OLS focuses on scientific and biomedical ontologies. Search terms are sent to these APIs; project content, images and annotations are not sent.

Search labels, alternative labels, source IDs and URIs in all stored languages. Pagination does not clear selection. “Select all search results” adds the complete filtered result set, not only the visible page. “Include broader concepts” adds only ancestors actually present in the source file. Missing ancestors are reported rather than invented.

## Supported inputs

| Input | Mapping |
|---|---|
| Mabat vocabulary JSON | Language maps, groups, labels, definitions, broader terms, typed concept links, relation families and endpoint categories |
| CSV | Comma, semicolon or tab separators detected from the header; quoted fields supported |
| Turtle / N-Triples | Prefix/base declarations, named resources, literals, language/datatype suffixes, blank-node property lists and RDF lists |
| RDF/XML | Namespaces, inherited xml:base/xml:lang, nested named resources, nodeID references, Collection/Resource parse types and SKOS-XL labels |
| JSON-LD | Expanded IRIs, inline/local contexts, compact prefixes, language containers, @graph, @id and @value |
| SPARQL JSON | `results.bindings` with variables `s`, `p`, `o`; literal language tags retained |
| Iconclass simple JSON | Official `n`, `p`, `txt`, `kw` shape (also `notation` accepted); all supplied language labels retained, path reduced to the immediate broader concept |

JSKOS vocabulary records with included concept entries are also accepted; a BARTOC registry record with only scheme metadata is not the vocabulary data itself. The importer gives a specific message for such records.

This is an RDF metadata extractor, not a formally complete standards processor. TriG, RDF-star and N3 inference syntax are not supported. DOCTYPE/ENTITY declarations are rejected; use an expanded RDF/XML export. Remote JSON-LD contexts are not fetched automatically; a small set of recognized namespace contexts is handled locally, and unsupported contexts are reported. Supply an inline/expanded representation when a remote context is required to interpret compact keys. No OWL inference or automatic owl:imports retrieval occurs.

## CSV fields

Required: `label`, `name`, `label_he` or `label_en`.

Optional fields: `id`, `uri`, `definition`, `definition_he`, `definition_en`, `group`, `group_he`, `group_en`, `layer`, `parent` or `parents`, `kind`. Multiple parents use `|`. Layer is visual, structure or meaning; default visual. Kind is concept or relation.

See `examples/vocabulary-bilingual.csv`, `examples/vocabulary.ttl`, `examples/vocabulary.rdf` and `examples/vocabulary.jsonld`.

## RDF properties mapped

- skos:prefLabel, rdfs:label, dcterms:title — language labels.
- skos:definition, skos:scopeNote, rdfs:comment, dcterms:description — language descriptions.
- skos:altLabel, skos:hiddenLabel — alternative labels by language.
- skos:broader/narrower, rdfs:subClassOf — hierarchy.
- rdfs:subPropertyOf — source property hierarchy metadata.
- skos:related — concept links.
- skos:exactMatch/closeMatch, owl:equivalentClass/equivalentProperty — mapping metadata.
- skosxl:prefLabel/altLabel + skosxl:literalForm — language labels through label nodes.
- Named classes, object/data/annotation properties — schema candidates.
- rdfs:domain/range — retained schema metadata. Explicit named domain/range pairs can appear as graph edges, not as research findings.

Anonymous restrictions and lists are parsed so that surrounding labels and named hierarchy are not lost. They are not automatically interpreted as category definitions. Union domains/ranges are not reduced to arbitrary single members. Datatype properties cannot be used as ordinary item-to-item links; their literal-value semantics are retained as metadata.

The report distinguishes triples read, mapped metadata and material not mapped into application fields. This is not a claim that unmapped semantics can be reconstructed from exported Mabat project data: keep the authoritative ontology source separately.

## Identity, languages and sources

Source URIs identify concepts independently of display labels. Re-adopting the same URI reuses the existing concept and adds missing language metadata without overwriting local text. URI-less terms are keyed within their source; use authoritative URIs for identity across independently imported datasets.

The UI edits Hebrew/English maps but preserves other imported languages in JSON/project/vocabulary exports. Imported regional language tags remain present. A missing translation falls back to available source text; it is never machine-translated silently.

Catalogue entries are discovery portals, not bundled ontologies. A loaded source preview is session-only. Keep the original source file separately if you need a full standards-complete copy.

## Online loading

Use an HTTPS data-file URL. Authentication credentials in URLs are rejected; requests omit credentials and contain no project images or annotations. Each request has a 22-second timeout and a 20 MiB response cap. Add smaller subsets for larger vocabularies. A failed request leaves existing annotations and models intact.

A source server may reject browser CORS requests even when the URL opens in a new tab. Download the RDF/JSON/CSV file and use local import in that case. The app includes no topic-specific source profiles; catalogue links are discovery portals, and a custom source URL is added only for the current session.

## Vocabulary versus project packages

Vocabulary exchange contains the model, languages and concept relationships. A full `.mabat.zip` additionally contains images, ordered collection, annotations, claims and relations. It excludes ontology files, registry metadata and source previews. Data-only analysis snapshots are not full backups. Mabat 1.0 project JSON remains readable; old single-image-tool project ZIPs are not migrated automatically.

## Catalogues and connection check

New projects include no ontology terms, topic-specific presets or saved source URLs. The discovery dialog searches:

- BARTOC — https://bartoc.org — broad coverage across knowledge organization systems, subjects, languages and formats. Records often list downloadable distributions.
- Linked Open Vocabularies (LOV) — https://lov.linkeddata.es/dataset/lov — Linked Data vocabularies; search centred on vocabulary names and prefixes. The vocabulary’s version files are offered as load options.
- Ontology Lookup Service (OLS) — https://www.ebi.ac.uk/ols4 — scientific and biomedical ontologies. Mabat reads the OLS ontology list once per session and filters it locally by your terms; each record offers the original file location and the OLS download endpoint.

Use **Check connection** in the dialog to see, per catalogue, whether the browser can reach it. Each search also shows a status chip per catalogue (results, skipped because no English terms were supplied, or the reason for failure). Results can be filtered by catalogue, by “loadable file available” and by Hebrew coverage. Very large ontologies (more than about 25,000 terms) are flagged because the 20 MiB response cap will usually reject their files; download and import a subset instead.

Technical references: JSZip 3.10.1 (MIT, `vendor/JSZip-LICENSE.md`); RDF 1.1 Turtle https://www.w3.org/TR/turtle/
