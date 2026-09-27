const fs = require('fs');
const path = require('path');

// Create a simple 1x1 pixel dark gray image (base64)
const darkGrayPixel = Buffer.from(
  '/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k=',
  'base64'
);

const imagesDir = path.join(__dirname, '../public/images');

// Function to create placeholder image
function createPlaceholder(filePath) {
  const fullPath = path.join(imagesDir, filePath);
  const dir = path.dirname(fullPath);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Write the placeholder image
  fs.writeFileSync(fullPath, darkGrayPixel);
  console.log(`Created: ${filePath}`);
}

// List of all image files needed
const imageFiles = [
  'hero/hero-main.jpg',
  'hero/cta-bg.jpg',
  'hero/about-hero.jpg',
  'hero/services-hero.jpg',
  'about/profile.jpg',
  'categories/portraits.jpg',
  'categories/street.jpg',
  'categories/events.jpg',
  'categories/landscapes.jpg',
  'categories/lifestyle.jpg',
  'portfolio/portrait-01.jpg',
  'portfolio/portrait-02.jpg',
  'portfolio/portrait-03.jpg',
  'portfolio/portrait-04.jpg',
  'portfolio/portrait-05.jpg',
  'portfolio/portrait-06.jpg',
  'portfolio/portrait-07.jpg',
  'portfolio/portrait-08.jpg',
  'portfolio/portrait-09.jpg',
  'portfolio/street-01.jpg',
  'portfolio/street-02.jpg',
  'portfolio/landscape-01.jpg',
  'portfolio/landscape-02.jpg',
  'portfolio/event-01.jpg',
  'portfolio/lifestyle-01.jpg',
  'portfolio/documentary-01.jpg',
  'stories/story-01.jpg',
  'stories/story-02.jpg',
  'stories/story-03.jpg',
];

console.log('Generating placeholder images...\n');

imageFiles.forEach(createPlaceholder);

console.log('\n✓ All placeholder images generated successfully!');
