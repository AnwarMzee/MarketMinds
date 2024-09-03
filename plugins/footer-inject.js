function injectFooter() {
  // Path to footer.html file
  const footerPath = '/components/footer/footer.html';

  // Fetching footer.html content
  fetch(footerPath)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load footer component');
      }
      return response.text();
    })
    .then(getFooterComponent => {

      // got the div with class of .footer-insert
      const footerInsert = document.querySelector('.footer-insert');
      
      if (footerInsert) {
        footerInsert.innerHTML = getFooterComponent;
      }
    })
    .catch(error => {
      // Fixed syntax error in console logging
      console.error('Error loading footer:', error);
    });
}

// Load function after the DOM loads
document.addEventListener('DOMContentLoaded', injectFooter);
