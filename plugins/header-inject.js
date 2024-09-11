// header-inject.js

// Import functions from nav.js
import { initializeAfterNavInjection } from '../components/Nav/nav.js';

// Function to inject navigation HTML and CSS
export function injectNav() {
  const navPath = './components/Nav/nav.html';

  // Fetch and inject the navigation HTML
  fetch(navPath)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load Nav');
      }
      return response.text();
    })
    .then(navContent => {
      const insertNav = document.querySelector('.nav-insert');
      if (insertNav) {
        insertNav.innerHTML = navContent;
        initializeAfterNavInjection();
        injectNavCss();
      }
    })
    .catch(error => {
      console.error('Error loading the Nav component:', error);
    });
}

// Function to inject CSS into the head
function injectNavCss() {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = './components/Nav/nav.css';
  link.onload = () => console.log('Nav CSS loaded successfully.');
  link.onerror = () => console.error('Failed to load Nav CSS.');
  document.head.appendChild(link);
}

// Ensure the function is executed after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', injectNav);
