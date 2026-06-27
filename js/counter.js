document.addEventListener('DOMContentLoaded', () => {
  const animatedCounters = document.querySelectorAll('.counter-animate');

  const animateCounter = (element) => {
    const target = parseFloat(element.getAttribute('data-target'));
    const prefix = element.getAttribute('data-prefix') || '';
    const suffix = element.getAttribute('data-suffix') || '';
    const duration = 2000; // ms
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing out quad
      const easedProgress = progress * (2 - progress);
      const currentValue = Math.floor(easedProgress * target);

      if (prefix === 'Rp ') {
        element.textContent = prefix + currentValue.toLocaleString('id-ID') + suffix;
      } else {
        element.textContent = prefix + currentValue.toString() + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        if (prefix === 'Rp ') {
          element.textContent = prefix + target.toLocaleString('id-ID') + suffix;
        } else {
          element.textContent = prefix + target.toString() + suffix;
        }
      }
    };

    requestAnimationFrame(updateCounter);
  };

  // Trigger counters with IntersectionObserver when entering viewport
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animatedCounters.forEach(counter => {
    observer.observe(counter);
  });
});
