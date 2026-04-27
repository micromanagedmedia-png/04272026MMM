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

  // Backgrounds
  content = content.replace(/bg-\[\#020617\]/g, 'bg-background');
  content = content.replace(/bg-\[\#0a1628\]/g, 'bg-slate-50');

  // Text colors (only standalone, not inside specific hover states if we can avoid it, but let's just replace class tokens)
  content = content.replace(/\btext-white\b/g, 'text-foreground');
  content = content.replace(/\btext-slate-100\b/g, 'text-slate-800');
  content = content.replace(/\btext-slate-200\b/g, 'text-slate-700');
  content = content.replace(/\btext-slate-300\b/g, 'text-slate-700');
  content = content.replace(/\btext-slate-400\b/g, 'text-slate-600');
  
  // Borders
  content = content.replace(/border-white\/10/g, 'border-border');
  content = content.replace(/border-white\/20/g, 'border-slate-300');
  content = content.replace(/border-white\/5/g, 'border-slate-100');

  // The custom amber colors -> use primary/accent
  content = content.replace(/text-amber-500/g, 'text-primary');
  content = content.replace(/bg-amber-500/g, 'bg-primary');
  content = content.replace(/border-amber-500/g, 'border-primary');
  content = content.replace(/shadow-amber-500/g, 'shadow-primary');

  // Fix buttons: bg-accent with text-slate-900 or text-gray-900 -> text-white
  content = content.replace(/bg-accent(.+?)text-slate-900/g, 'bg-accent$1text-white');
  content = content.replace(/bg-accent(.+?)text-gray-900/g, 'bg-accent$1text-white');
  content = content.replace(/bg-cyan-400(.+?)text-gray-900/g, 'bg-accent$1text-white');
  
  // Also any bg-cyan-400 to bg-accent
  content = content.replace(/bg-cyan-400/g, 'bg-accent');
  content = content.replace(/text-cyan-400/g, 'text-primary');
  content = content.replace(/border-cyan-400/g, 'border-primary');

  // specific hardcoded dark grays in backgrounds
  content = content.replace(/bg-gray-800/g, 'bg-gray-100');
  content = content.replace(/bg-gray-900/g, 'bg-gray-50');
  content = content.replace(/bg-gray-950/g, 'bg-white');
  
  content = content.replace(/text-gray-300/g, 'text-gray-600');
  content = content.replace(/text-gray-400/g, 'text-gray-500');

  // specific shadow for dark theme
  content = content.replace(/shadow-black\/50/g, 'shadow-slate-200');
  
  // fix dark classes logic in template loops e.g. dark:bg-..., dark:text-...
  content = content.replace(/dark:bg-gray-[0-9]+/g, '');
  content = content.replace(/dark:text-gray-[0-9]+/g, '');
  content = content.replace(/dark:border-gray-[0-9]+/g, '');

  fs.writeFileSync(file, content);
});

console.log('Migration completed.');
