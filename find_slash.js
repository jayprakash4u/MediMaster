const fs = require('fs');
const buf = fs.readFileSync('src/components/sections/Services.jsx');
let in=false, start=0;
for(let i=0;i<buf.length;i++){
  if(buf[i]===0x2F && !in){ start=i; in=true; }
  else if(in && buf[i]===0x2F){
    const ctx = Buffer.from(buf.slice(Math.max(0,start-20),i+20)).toString();
    console.log(`Pair /.../ at bytes ${start}-${i}: ...${ctx}...`);
    in=false;
  }
}
