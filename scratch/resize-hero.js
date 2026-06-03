const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const sourcePath = path.join(__dirname, '..', 'banner hero', 'banner hero.jpg');
const targetPath = path.join(__dirname, '..', 'public', 'images', 'hero-fachada.png');

console.log('Source path:', sourcePath);
console.log('Target path:', targetPath);

if (!fs.existsSync(sourcePath)) {
  console.error('Error: Source image not found at', sourcePath);
  process.exit(1);
}

// Ensure target directory exists
const targetDir = path.dirname(targetPath);
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

sharp(sourcePath)
  .resize(3840, 2160, {
    fit: 'cover',
    position: 'center',
    kernel: 'lanczos3'
  })
  .sharpen()
  .png({ quality: 90, compressionLevel: 8 })
  .toFile(targetPath)
  .then((info) => {
    console.log('Success! Hero image resized to 4K and saved as PNG.');
    console.log('Image details:', info);
  })
  .catch((err) => {
    console.error('Error during image processing:', err);
    process.exit(1);
  });
