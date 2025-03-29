/**
 * This script generates an HTML file for each album in the albums directory,
 * replacing the placeholders in the template file with the album data.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { albums } from './albums.mjs';

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get the path to the albums directory
const albumsDir = path.join(__dirname, '..', 'albums');

// Ensure the albums directory exists
if (!fs.existsSync(albumsDir)) {
    throw new Error(`Albums directory does not exist: ${albumsDir}`);
}

// Read the template file
const templatePath = path.join(albumsDir, 'template.html');
// Ensure the template file exists
if (!fs.existsSync(templatePath)) {
    throw new Error(`Template file does not exist: ${templatePath}`);
}
const template = fs.readFileSync(templatePath, 'utf8');

for (const album of albums) {
    // Create a directory for each album
    const albumDir = path.join(albumsDir, album.id);
    if (!fs.existsSync(albumDir)) {
        fs.mkdirSync(albumDir);
    }

    let albumHtml = template;

    // Create html for each file, replacing the placeholder with the album data
    // Placeholder is $$album.title$$ etc.
    for (const key in album) {
        if (Object.hasOwnProperty.call(album, key)) {
            let data = album[key];
            if (key === 'coverUrl') {
                data = `../..${data}`;
            }
            albumHtml = albumHtml.replaceAll(`{{album.${key}}}`, data);
        }
    }

    // Write the html file
    const htmlPath = path.join(albumDir, 'index.html');
    fs.writeFileSync(htmlPath, albumHtml);
}
