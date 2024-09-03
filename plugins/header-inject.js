function injectNav() {
  // Path to nav.html
  const navPath = '/components/nav/nav.html';

  // Fetching nav.html
  fetch(navPath)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load Nav');
      }
      return response.text();
    })
    .then(navContent => {
      // Getting the div with .nav-insert class
      const insertNav = document.querySelector('.nav-insert');
      if (insertNav) {
        
        // Injecting the nav into the div
        insertNav.innerHTML = navContent;
        
        // the toggle func and icons are in /components/nav/nav.js
        initializeNavToggle();
      }
    })
    .catch(error => {
      console.error('Error loading the Nav component:', error);
    });
}

// Injecting Nav component after the DOM loads
document.addEventListener('DOMContentLoaded', injectNav);
