// Function to initialize toggle functionality after the nav is injected


function initializeNavToggle() {

  // i am adding a short delay to ensure the elements are available after injection
  setTimeout(() => {
    const openIcon = document.getElementById('menu-open-icon');
    const closeIcon = document.getElementById('menu-close-icon');
    const menuCol = document.querySelector('.menu-col');

    // Check if elements exist before adding event listeners

    if (openIcon && closeIcon && menuCol) {

      // Click event to open the mobile menu
      openIcon.addEventListener('click', function () {
        menuCol.classList.add('active');
        openIcon.style.display = 'none';
        closeIcon.style.display = 'block';
      });

      // Click event to close the mobile menu
      closeIcon.addEventListener('click', function () {
        menuCol.classList.remove('active');
        openIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      });
    } else {
      console.error('Navigation toggle elements are missing');
    }
  }, 100);
}

// Reattach event listeners after nav injection
document.addEventListener('DOMContentLoaded', initializeNavToggle);
