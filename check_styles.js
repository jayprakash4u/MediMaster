const fs = require('fs');
const buf = fs.readFileSync('src/components/sections/Services.jsx');
const text = buf.toString('utf8');
const lines = text.split('\n');

// Scan for malformed style attributes
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  // Find style={{ 
  const styleIdx = line.indexOf('style={{');
  if (styleIdx !== -1) {
    // Find closing }}
    const depth = 0;
    let depthCount = 0;
    let hasIssue = false;
    let lastQuote = '';
    for (let j = styleIdx; j < line.length; j++) {
      const c = line[j];
      if (c === '{' && j >= 7 && line.slice(j - 2, j + 1) !== '}}' && line[j-1] !== '{') {
        // might be doubling up {{ if not part of that pattern - check triple brace }
      }
    }
    // Simple check: count { and } in style block
    const segment = line.substring(styleIdx);
    const openBraces = (segment.match(/\{/g) || []).length;
    const closeBraces = (segment.match(/\}/g) || []).length;
    const openParens = (segment.match(/\(/g) || []).length;
    const closeParens = (segment.match(/\)/g) || []).length;
    if (openBraces !== closeBraces || openParens !== closeParens) {
      console.log(`Line ${i+1}: style mismatch - braces:${openBraces}/${closeBraces} parens:${openParens}/${closeParens}`);
      console.log('Text:', line.substring(styleIdx, styleIdx+120));
      console.log('---');
    }
  }
}
