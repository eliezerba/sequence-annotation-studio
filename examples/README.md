# Examples

The **Examples** button in the app lists everything registered in this folder.

- `groups.js` — the groups shown in the Examples window.
- `teaching-demo.js` — a small complete example project (comics and the Holocaust, schematic pages).
- `packs.js` — the term packs and source lists of Mabat 1.1, kept as examples only.
- `vocabulary*.csv/.ttl/.rdf/.jsonld` — tiny sample files in each supported import format (use *Import from file*).

## Adding an example

```
node tools/make-example.cjs <file> <id> "<Hebrew title>" "<English title>" \
  --desc-he "..." --desc-en "..." --source "https://..." --license "CC BY 4.0"
```

`<file>` can be a Mabat project (`.json` or `.mabat.zip`), a Mabat vocabulary export, or a vocabulary/ontology file (`.csv .ttl .rdf .owl .jsonld`). The tool writes `examples/<id>.js`; then add
`<script src="examples/<id>.js"></script>` to `index.html` before `app.js`. Node.js is the only requirement.

Kinds: **project** (opens as a full project), **vocabulary** (shown as a temporary preview; the user adopts selected terms) and **sources** (a list of data-file URLs for session loading).

## Before you publish an example

Include only material you are allowed to redistribute, and fill `--source` and `--license`. For third-party vocabularies whose redistribution terms are unclear, prefer a **sources** entry (a link) over copying the data.
