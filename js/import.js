// Function to load CSS files and append them to the head
function loadCssFiles(url) {
  const cssLink = document.createElement('link');
  cssLink.rel = 'stylesheet';
  cssLink.href = url;
  cssLink.onload = () => console.log(`CSS file loaded: ${url}`);
  cssLink.onerror = () => console.error(`Failed to load CSS file: ${url}`);
  document.head.appendChild(cssLink);
}

// List of CSS files to be injected
const cssFiles = [
  './css/global-styles.css',
  './css/layout.css',
  './css/responsive.css',
  './css/typography.css',
  './css/archive.css',
  './css/forms.css',

  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Open+Sans:wght@300;400;500;600;700&display=swap'
];

// Inject each CSS file
cssFiles.forEach(loadCssFiles);

// Function to load JavaScript files and append them to the body with defer
function loadJsFiles(url) {
  const script = document.createElement('script');
  script.src = url;
  script.defer = true; // Defer attribute ensures the script runs after the HTML is parsed
  script.onload = () => console.log(`JS file loaded: ${url}`);
  script.onerror = () => console.error(`Failed to load JS file: ${url}`);
  document.body.appendChild(script);
}

// List of JavaScript files to be injected
const jsFiles = [
  './js/app.js' ,
  './js/blog.js'
];

// Inject each JavaScript file
jsFiles.forEach(loadJsFiles);

// Logging successful loading attempt
console.log('All CSS and JS files loading initiated by import.js.');
