# Vocabulary and ontology import — Mabat 1.1

Open **Concepts and relations → Sources and packs**. Choose a bundled selection, import a file, or open Sources and connections. Import creates a preview; terms enter the research model only after explicit adoption.

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

This is an RDF metadata extractor, not a formally complete standards processor. TriG, RDF-star and N3 inference syntax are not supported. DOCTYPE/ENTITY declarations are rejected; use an expanded RDF/XML export. Remote JSON-LD contexts are reported but not fetched automatically. Supply an inline/expanded representation when the context is required to interpret compact keys. No OWL inference or automatic owl:imports retrieval occurs.

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

Source URIs identify concepts independently of display labels. Re-adopting the same URI reuses the existing concept and adds missing language metadata without overwriting local text. URI-less terms are keyed within their source pack; use authoritative URIs for identity across independently imported datasets.

The UI edits Hebrew/English maps but preserves other imported languages in JSON/project/vocabulary exports. Imported regional language tags remain present. A missing translation falls back to available source text; it is never machine-translated silently.

Bundled CBO/ICON/SKOS/DCMI content is a documented selection. The local Holocaust-comics and comics-structure packs are teaching proposals. They must not be presented as EHRI or full CBML/ICON implementations.

## Online loading

Use an HTTPS data-file URL. Authentication credentials in URLs are rejected; requests omit credentials and contain no project images or annotations. Each request has a 22-second timeout and a 20 MiB response cap. Add smaller subsets for larger vocabularies. A failed request leaves existing annotations and models intact.

A source server may reject browser CORS requests even when the URL opens in a new tab. Download the RDF/JSON/CSV file and use local import in that case. Profiles with no verified distribution file, such as the included EHRI/CIDOC references, open official documentation rather than pretending to be connected.

## Vocabulary versus project packages

Vocabulary exchange contains the model, languages and concept relationships. A full `.mabat.zip` additionally contains images, ordered collection, annotations, claims, relations and source previews. Data-only analysis snapshots are not full backups. Mabat 1.0 project JSON remains readable; old single-image-tool project ZIPs are not migrated automatically.
