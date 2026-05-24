// Quick bracket/paren check using Babel AST
const fs = require('fs');
const code = fs.readFileSync('src/components/sections/Services.jsx', 'utf8');

// Simple: check for balanced brackets, parens, braces
function check(text) {
  const stack = [];
  const pairs = {']': '[', ')': '(', '}': '{'};
  let line = 1;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '\n') line++;
    const c = text[i];
    if (c === '(' || c === '[' || c === '{') stack.push({c, line, i});
    if (c === ')' || c === ']' || c === '}') {
      const last = stack.pop();
      if (!last) return `Unexpected ${c} at line ${line}`;
      if (pairs[c] !== last.c) return `Mismatch: expected ${pairs[c]} but got ${c} at line ${line} (opened at ${last.line})`;
    }
  }
  if (stack.length > 0) return `Unclosed ${stack[0].c} at line ${stack[0].line}`;
  return 'OK';
}

console.log(check(code));
