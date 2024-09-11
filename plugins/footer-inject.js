// footer-inject.js

export function injectFooter() {
  const footerPath = '../components/Footer/footer.html';

  fetch(footerPath)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load footer component');
      }
      return response.text();
    })
    .then(getFooterComponent => {
      const footerInsert = document.querySelector('.footer-insert');
      if (footerInsert) {
        footerInsert.innerHTML = getFooterComponent;
      }
    })
    .catch(error => {
      console.error('Error loading footer:', error);
    });
}

// Ensure the function is executed after DOM is fully loaded
document.addEventListener('DOMContentLoaded', injectFooter);
