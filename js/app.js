// app.js

// Import the functions from header-inject and footer-inject
import { injectNav } from '../plugins/header-inject.js';
import { injectFooter } from '../plugins/footer-inject.js';

// Execute imported functions when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  injectNav();
  injectFooter();
});

// Additional script for tabs on the service section on the home page
document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');

  tabs.forEach((tabElement) => {
    tabElement.addEventListener('click', function () {
      tabs.forEach((tab) => tab.classList.remove('active'));
      tabContents.forEach((content) => content.classList.remove('active'));

      this.classList.add('active');
      const activeTabContent = document.getElementById(this.dataset.tab);
      activeTabContent.classList.add('active');
    });
  });
});
