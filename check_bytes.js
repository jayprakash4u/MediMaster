const fs = require('fs');
const code = fs.readFileSync('src/components/sections/Services.jsx');

// Check raw bytes at line 359
const lines = code.split(/\r?\n/);
console.log('Total lines:', lines.length);
for (let i = 355; i < 365 && i < lines.length; i++) {
  const line = lines[i];
  const buf = Buffer.from(line);
  console.log(`\nLine ${i+1}: "${line}"`);
  console.log('Bytes:', buf.map(b => b.toString(16).padStart(2,' ')).join(' '));
}

// Also check for CRLF vs LF
console.log('\nHas CRLF:', code.includes('\r\n'));
const crIndex = code.indexOf('\r\n');
if (crIndex !== -1) {
  const buf = Buffer.from(code.substring(crIndex - 20, crIndex + 5));
  console.log('CRLF at byte', crIndex, ':', buf.toString('hex'));
}
