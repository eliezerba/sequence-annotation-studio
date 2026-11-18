#!/usr/bin/env node
/* Builds a single self-contained HTML file (CSS, scripts, logo and the lazily-loaded pdf.js bundle inlined).
   Run: node tools/build-standalone.cjs [output.html]   (default: dist/Mabat-standalone.html) */
const fs=require('fs'),path=require('path');
const root=path.join(__dirname,'..'),read=f=>fs.readFileSync(path.join(root,f),'utf8');
let html=read('index.html');
html=html.replace('<link rel="stylesheet" href="style.css">',()=>'<style>'+read('style.css')+'</style>');
html=html.replace('src="assets/elijah-lab-logo.png"',()=>'src="data:image/png;base64,'+fs.readFileSync(path.join(root,'assets/elijah-lab-logo.png')).toString('base64')+'"');
html=html.replace(/<script src="([^"]+)"><\/script>/g,(m,src)=>{
  const js=read(src);if(/<\/script/i.test(js))throw Error('Script contains a closing script tag: '+src);
  return '<script>\n'+js.replace(/^\n+|\n+$/g,'')+'\n</script>';});
const bundle=read('vendor/pdfjs/pdfjs-bundle.js').replace(/<!--/g,'<\\!--');
html=html.replace('</body>',()=>'<script type="text/plain" id="mabat-pdfjs-bundle">\n'+bundle+'\n</script></body>');
const out=process.argv[2]||path.join(root,'dist','Mabat-standalone.html');
fs.mkdirSync(path.dirname(out),{recursive:true});fs.writeFileSync(out,html);
console.log('Wrote',out,(html.length/1048576).toFixed(2)+' MB');
