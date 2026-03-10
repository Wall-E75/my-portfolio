// updateStructure.js
import fs from 'fs';
import path from 'path';

const rootDir = '.';

const EXCLUDED_DIRS = new Set([
  'node_modules', '.next', '.git', '.turbo', 'coverage', 'dist', 'build',
]);

const EXCLUDED_FILES = new Set([
  'structure.txt', '.DS_Store', 'Thumbs.db',
]);

const EXCLUDED_EXTENSIONS = new Set([
  '.lock', '.log',
]);

function readDirRecursive(dir, prefix = '') {
  let output = '';
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    if (item.isDirectory()) {
      if (EXCLUDED_DIRS.has(item.name)) continue;
      output += `\n${prefix}${item.name}/:\n`;
      output += readDirRecursive(path.join(dir, item.name), prefix + '  ');
    } else {
      if (EXCLUDED_FILES.has(item.name)) continue;
      if (EXCLUDED_EXTENSIONS.has(path.extname(item.name))) continue;
      output += `${prefix}${item.name}\n`;
    }
  }
  return output;
}

const structure = `.:${readDirRecursive(rootDir)}`;

fs.writeFileSync('structure.txt', structure);

console.log('structure.txt mis à jour !');
