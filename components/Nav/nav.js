// nav.js

// Function to initialize the toggle functionality
export function initializeNavToggle() {
  const openIcon = document.getElementById('menu-open-icon');
  const closeIcon = document.getElementById('menu-close-icon');
  const menuCol = document.querySelector('.menu-col');

  if (!openIcon || !closeIcon || !menuCol) {
    console.error('Navigation toggle elements are missing');
    return;
  }

  const updateIconVisibility = () => {
    const isDesktop = window.innerWidth > 768;
    openIcon.style.display = isDesktop ? 'none' : 'block';
    closeIcon.style.display = 'none';
    menuCol.classList.remove('active');
  };

  openIcon.addEventListener('click', () => {
    menuCol.classList.add('active');
    openIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  });

  closeIcon.addEventListener('click', () => {
    menuCol.classList.remove('active');
    openIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  });

  window.addEventListener('resize', updateIconVisibility);

  updateIconVisibility();
}

// Function to initialize the toggle after the nav is injected
export function initializeAfterNavInjection() {
  const checkNavLoaded = setInterval(() => {
    if (document.getElementById('menu-open-icon') && document.querySelector('.menu-col')) {
      clearInterval(checkNavLoaded);
      initializeNavToggle();
    }
  }, 100);
}
