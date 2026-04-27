import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.astro') || file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Fix Buttons text color: "text-slate-950" or "text-[#020617]" accompanied by bg-primary
  content = content.replace(/bg-primary([^"]*)text-slate-[9][0-9][0-9]?/g, 'bg-primary$1text-white');
  content = content.replace(/bg-primary([^"]*)text-\[\#020617\]/g, 'bg-primary$1text-white');
  
  // Fix the "Featured" badge specifically, which has `bg-primary text-[#020617]`
  content = content.replace(/bg-primary\s+text-\[\#020617\]/g, 'bg-primary text-white');

  // Fix icon circles: bg-slate-900 inside light cards (which currently contrast badly with the dark primary text)
  content = content.replace(/bg-slate-900([^"]*)text-primary/g, 'bg-primary/5$1text-primary');
  
  // Fix Logo block in Navbar (bg-[#020617] with dark M)
  content = content.replace(/bg-\[\#020617\]([^"]*)text-slate-100([^"]*)>M</g, 'bg-primary$1text-white$2>M<');
  content = content.replace(/bg-background([^"]*)text-slate-800([^"]*)>M</g, 'bg-primary$1text-white$2>M<');

  fs.writeFileSync(file, content);
});

console.log('Fixed contrast on badges, buttons, and logo.');
