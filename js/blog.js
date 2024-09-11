// for trancating the excerpt lengths 
document.addEventListener('DOMContentLoaded', function () {
  const excerpts = document.querySelectorAll('.exerpt');

  excerpts.forEach((excerpt) => {
    const words = excerpt.textContent.split(' ');
    if (words.length > 17) {
      excerpt.textContent = words.slice(0, 17).join(' ') + '...';
    }
  });
});
