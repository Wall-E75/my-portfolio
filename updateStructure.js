// updateStructure.js
import fs from 'fs';
import path from 'path';

const rootDir = '.'; // dossier racine du projet

function readDirRecursive(dir, prefix = '') {
  let output = '';
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    if (item.isDirectory()) {
      output += `\n${prefix}${item.name}/:\n`;
      output += readDirRecursive(path.join(dir, item.name), prefix + '  ');
    } else {
      output += `${prefix}${item.name}\n`;
    }
  }
  return output;
}

const structure = `.:${readDirRecursive(rootDir)}`;

fs.writeFileSync('structure.txt', structure);

console.log('structure.txt mis à jour !');
