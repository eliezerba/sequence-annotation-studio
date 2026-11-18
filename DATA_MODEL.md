# Mabat 1.3 — Data model

The canonical portable package is a ZIP containing `project.json` and the image files named in `images[].assetPath`. The live application stores `{project, assets}` in IndexedDB (`mabat-sequence-studio-v1`, object store `projects`, key `active`). `assets` maps stable image IDs to data URLs. These assets are separate from undo snapshots of project metadata.

## Project

`format: "mabat-project"`, `version: 1`, stable `id`, `name`, `author`, creation/update timestamps, and arrays below. IDs are independent of labels and image order. The order of the `images` array is the collection order. A page's source number is an independent string field; chronology is expressed through typed relations rather than inferred from page order.

| Array | Record fields and meaning |
|---|---|
| images | `id`, `name`, `title`, `work`, `page`, `width`, `height`, `mime`, `checkedGroups`; ZIP only: `assetPath` |
| groups | `id`, `label`, `layer` (`visual`, `structure`, `meaning`), `selection` (`single`, `multiple`), `color` |
| concepts | `id`, `label`, `groupId`, `parents[]`, `definition`, optional `uri`, `labels`, `source`, `license` |
| conceptLinks | `id`, `source`, `target`, `typeId`, optional note/author/timestamp |
| relationTypes | `id`, `label`, `kind`, `from`, `to`, optional source URI/definition |
| annotations | `id`, `imageId`, `label`, `conceptIds[]`, `geometry`, `note`, `author`, creation/update timestamps |
| claims | `id`, `text`, `conceptIds[]`, `evidence[]` (annotation IDs), `note`, `confidence`, `author`, timestamps |
| relations | `id`, `source`, `target`, `typeId`, `note`, `author`, timestamp |
| history | `id`, `time`, `author`, `action` — audit log capped at 250 entries, not full snapshots |

An annotation models a localized observed occurrence and the description attached to it. It is separate from a vocabulary concept and from an interpretation claim. Repeated depictions can be linked by a custom identity relation; the system does not automatically identify characters or objects across pages.

Interpretation concepts belong to `meaning` groups and are attached to claims. Visual/structural concepts belong to annotations. A claim requires at least one annotation as evidence. Several claims can share evidence; one claim can cite several annotations on one or more pages. A whole-page annotation is available when evidence is not naturally localized to a small region.

## Geometry

All coordinates are relative to source image dimensions, in the closed range 0–1. Types:

```
{"type":"point","points":[[0.2,0.4]]}
{"type":"rect","points":[[0.1,0.2],[0.6,0.8]]}
{"type":"polygon","points":[[0.1,0.1],[0.6,0.1],[0.4,0.7]]}
{"type":"page"}
```

Rectangles use normalized upper-left and lower-right corners. Changing display zoom never rewrites coordinates. Moving a region preserves its annotation ID, concepts, claims and relations. Redrawing a region replaces its geometry while preserving identity.

## Relations

`source` and `target` are IDs of annotations, claims, images or concepts. Each relation type limits endpoints to `any`, `annotation`, `claim`, `image` or `concept`. `kind` is a family label (spatial, reading, temporal, interpretive, identity, evidence, conceptual, custom), not an inference engine. Directions are explicit.

Concept hierarchy is stored in `parents` and is checked for cycles. Other concept relationships use `conceptLinks`; they do not create broader/narrower hierarchy implicitly. Spatial, narrative and reading-order relations are never automatically conflated.

## Analysis semantics

- Per-page count: distinct matching annotation or claim IDs on a page. A claim with two cited regions on that page contributes one.
- Overall occurrence count: distinct annotation/claim IDs across the filtered pages. A claim spanning two pages contributes one overall.
- Page frequency: number of filtered images containing a match.
- Work frequency: distinct `work` labels of matching images. Blank work labels count as one unspecified work.
- Descendant inclusion: optional transitive traversal of `parents`, with deduplication.
- Author filter: applied to the record being counted. A claim can be authored by B while using annotations authored by A.
- Co-occurrence: pages containing both concepts, not inferred relations between occurrences.
- Review status: `image.checkedGroups` is a shared project assertion that a group was reviewed. It is not a per-author completion record and does not imply exhaustive agreement.

`filtered_counts.csv` includes image order, source page, work, concept, per-page count, checked status and active filters. Global frequency charts deduplicate claims spanning multiple pages; simply summing per-page counts would not reproduce that global count.

## Merge

Merge is transactional: validate before replacing the current project. Identical IDs/records deduplicate; changed records fork to new IDs and dependent references are remapped. Pages with identical ID and image data URL are unified, checked-group IDs are unioned after remapping, and conflicting nonblank title/work/page fields retain the main project's values with a report. Independently created image IDs are not deduplicated by filenames or visual similarity. A shared baseline project keeps IDs aligned when several contributors edit copies.

## Export conventions

Project JSON is the canonical application format; it is not an OWL ontology or W3C Web Annotation conformance claim. CSV contains UTF-8 BOM, quoted fields, JSON-encoded arrays/geometries, and formula-safe text. The full project package is required for a portable image-inclusive backup.

Vocabulary JSON exports preserve the concept model, groups, language metadata, relation definitions and typed concept links. Image-level relation instances, review status and application state require full project ZIPs.

## Discovery and session-only source state

The portable project discriminator remains `format: "mabat-project", version: 1` for backward-compatible reading of Mabat 1.0. New fields are additive; application release is 1.3. Online catalogue query state and source previews are temporary session state and are not added to new projects.

Every editable text field may carry a language map under `record.i18n[field]`. For example:

```json
{"label":"גדר","labels":{"he":"גדר","en":"Fence","fr":"Clôture"},"i18n":{"label":{"he":"גדר","en":"Fence","fr":"Clôture"}}}
```

`label` and `definition` also expose `labels`/`definitions` maps for vocabulary exchange. Canonical legacy scalar fields remain available (Hebrew when provided, otherwise English). Interface language and bilingual display are separate local UI preferences. Rendering never rewrites canonical research content. Editing Hebrew/English retains additional imported language entries. Region-tag variants such as en-GB are retained; display may fall back by primary language.

`catalogs[]` and `sourceConnections[]` are legacy fields accepted when reading older project files. New projects omit both fields; older files have them removed when opened or merged. Source previews and custom URLs remain in memory for the current session only and are omitted from ZIP exports.

Concepts retain `altLabels`, `mappings`, `sourceTermId`, `sourcePack`, source license and URI. Relation types may retain `domain[]`, `range[]`, `ontologyParents[]`, `valueType` (resource, literal or annotation) and bilingual labels/definitions. Literal-valued properties are not offered for ordinary item-to-item links.

Vocabulary JSON exchange release 2 contains `groups`, `terms` and `conceptLinks`. Relation-definition entries use `kind: "relation"` and retain their local family in `relationKind`. Import remaps all IDs transactionally and retains the typed links when their endpoints are adopted.

CSV image/annotation/claim/relation tables add explicit Hebrew/English text columns; existing language maps remain JSON columns. Core geometry/counting semantics are unchanged. Merge retains nonconflicting page language entries while reporting conflicting ones.


## Images imported from PDF

Each selected PDF page is stored as an ordinary JPEG image: `name` is `<file>-pNNN.jpg`, `title` is `<file> · p. N`, `work` is the file name without extension and `page` is the source page number N. Nothing else about the PDF (text layer, metadata) is stored.
