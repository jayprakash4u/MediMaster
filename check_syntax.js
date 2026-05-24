const fs = require('fs');
const code = fs.readFileSync('src/components/sections/Services.jsx','utf8');
try {
  new Function(code);
  console.log('JS parse OK');
} catch(e) {
  console.log('JS parse error:', e.message);
  console.log('at line', e.lineNumber || '?', 'col', e.columnNumber || '?');
}
