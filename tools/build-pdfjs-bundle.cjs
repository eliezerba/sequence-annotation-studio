#!/usr/bin/env node
/* Packs pdf.js (legacy build) into vendor/pdfjs/pdfjs-bundle.js so it works from file:// and from the single-file build.
   Needs: npm install (devDependency pdfjs-dist). Run: node tools/build-pdfjs-bundle.cjs [path/to/pdfjs-dist] */
const fs=require('fs'),path=require('path');
const root=process.argv[2]||path.dirname(require.resolve('pdfjs-dist/package.json'));
const pkg=JSON.parse(fs.readFileSync(path.join(root,'package.json'),'utf8'));
const lib=fs.readFileSync(path.join(root,'legacy/build/pdf.min.mjs'),'utf8');
const worker=fs.readFileSync(path.join(root,'legacy/build/pdf.worker.min.mjs'),'utf8');
const out=path.join(__dirname,'..','vendor','pdfjs');
fs.mkdirSync(out,{recursive:true});
fs.writeFileSync(path.join(out,'pdfjs-bundle.js'),'/* pdf.js '+pkg.version+' (Apache-2.0, Mozilla) packed as strings; see vendor/pdfjs/README.md */\nwindow.MabatPdfJs={version:'+JSON.stringify(pkg.version)+',lib:'+JSON.stringify(lib).replace(/<\/script/gi,'<\\/script')+',worker:'+JSON.stringify(worker).replace(/<\/script/gi,'<\\/script')+'};\n');
fs.copyFileSync(path.join(root,'LICENSE'),path.join(out,'LICENSE'));
console.log('pdf.js',pkg.version,'->',path.join(out,'pdfjs-bundle.js'));
