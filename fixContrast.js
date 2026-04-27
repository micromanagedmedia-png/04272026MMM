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

  // Fix remaining amber hovers that clash with the blue theme
  content = content.replace(/hover:text-amber-[0-9]+/g, 'hover:text-accent hover:opacity-80');
  
  // Clean up any stray `text-white` specifically that might have snuck into h tags or other critical components
  content = content.replace(/class="([^"]*)text-white([^"]*)"/g, 'class="$1text-slate-800$2"');
  
  // However, buttons that SHOULD be text-white on a dark background needs to be restored if we broke them
  // e.g. bg-primary text-slate-800 needs to be text-white
  content = content.replace(/bg-primary([^"]*)text-slate-800/g, 'bg-primary$1text-white');
  content = content.replace(/bg-accent([^"]*)text-slate-800/g, 'bg-accent$1text-white');
  
  // the dark mode remnants from tailwind
  content = content.replace(/dark:text-foreground/g, 'text-foreground');
  content = content.replace(/dark:text-gray-[0-9]+/g, '');
  content = content.replace(/dark:bg-transparent/g, '');
  content = content.replace(/dark:group-hover:text-blue-[0-9]+/g, '');

  fs.writeFileSync(file, content);
});

console.log('Fixed rollovers and contrast tags.');
