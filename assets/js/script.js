window.addEventListener('scroll', function () {
    const head = document.querySelector('.head');
    if (window.scrollY > 50) {
      head.style.height = '80px';
    } else {
      head.style.height = '120px';
    }
  });
