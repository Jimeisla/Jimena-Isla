// Cambiar navbar al hacer scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Cambiar navbar al hacer scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Contador animado al cargar
const counters = document.querySelectorAll('.contador');

counters.forEach(counter => {
  const isPercentage = counter.classList.contains('porcentaje');

  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const speed = 200;
    const count = +counter.innerText.replace(/[+,%]/g, '');
    const increment = Math.ceil(target / speed);

    if (count < target) {
      const nextValue = count + increment > target ? target : count + increment;
      counter.innerText = isPercentage
        ? nextValue + '%'
        : '+' + nextValue.toLocaleString();

      setTimeout(updateCount, 20);
    } else {
      counter.innerText = isPercentage
        ? target + '%'
        : '+' + target.toLocaleString();
    }
  };

  updateCount();
});





