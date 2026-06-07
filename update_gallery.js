const fs = require('fs');
const path = 'src/components/pages/portfolio/GallerySection.jsx';

const folder = 'public/portfolio/design that speak';
const files = fs.readdirSync(folder).filter(f => /\.(jpg|jpeg|png|webp|gif)$/i.test(f));

const items = files.map((f, i) => {
  const src = `/portfolio/design that speak/${f}`;
  const alt = f.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ');
  return `    { id: ${i + 1}, src: "${src}", alt: "${alt}" }`;
}).join(',\n');

const newGalleryItems = `  const galleryItems = [\n${items},\n  ];`;

let content = fs.readFileSync(path, 'utf8');
content = content.replace(/const galleryItems = \[[\s\S]*?\];/, newGalleryItems);
fs.writeFileSync(path, content);
console.log(`Updated ${files.length} images`);
