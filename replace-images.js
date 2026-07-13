const fs = require('fs');
const path = require('path');

const images = [
  '/images/solar_family_1783983635437.png',
  '/images/solar_farm_1783983615127.png',
  '/images/solar_hero_1783983605510.png',
  '/images/solar_team_1783983625434.png',
  '/images/solar_training_1783983645115.png'
];

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const unsplashRegex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+(\?[^"'\s]*)?/g;
      if (unsplashRegex.test(content)) {
        content = content.replace(unsplashRegex, () => {
          return images[Math.floor(Math.random() * images.length)];
        });
        fs.writeFileSync(fullPath, content);
        console.log('Updated ' + fullPath);
      }
    }
  }
}

processDirectory('./app');
processDirectory('./components');
