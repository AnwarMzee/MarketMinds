// js for toggling menu on mobile devices

document.addEventListener('DOMContentLoaded', function () {
  const openIcon = document.getElementById('menu-open-icon');
  const closeIcon = document.getElementById('menu-close-icon');
  const menuCol = document.querySelector('.menu-col');

// click even for open the mobile menu
  openIcon.addEventListener('click', function (){
    menuCol.classList.add('active'); 
    openIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  });


  // click event for closing  them mobile menu
  closeIcon.addEventListener('click', function(){
    menuCol.classList.remove('active');
    openIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  })
})